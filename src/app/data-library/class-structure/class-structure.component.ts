import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentEquipmentComponent } from '../components/components-tabs/component-equipment/component-equipment.component';
import { ClassEquipmentComponent } from './class-structure-tabs/class-equipment/class-equipment.component';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SelectEvent } from "@progress/kendo-angular-layout";

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
    LayoutModule
  ],
  templateUrl: './class-structure.component.html',
  styleUrl: './class-structure.component.scss'
})
export class ClassStructureComponent {

  activeTab: string = 'Class Structure';

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

}
