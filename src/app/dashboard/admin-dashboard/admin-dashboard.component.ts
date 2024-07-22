import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { process } from "@progress/kendo-data-query";

import {
  GridModule,
} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { CommonModule } from '@angular/common';

export const employees = [
  {
      id: '848e6002-8a92-447d-951b-1ffd5e695578',
      full_name: 'Sig Jeannel',
      job_title: 'Human Resources Assistant III',
      country: 'US',
      is_online: true,
      rating: 3.5,
      target: 100,
      budget: 47601,
      phone: '(936) 9429601',
      address: '138 Buhler Avenue',
      img_id: 1,
      gender: 'M',
  },
  {
      id: '19d18d40-0e64-4837-9420-92130a0ed253',
      full_name: 'Shelden Greyes',
      job_title: 'Operator',
      country: 'GB',
      is_online: false,
      rating: 5,
      target: 40,
      budget: 12253,
      phone: '(343) 6656271',
      address: '2 Waxwing Point',
      img_id: 2,
      gender: 'M',
  },
  {
      id: 'bebdc6eb-9179-484a-917d-2e16a23bfdfe',
      full_name: 'Megen Cody',
      job_title: 'Operator',
      country: 'BR',
      is_online: true,
      rating: 1.5,
      target: 66,
      budget: 96183,
      phone: '(178) 2336256',
      address: '4082 Stephen Court',
      img_id: 6,
      gender: 'F',
  },
  {
      id: '38b08b88-e482-46fc-8976-83590c02ec23',
      full_name: 'Clevey Thursfield',
      job_title: 'VP Quality Control',
      country: 'BR',
      is_online: true,
      rating: 2,
      target: 58,
      budget: 54936,
      phone: '(277) 7415010',
      address: '1563 Glacier Hill Parkway',
      img_id: 5,
      gender: 'M',
  },
  {
      id: '2aac53f8-b72d-4629-9082-6d8239a8fecf',
      full_name: 'Ruthi Baldini',
      job_title: 'Data Coordiator',
      country: 'BR',
      is_online: true,
      rating: 3,
      target: 37,
      budget: 46572,
      phone: '(766) 5691615',
      address: '6 Laurel Avenue',
      img_id: 8,
      gender: 'F',
  },
  {
      id: '1aa789e5-de01-406e-a2ee-cc5ce20f7e34',
      full_name: 'Annecorinne Morter',
      job_title: 'Professor',
      country: 'FR',
      is_online: false,
      rating: 2,
      target: 35,
      budget: 37198,
      phone: '(807) 2524830',
      address: '106 Green Street',
      img_id: 3,
      gender: 'F',
  },
  {
      id: 'd2ff1b02-3808-44aa-9056-3b5df34bf865',
      full_name: 'Gracia Punyer',
      job_title: 'Assistant Manager',
      country: 'ES',
      is_online: true,
      rating: 4,
      target: 64,
      budget: 84752,
      phone: '(515) 9749536',
      address: '69 Brentwood Alley',
      img_id: 2,
      gender: 'F',
  },
  {
      id: '26b2b760-27e8-47a6-81c2-07870d1b2b30',
      full_name: 'Duky Hurring',
      job_title: 'Account Executive',
      country: 'BR',
      is_online: false,
      rating: 3,
      target: 61,
      budget: -1266,
      phone: '(897) 7202034',
      address: '39 Morning Circle',
      img_id: 3,
      gender: 'M',
  },
  {
      id: '91c6b652-4206-4a0c-bac6-dc21283a72d7',
      full_name: 'Briana Shemelt',
      job_title: 'Professor',
      country: 'US',
      is_online: false,
      rating: 3,
      target: 63,
      budget: -9308,
      phone: '(205) 2560799',
      address: '11 Walton Court',
      img_id: 2,
      gender: 'F',
  },
  {
      id: '1e8289dc-2ef3-4045-ad6b-786d00368427',
      full_name: 'Lexis Mostin',
      job_title: 'Analyst Programmer',
      country: 'FR',
      is_online: true,
      rating: 4,
      target: 81,
      budget: 38153,
      phone: '(903) 8388089',
      address: '38547 Westend Way',
      img_id: 4,
      gender: 'F',
  },
];

export class Product {
  ProductID: number | undefined;
  ProductName: string | undefined;
  SupplierID?: number;
  CategoryID?: number;
  QuantityPerUnit?: string;
  UnitPrice: number | undefined;
  UnitsInStock?: number;
  UnitsOnOrder?: number;
  ReorderLevel?: number;
  Discontinued?: boolean;
  Category: {
    CategoryID: number;
    CategoryName: string;
    Description?: string;
  } | undefined;
}

export class Order {
  public OrderID: number | undefined;
  public CustomerID: string | undefined;
  public EmployeeID: number | undefined;
  public OrderDate: Date | undefined;
  public RequiredDate: Date | undefined;
  public ShippedDate: Date | undefined;
  public ShipVia: number | undefined;
  public Freight: number | undefined;
  public ShipName: string | undefined;
  public ShipAddress: string | undefined;
  public ShipCity: string | undefined;
  public ShipRegion: string | undefined;
  public ShipPostalCode: string | undefined;
  public ShipCountry: string | undefined;
}

export class Customer {
  public Id = '';
  public CompanyName = '';
  public ContactName = '';
  public ContactTitle = '';
  public Address?: string = '';
  public City = '';
  public PostalCode? = '';
  public Country? = '';
  public Phone? = '';
  public Fax? = '';
}

export class Category {
  public CategoryID?: number;
  public CategoryName?: string;
  public Description?: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    GridModule,
    InputsModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {

  @ViewChild(DataBindingDirective) dataBinding?: DataBindingDirective;
  public gridData: unknown[] = employees;
  public gridView: unknown[] = [];

  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public onFilter(value: Event): void {
    const inputValue = value;

    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "full_name",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "job_title",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "budget",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "phone",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "address",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;
  }

}
