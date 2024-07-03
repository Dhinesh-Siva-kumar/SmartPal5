import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentEquipmentComponent } from './components-tabs/component-equipment/component-equipment.component';
import { ComponentJobplanComponent } from './components-tabs/component-jobplan/component-jobplan.component';
import { ClassEquipmentComponent } from '../class-structure/class-structure-tabs/class-equipment/class-equipment.component';
import { BreadCrumbItem, BreadCrumbModule } from "@progress/kendo-angular-navigation";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';



const defaultItems: BreadCrumbItem[] = [
  {
    text: "Maintenance",
    title: "Maintenance",
  },
  {
    text: "Data Libary",
    title: "Data Libary",
  },
  {
    text: "Components",
    title: "Components",
  },
];

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    BreadCrumbModule,
    ComponentEquipmentComponent,
    ClassEquipmentComponent,
    LayoutModule,
    TreeViewModule,
    ComponentJobplanComponent,
    DropDownsModule,
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  activeTab: string = 'Components';

  buttons = [
    { label: 'Components', linkTo: '/data-library'},
    { label: 'Class Structure', linkTo: '/data-library/class-structure'},
    { label: 'Vessel', linkTo: '/data-library/vessel'},
  ];

  isActive(tabName: string): string {
    // if(this.activeTab === tabName){
    //   console.log("tabName: ", tabName, "this.activeTab: ", this.activeTab)
    // }
    
    return this.activeTab === tabName ? 'filter-tab-btn-active' : 'filter-tab-btn';
  }

  setActive(tabName: string): void {
    this.activeTab = tabName;
    // console.log(" this.activeTab = tabName;",  this.activeTab)
  }


  public items: BreadCrumbItem[] = [...defaultItems];
  public onItemClick(item: BreadCrumbItem): void {
    const index = this.items.findIndex((e) => e.text === item.text);
    this.items = this.items.slice(0, index + 1);
  }

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }



  

  public expandedKeys: any[] = ['0', '1'];

    public checkedKeys: any[] = ['0_1'];

    public data: any[] = [
      {
        text: "Conponents",
        items: [
          { text: "Data 1" },
          { text: "Data 2" },
          { text: "Data 3" },
        ],
      },
      {
        text: "Compressors",
        items: [
          { text: "Data 1" },
          { text: "Data 2" },
          { text: "Data 3" },
        ],
      },
      {
        text: "tanks",
        items: [
          { text: "Data 1" },
          { text: "Data 2" },
          { text: "Data 3" },
        ],
      },
      {
        text: "Diesel Engines",
        items: [
          { text: "Data 1" },
          { text: "Data 2" },
          { text: "Data 3" },
        ],
      },
      {
        text: "Purifiers",
        items: [
          { text: "Data 1" },
          { text: "Data 2" },
          { text: "Data 3" },
        ],
      },
    ];

  tabs = [
    { label: 'Equipment', content: 'equipment' },
    { label: 'Job Plan', content: 'jobplan' },
    { label: 'Mapped Vessel', content: 'jobplan' },
    { label: 'Spare Parts', content: 'jobplan' },
    { label: 'Service Letter', content: 'jobplan' },
    { label: 'User Manual', content: 'jobplan' }
  ];

  selectedTab: number | null = 0;

  selectTab(index: number): void {
    console.log("testing: ",index)
    this.selectedTab = index;
  }

  checkings(index: any): void {
    console.log("testing: ",index)
  }

  public areaList: Array<string> = [
    "Amsterdam",
    "Athens",
    "Barcelona",
    "Berlin",
    "Brussels",
    "Chicago",
    "Copenhagen",
    "Dublin",
    "Helsinki",
    "Houston",
    "Lisbon",
    "London",
    "Los Angeles",
    "Madrid",
    "Miami",
    "Montreal",
    "New York",
    "Paris",
    "Philadelphia",
    "Prague",
    "Rome",
    "Sao Paulo",
    "Seattle",
    "Stockholm",
    "Toronto",
    "Vancouver",
    "Vienna",
    "Vienna",
    "Warsaw",
  ];
}
