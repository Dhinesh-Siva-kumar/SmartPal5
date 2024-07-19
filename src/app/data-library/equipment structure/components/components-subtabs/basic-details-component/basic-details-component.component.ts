import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { FormFieldModule } from "@progress/kendo-angular-inputs";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { FormsModule } from '@angular/forms';

export interface Equipment {
  id: string;
  equipmentCode: string, 
    equipmentName: string, 
    parentEquipment: string,
    equipment: string,
    jobplan: string,
    mappedVessel: string,
    serviceLetter: string,
    spareParts: string,
    userManual: string,
}

@Component({
  selector: 'app-basic-details-component',
  standalone: true,
  imports: [
    CommonModule,
    DateInputsModule,
    FormFieldModule,
    InputsModule,
    FloatingLabelModule,
    LabelModule,
    DropDownsModule,
    FormsModule
  ],
  templateUrl: './basic-details-component.component.html',
  styleUrl: './basic-details-component.component.scss'
})
export class BasicDetailsComponentComponent {

  @Input() selectedID: any;

  apiData: any = [];
  equipment: any = {} as Equipment; // Initialize the equipment model

  constructor() {
    const data = localStorage.getItem('apiData');
    if (data) {
      this.apiData = JSON.parse(data) as Equipment[];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedID'] && changes['selectedID'].currentValue) {
      const matchedObject = this.apiData.find((equipment: Equipment) => equipment.id === this.selectedID);
      if (matchedObject) {
        console.log('Matched Equipment:', matchedObject);
        this.equipment = matchedObject;
      } else {
        console.log('No matching equipment for ID:', this.selectedID);
        this.equipment = {};
      }
    }
  }

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

  public data: any[] = [
    {
      text: "Furniture",
      items: [
        { text: "Tables & Chairs" },
        { text: "Sofas" },
        { text: "Occasional Furniture" },
      ],
    },
    {
      text: "Decor",
      items: [
        { text: "Bed Linen" },
        { text: "Curtains & Blinds" },
        { text: "Carpets" },
      ],
    },
  ];

}
