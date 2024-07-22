import { Component } from '@angular/core';

import { BreadCrumbItem, BreadCrumbModule } from "@progress/kendo-angular-navigation";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CommonModule } from '@angular/common';
import { VesselEquipmentComponent } from './vessel-tabs/vessel-equipment/vessel-equipment.component';
import { MainControlTabsComponent } from '../../main-control-tabs/main-control-tabs.component';


@Component({
  selector: 'app-vessel-data-library',
  standalone: true,
  imports: [
    LayoutModule,
    TreeViewModule,
    DropDownsModule,
    CommonModule,
    VesselEquipmentComponent,
    MainControlTabsComponent
  ],
  templateUrl: './vessel-data-library.component.html',
  styleUrls: ['./vessel-data-library.component.scss', '../../data-library.component.scss']
})
export class VesselDataLibraryComponent {

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
    { label: 'Specification', content: 'specification' },
    { label: 'Attachments', content: 'attachments' },
    { label: 'User Manual', content: 'userManual' },
    { label: 'Survey', content: 'survey' },
    { label: 'Condition Of Class', content: 'conditionOfClass' },
    { label: 'Memoranda', content: 'memoranda' },
    { label: 'HSEQ', content: 'hseq' },
  ];

  selectedTab: number | null = 0;

  selectTab(index: number): void {
    console.log("testing: ",index)
    this.selectedTab = index;
  }

  checkings(index: any): void {
    console.log("testing: ",index)
  }
 
}
