import { Component } from '@angular/core';

import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ColumnMenuSettings } from '@progress/kendo-angular-grid';
import { products } from '../../dataFormat';
import { Equipment } from '../../dataFormat';

type InputSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-component-mapped-vessel',
  standalone: true,
  imports: [
    GridModule,
    PDFModule,
    ExcelModule,
    InputsModule
  ],
  templateUrl: './component-mapped-vessel.component.html',
  styleUrl: './component-mapped-vessel.component.scss'
})
export class ComponentMappedVesselComponent {

  inputSize: InputSize = 'medium';
  public sizes = [10, 15, 20];

  getPlaceholder(value: any): string {
    return value + ' *';
  }  

  constructor() {
    console.log("Job plan")
  }

  public gridData: unknown[] = products;


  public menuSettings: ColumnMenuSettings = {
    autoSizeColumn: true,
    autoSizeAllColumns: true,
  };

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
}
