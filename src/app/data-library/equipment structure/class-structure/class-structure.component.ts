import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentEquipmentComponent } from '../equipment/equipment-tabs/component-equipment/component-equipment.component';
import { ClassEquipmentComponent } from './class-structure-tabs/class-equipment/class-equipment.component';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { MainControlTabsComponent } from '../../main-control-tabs/main-control-tabs.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ClassComponentComponent } from './class-structure-tabs/class-component/class-component.component';

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
    text: "Class Structure",
    title: "Class Structure",
  },
];

@Component({
  selector: 'app-class-structure',
  standalone: true,
  imports: [
    CommonModule,
    ComponentEquipmentComponent,
    ClassEquipmentComponent,
    NavigationModule,
    LayoutModule,
    MainControlTabsComponent,
    DropDownsModule,
    TreeViewModule,
    ClassComponentComponent
  ],
  templateUrl: './class-structure.component.html',
  styleUrl: './class-structure.component.scss'
})
export class ClassStructureComponent {

  

  public items: BreadCrumbItem[] = [...defaultItems];
  public onItemClick(item: BreadCrumbItem): void {
    const index = this.items.findIndex((e) => e.text === item.text);
    this.items = this.items.slice(0, index + 1);
  }

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  public selectedNodeId: any = "";

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
    { label: 'Component', content: 'component' },
    { label: 'Mapped Vessel', content: 'jobplan' },
  ];

  selectedTab: number | null = 0;

  selectTab(index: number): void {
    console.log("testing: ",index)
    this.selectedTab = index;
  }

  checkings(index: any): void {
    console.log("testing: ",index)
  }

  onNodeClick(event: any): void {
    console.log('Clicked Node ID:', event.item.dataItem.text);
    this.selectedNodeId = event.item.dataItem.text;
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
