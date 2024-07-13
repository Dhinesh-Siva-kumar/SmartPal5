import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ColumnMenuSettings } from '@progress/kendo-angular-grid';
import { BasicDetailsComponentComponent } from '../../components-subtabs/basic-details-component/basic-details-component.component';
import { AttachmentsComponentComponent } from '../../components-subtabs/attachments-component/attachments-component.component';
import { ExcelFormsComponentComponent } from '../../components-subtabs/excel-forms-component/excel-forms-component.component';
import { QdmsComponentComponent } from '../../components-subtabs/qdms-component/qdms-component.component';
import { ResourcesComponentComponent } from '../../components-subtabs/resources-component/resources-component.component';
import { SparesComponentComponent } from '../../components-subtabs/spares-component/spares-component.component'; 
import { TaskComponentComponent } from '../../components-subtabs/task-component/task-component.component';
import { TechFormsComponentComponent } from '../../components-subtabs/tech-forms-component/tech-forms-component.component';
import { UserManualComponentComponent } from '../../components-subtabs/user-manual-component/user-manual-component.component';
import { SharedService } from '../../shared.service';
import { ComponentsComponent } from '../../components.component';

import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { IconsModule } from "@progress/kendo-angular-icons";
import { FloatingLabelModule } from "@progress/kendo-angular-label";


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
  selector: 'app-component-spare-parts',
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
    UserManualComponentComponent,
    ComponentsComponent,
    LabelModule,
    DropDownsModule,
    IconsModule,
    FloatingLabelModule
  ],
   templateUrl: './component-spare-parts.component.html',
  styleUrl: './component-spare-parts.component.scss'
})
export class ComponentSparePartsComponent {

  @ViewChild('childTemplate') template!: TemplateRef<any>;
  @Output() filterBar: EventEmitter<any> = new EventEmitter();

  filtercallfunc() {
    this.filterBar.emit(true);
  }

  ngAfterViewInit() {
    this.parent.childTemplate = this.template;
  }

  inputSize: InputSize = 'medium';
  public sizes = [10, 15, 20];

  getPlaceholder(value: any): string {
    return value + ' *';
  }  

  constructor(public shareComponent: SharedService, private parent: ComponentsComponent) {
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

}
