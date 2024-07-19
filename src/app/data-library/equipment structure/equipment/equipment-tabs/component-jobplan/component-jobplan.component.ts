import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ColumnMenuSettings } from '@progress/kendo-angular-grid';
import { BasicDetailsComponentComponent } from '../../equipment-subtabs/basic-details-component/basic-details-component.component';
import { AttachmentsComponentComponent } from '../../equipment-subtabs/attachments-component/attachments-component.component';
import { ExcelFormsComponentComponent } from '../../equipment-subtabs/excel-forms-component/excel-forms-component.component';
import { QdmsComponentComponent } from '../../equipment-subtabs/qdms-component/qdms-component.component';
import { ResourcesComponentComponent } from '../../equipment-subtabs/resources-component/resources-component.component';
import { SparesComponentComponent } from '../../equipment-subtabs/spares-component/spares-component.component'; 
import { TaskComponentComponent } from '../../equipment-subtabs/task-component/task-component.component';
import { TechFormsComponentComponent } from '../../equipment-subtabs/tech-forms-component/tech-forms-component.component';
import { UserManualComponentComponent } from '../../equipment-subtabs/user-manual-component/user-manual-component.component';



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
  selector: 'app-component-jobplan',
  standalone: true,
  imports: [
    GridModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    CommonModule,
    BasicDetailsComponentComponent,
    AttachmentsComponentComponent,
    ExcelFormsComponentComponent,
    QdmsComponentComponent,
    ResourcesComponentComponent,
    SparesComponentComponent,
    TaskComponentComponent,
    TechFormsComponentComponent,
    UserManualComponentComponent
  ],
  templateUrl: './component-jobplan.component.html',
  styleUrl: './component-jobplan.component.scss'
})
export class ComponentJobplanComponent {

  @Input() selectedID: any;
  inputSize: InputSize = 'medium';
  public sizes = [10, 15, 20];

  getPlaceholder(value: any): string {
    return value + ' *';
  }  

  apiData: any = [];
  equipment: any = {} as Equipment; // Initialize the equipment model

  constructor() {
    const data = localStorage.getItem('apiData');
    if (data) {
      this.apiData = JSON.parse(data) as Equipment[];
    }
  }

  public gridData: unknown[] = products;


  public menuSettings: ColumnMenuSettings = {
    autoSizeColumn: true,
    autoSizeAllColumns: true,
  };

  // tabs codes start
  tabs = [
    { label: 'Basic Details', content: 'basicDetails', number: '00' },
    { label: 'Spares', content: 'spares', number: '00' },
    { label: 'Excel Forms', content: 'excelForms', number: '00' },
    { label: 'Attachments', content: 'attachments', number: '00' },
    { label: 'Task', content: 'task', number: '00' },
    { label: 'Tech Forms', content: 'techForms', number: '00' },
    { label: 'Resources', content: 'resources', number: '00' },
    { label: 'User Manual', content: 'userManual', number: '00' },
    { label: 'QDMS', content: 'qdms', number: '00' },
  ];

  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
  // tab code end


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

}
