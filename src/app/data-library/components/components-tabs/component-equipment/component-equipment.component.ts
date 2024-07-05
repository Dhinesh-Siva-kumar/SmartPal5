import { Component, Input, NgModule, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
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

type InputSize = 'small' | 'medium' | 'large';

export const products = [
  {
    ProductID: 1,
    ProductName: "Chai",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "10 boxes x 20 bags",
    UnitPrice: 18.0,
    UnitsInStock: 39,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    Category: {
      CategoryID: 1,
      CategoryName: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales",
    },
  },
  {
    ProductID: 2,
    ProductName: "Chang",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "24 - 12 oz bottles",
    UnitPrice: 19.0,
    UnitsInStock: 17,
    UnitsOnOrder: 40,
    ReorderLevel: 25,
    Discontinued: false,
    Category: {
      CategoryID: 1,
      CategoryName: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales",
    },
  },
  {
    ProductID: 3,
    ProductName: "Aniseed Syrup",
    SupplierID: 1,
    CategoryID: 2,
    QuantityPerUnit: "12 - 550 ml bottles",
    UnitPrice: 10.0,
    UnitsInStock: 13,
    UnitsOnOrder: 70,
    ReorderLevel: 25,
    Discontinued: false,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
    },
  },
  {
    ProductID: 4,
    ProductName: "Chef Anton's Cajun Seasoning",
    SupplierID: 2,
    CategoryID: 2,
    QuantityPerUnit: "48 - 6 oz jars",
    UnitPrice: 22.0,
    UnitsInStock: 53,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
    },
  },
  {
    ProductID: 5,
    ProductName: "Chef Anton's Gumbo Mix",
    SupplierID: 2,
    CategoryID: 2,
    QuantityPerUnit: "36 boxes",
    UnitPrice: 21.35,
    UnitsInStock: 0,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: true,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
    },
  },
  {
    ProductID: 6,
    ProductName: "Grandma's Boysenberry Spread",
    SupplierID: 3,
    CategoryID: 2,
    QuantityPerUnit: "12 - 8 oz jars",
    UnitPrice: 25.0,
    UnitsInStock: 120,
    UnitsOnOrder: 0,
    ReorderLevel: 25,
    Discontinued: false,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
    },
  },
  {
    ProductID: 7,
    ProductName: "Uncle Bob's Organic Dried Pears",
    SupplierID: 3,
    CategoryID: 7,
    QuantityPerUnit: "12 - 1 lb pkgs.",
    UnitPrice: 30.0,
    UnitsInStock: 15,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    Category: {
      CategoryID: 7,
      CategoryName: "Produce",
      Description: "Dried fruit and bean curd",
    },
  },
  {
    ProductID: 8,
    ProductName: "Northwoods Cranberry Sauce",
    SupplierID: 3,
    CategoryID: 2,
    QuantityPerUnit: "12 - 12 oz jars",
    UnitPrice: 40.0,
    UnitsInStock: 6,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: false,
    Category: {
      CategoryID: 2,
      CategoryName: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings",
    },
  },
  {
    ProductID: 9,
    ProductName: "Mishi Kobe Niku",
    SupplierID: 4,
    CategoryID: 6,
    QuantityPerUnit: "18 - 500 g pkgs.",
    UnitPrice: 97.0,
    UnitsInStock: 29,
    UnitsOnOrder: 0,
    ReorderLevel: 0,
    Discontinued: true,
    Category: {
      CategoryID: 6,
      CategoryName: "Meat/Poultry",
      Description: "Prepared meats",
    },
  }
];

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
  styleUrl: './component-equipment.component.scss'
})


export class ComponentEquipmentComponent implements OnChanges {

  @Input() selectedID: any;

  equipment: any = {}; // Initialize the equipment model

  overallData = [
    {
      id: '1',
      equipmentCode: '101.1',
      equipmentName: 'Equipment-1',
      parentEquipment: 'Equipment-1 parent',
      model: '950',
      marker: 'INDIA',
      equipmentType: 'boston',
      drawingNo: 'boston',
      vesselClass: 'boston',
      vesselName: 'vessel-1-eqp',
      department: 'mariapps',
      type: 'boston',
      safetyLevel: 'boston',
      maker: '',
      models: '',
      builder: 'boston',
      partNumber: 'boston',
      inheritRHrsFrom: '',
      RHrsSeparately: '',
      mountAllowed: '',
      circulating: '',
      legacyCode: '',
      active: false,
      lastModifiedUser: '',
      lastModifiedDate: '',
      preferredVendor: '',
      installationDate: '3/10/2000', 
      equipmentDimension: '',
      equipmentMaterial: '',
      maerskArtCode: '',
      circulatingEquipment: 'boston',
      remarks: '',
    },
    {
      id: '2',
      equipmentCode: '101.2',
      equipmentName: 'Equipment-2',
      parentEquipment: 'Equipment-2 parent',
      model: '950',
      marker: 'INDIA',
      equipmentType: 'chicago',
      drawingNo: 'chicago',
      vesselClass: 'chicago',
      vesselName: 'vessel-2-eqp',
      department: 'mariapps',
      type: 'chicago',
      safetyLevel: 'chicago',
      maker: '',
      models: '',
      builder: 'chicago',
      partNumber: 'chicago',
      inheritRHrsFrom: '',
      RHrsSeparately: '',
      mountAllowed: '',
      circulating: '',
      legacyCode: '',
      active: false,
      lastModifiedUser: '',
      lastModifiedDate: '',
      preferredVendor: '',
      installationDate: '3/10/2000', 
      equipmentDimension: '',
      equipmentMaterial: '',
      maerskArtCode: '',
      circulatingEquipment: 'chicago',
      remarks: '',
    },
    {
      id: '3',
      equipmentCode: '101.3',
      equipmentName: 'Equipment-3',
      parentEquipment: 'Equipment-3 parent',
      model: '950',
      marker: 'INDIA',
      equipmentType: 'boston',
      drawingNo: 'boston',
      vesselClass: 'boston',
      vesselName: 'vessel-3-eqp',
      department: 'mariapps',
      type: 'boston',
      safetyLevel: 'boston',
      maker: '',
      models: '',
      builder: 'boston',
      partNumber: 'boston',
      inheritRHrsFrom: '',
      RHrsSeparately: '',
      mountAllowed: '',
      circulating: '',
      legacyCode: '',
      active: true,
      lastModifiedUser: '',
      lastModifiedDate: '',
      preferredVendor: '',
      installationDate: '3/10/2000', 
      equipmentDimension: '',
      equipmentMaterial: '',
      maerskArtCode: '',
      circulatingEquipment: 'boston',
      remarks: '',
    },
    {
      id: '4',
      equipmentCode: '201.1',
      equipmentName: 'Equipment-2-1',
      parentEquipment: 'Equipment-2-1 parent',
      model: '950',
      marker: 'INDIA',
      equipmentType: 'boston',
      drawingNo: 'boston',
      vesselClass: 'boston',
      vesselName: 'vessel-2-1-eqp',
      department: 'mariapps',
      type: 'boston',
      safetyLevel: 'boston',
      maker: '',
      models: '',
      builder: 'boston',
      partNumber: 'boston',
      inheritRHrsFrom: '',
      RHrsSeparately: '',
      mountAllowed: '',
      circulating: '',
      legacyCode: '',
      active: true,
      lastModifiedUser: '',
      lastModifiedDate: '',
      preferredVendor: '',
      installationDate: '3/10/2000', 
      equipmentDimension: '',
      equipmentMaterial: '',
      maerskArtCode: '',
      circulatingEquipment: 'boston',
      remarks: '',
    },
    {
      id: '5',
      equipmentCode: '201.2',
      equipmentName: 'Equipment-2',
      parentEquipment: 'Equipment-2 parent',
      model: '950',
      marker: 'INDIA',
      equipmentType: 'boston',
      drawingNo: 'boston',
      vesselClass: 'boston',
      vesselName: 'vessel-2.3-eqp',
      department: 'mariapps',
      type: 'boston',
      safetyLevel: 'boston',
      maker: '',
      models: '',
      builder: 'boston',
      partNumber: 'boston',
      inheritRHrsFrom: '',
      RHrsSeparately: '',
      mountAllowed: '',
      circulating: '',
      legacyCode: '',
      active: false,
      lastModifiedUser: '',
      lastModifiedDate: '',
      preferredVendor: '',
      installationDate: '3/10/2000', 
      equipmentDimension: '',
      equipmentMaterial: '',
      maerskArtCode: '',
      circulatingEquipment: 'boston',
      remarks: '',
    },
    {
      id: '6',
      equipmentCode: '201.3',
      equipmentName: 'Equipment-2-3',
      parentEquipment: 'Equipment-2-3 parent',
      model: '950',
      marker: 'INDIA',
      equipmentType: 'boston',
      drawingNo: 'boston',
      vesselClass: 'boston',
      vesselName: 'vessel-2-3-eqp',
      department: 'mariapps',
      type: 'boston',
      safetyLevel: 'boston',
      maker: '',
      models: '',
      builder: 'boston',
      partNumber: 'boston',
      inheritRHrsFrom: '',
      RHrsSeparately: '',
      mountAllowed: '',
      circulating: '',
      legacyCode: '',
      active: false,
      lastModifiedUser: '',
      lastModifiedDate: '',
      preferredVendor: '',
      installationDate: '3/10/2000', 
      equipmentDimension: '',
      equipmentMaterial: '',
      maerskArtCode: '',
      circulatingEquipment: 'boston',
      remarks: '',
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedID']) {
      console.log('Received Node ID:', this.selectedID);

      const matchedObject = this.overallData.find(equipment => equipment.id === this.selectedID);
      if (matchedObject) {
        console.log('Matched Equipment:', matchedObject);
        this.equipment = matchedObject
      } else {
        console.log('No matching equipment found for ID:', this.selectedID);
      }

    }
  }

  inputSize: InputSize = 'medium';

  getPlaceholder(value: any): string {
    return value + ' *';
  }  


  constructor( ) {
    console.log("equipment")
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

}
