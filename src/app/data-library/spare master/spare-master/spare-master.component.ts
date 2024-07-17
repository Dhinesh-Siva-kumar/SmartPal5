import { Component } from '@angular/core';
import { MainControlTabsComponent } from '../../main-control-tabs/main-control-tabs.component';


import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ColumnMenuSettings } from '@progress/kendo-angular-grid';
import { CommonModule } from '@angular/common';
import { BankDetailsComponent } from './spare master tabs/bank-details/bank-details.component';
import { AttachmentsComponent } from './spare master tabs/attachments/attachments.component';
import { AlternateVendorsComponent } from './spare master tabs/alternate-vendors/alternate-vendors.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormBuilder } from '@angular/forms';


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
  selector: 'app-spare-master',
  standalone: true,
  imports: [
    MainControlTabsComponent,
    GridModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    CommonModule,
    BankDetailsComponent,
    AttachmentsComponent,
    AlternateVendorsComponent,
    DropDownsModule,
    
  ],
  templateUrl: './spare-master.component.html',
  styleUrl: './spare-master.component.scss'
})




export class SpareMasterComponent {

  inputSize: InputSize = 'medium';
  public sizes = [10, 15, 20];

  constructor(private fb: FormBuilder) {
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
    { label: 'Bank details', content: 'bankDetails', number: '00' },
    { label: 'Attachments', content: 'attachments', number: '00' },
    { label: 'Alternate Vendors', content: 'alternateVendors', number: '00' },
  ];

  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
  // tab code end

  public categories: Array<{ CategoryID: number, CategoryName: string }> = [
    { CategoryID: 1, CategoryName: "Beverages" },
    { CategoryID: 2, CategoryName: "Condiments" },
    { CategoryID: 3, CategoryName: "Confections" },
    // add more categories here
  ];


  public editHandler(event: any): void {
    const { sender, columnIndex, rowIndex, dataItem } = event;
    const group = this.fb.group({
      ProductID: [dataItem.ProductID],
      ProductName: [dataItem.ProductName],
      CategoryID: [dataItem.Category.CategoryID],
      UnitPrice: [dataItem.UnitPrice],
      UnitsInStock: [dataItem.UnitsInStock],
      QuantityPerUnit: [dataItem.QuantityPerUnit],
      Discontinued: [dataItem.Discontinued]
    });

    sender.editRow(rowIndex, group);
  }

}
