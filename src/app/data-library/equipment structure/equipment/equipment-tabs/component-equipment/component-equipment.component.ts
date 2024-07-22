import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputModule } from '@progress/kendo-angular-dateinputs';
import { FormFieldModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { Subscription } from 'rxjs';
import { products } from '../../dataFormat';
import { Equipment } from '../../dataFormat';

type InputSize = 'small' | 'medium' | 'large';


@Component({
  selector: 'app-component-equipment',
  standalone: true,
  imports: [
    GridModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    LabelModule,
    CommonModule,
    DropDownsModule,
    DateInputModule,
    FormFieldModule,
    ButtonsModule,
    IconsModule,
    DateInputsModule,
    FloatingLabelModule,
    FormsModule,
  ],
  templateUrl: './component-equipment.component.html',
  styleUrls: ['../../../../data-library.component.scss', './component-equipment.component.scss' ]
})


export class ComponentEquipmentComponent implements  OnInit, OnDestroy  {

  @ViewChild('equipmentForm', { static: true }) equipmentForm!: NgForm;

  equipment: any = {} as Equipment; // Initialize the equipment model

  apiData: any = [];


  selectedID: any;
  private subscription?: Subscription;

  constructor(private shareComponent: SharedService) {
    const data = localStorage.getItem('apiData');
    if (data) {
      this.apiData = JSON.parse(data) as Equipment[];
    }
  }

  ngOnInit(): void {
    // Subscribe to changes in selectedTreeId
    this.subscription = this.shareComponent.selectedTreeId$.subscribe(id => {
      this.selectedID = id;
      this.updateEquipment();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateEquipment(): void {
    const matchedObject = this.apiData.find((equipment: Equipment) => equipment.id === this.selectedID);
    if (matchedObject) {
      console.log('Matched Equipment:', matchedObject);
      this.equipment = matchedObject;
    } else {
      console.log('No matching equipment for ID:', this.selectedID);
      this.equipment = {};
    }

    this.fetchData();
  }

  fetchData(): void {
    this.shareComponent.callGetApi().subscribe(
      data => {
        // this.equipment = data.data;
        console.log("data: ",data.data )
      },
      error => {
        console.error("Error occurred while fetching data: ", error);
      }
    );
  }

  inputSize: InputSize = 'medium';

  getPlaceholder(value: any): string {
    return value + ' *';
  }  


  public gridData: unknown[] = products;

  public value: Date = new Date(2000, 2, 10);
  public areaList: Array<string> = [
    "Boston",
    "Chicago",
    "Houston",
    "Los Angeles",
    "Miami",
    "New York",
    "Philadelphia",
    "San Francisco",
    "Seattle",
  ];

  public childUpdateFunc(): void {
    const index = this.apiData.findIndex((e: Equipment) => e.id === this.equipment.id);
    if (index !== -1) {
      console.log("working")
      this.apiData[index] = this.equipment;
      localStorage.setItem('apiData', JSON.stringify(this.apiData));
    }
  }

  submitted = false;

  validateForm() {
    this.submitted = true;
    console.log('this.equipmentForm.valid;', this.equipmentForm)
    return this.equipmentForm.valid;
  }

  
}
