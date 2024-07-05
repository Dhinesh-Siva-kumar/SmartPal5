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

export interface Equipment {
  id: string;
  equipmentCode: string;
  equipmentName: string;
  parentEquipment: string;
  model: string;
  marker: string;
  equipmentType: any[];
  drawingNo: any[];
  vesselClass: any[];
  vesselName: string;
  department: string;
  type: any[];
  safetyLevel: any[];
  maker: string;
  models: string;
  builder: any[];
  partNumber: string;
  inheritRHrsFrom: string;
  RHrsSeparately: string;
  mountAllowed: string;
  circulating: string;
  legacyCode: string;
  active: string;
  lastModifiedUser: string;
  lastModifiedDate: string;
  preferredVendor: string;
  installationDate: string;
  equipmentDimension: string;
  equipmentMaterial: string;
  maerskArtCode: string;
  circulatingEquipment: any[];
  remarks: string;
}


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

  equipment: any = {} as Equipment; // Initialize the equipment model

  overallData: any = [];

  constructor() {
    const data = localStorage.getItem('overallData');
    if (data) {
      this.overallData = JSON.parse(data) as Equipment[];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedID'] && changes['selectedID'].currentValue) {
      const matchedObject = this.overallData.find((equipment: Equipment) => equipment.id === this.selectedID);
      if (matchedObject) {
        console.log('Matched Equipment:', matchedObject);
        this.equipment = matchedObject;
      } else {
        console.log('No matching equipment for ID:', this.selectedID);
        this.equipment = {};
      }
    }
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
    const index = this.overallData.findIndex((e: Equipment) => e.id === this.equipment.id);
    if (index !== -1) {
      this.overallData[index] = this.equipment;
      localStorage.setItem('overallData', JSON.stringify(this.overallData));
    }
  }
}
