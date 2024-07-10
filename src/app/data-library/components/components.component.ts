import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentEquipmentComponent } from './components-tabs/component-equipment/component-equipment.component';
import { ComponentJobplanComponent } from './components-tabs/component-jobplan/component-jobplan.component';
import { ClassEquipmentComponent } from '../class-structure/class-structure-tabs/class-equipment/class-equipment.component';
import { BreadCrumbItem, BreadCrumbModule } from "@progress/kendo-angular-navigation";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MainControlTabsComponent } from '../main-control-tabs/main-control-tabs.component';
import { ComponentSparePartsComponent } from './components-tabs/component-spare-parts/component-spare-parts.component';

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
    MainControlTabsComponent,
    ComponentSparePartsComponent
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})

export class ComponentsComponent implements OnInit{

  @ViewChild(ComponentEquipmentComponent) equipmentTab!: ComponentEquipmentComponent;
  

  treeViewitems: { text: string, id: string }[] = [];

  public expandedKeys: any[] = [];

  public checkedKeys: any[] = [];

  public data: any[] = [];

  public searchTreeViewList: Array<string> = [];
  

  ngOnInit() {
    this.loadData();
  }

  // Load data from localStorage or set default
  loadData() {
    const data = localStorage.getItem('overallData');
    if (data) {
      const overallData = JSON.parse(data);
      this.treeViewitems = overallData.map((equipment: any) => ({
        text: equipment.equipmentName,
        id: equipment.id
      }));
    } else {
      const hardCodeItems = [
        { text: "Equipment 1", id: '1' },
        { text: "Equipment 2", id: '2' },
        { text: "Equipment 3", id: '3' },
        { text: "Equipment 4", id: '4' },
        { text: "Equipment 5", id: '5' },
        { text: "Equipment 6", id: '6' },
      ];
      this.treeViewitems = hardCodeItems;
    }
    this.updateTreeViewData();
    this.searchTreeViewList = this.data
  }

  // Update the data structure for the tree view
  updateTreeViewData() {
    this.data = [
      {
        text: "Components",
        items: this.treeViewitems
      },
      {
        text: "Compressors",
        items: [
          { text: "data 1" },
          { text: "data 2" },
          { text: "data 3" },
        ],
      },
      {
        text: "Tanks",
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
  }

  public items: BreadCrumbItem[] = [...defaultItems];
  public onItemClick(item: BreadCrumbItem): void {
    const index = this.items.findIndex((e) => e.text === item.text);
    this.items = this.items.slice(0, index + 1);
  }


  // tabs codes start
  tabs = [
    { label: 'Equipment', content: 'equipment', number: '00' },
    { label: 'Job Plan', content: 'jobplan', number: '00' },
    { label: 'Mapped Vessel', content: 'jobplan', number: '00' },
    { label: 'Spare Parts', content: 'spareParts', number: '00' },
    { label: 'Service Letter', content: 'jobplan', number: '00' },
    { label: 'User Manual', content: 'jobplan', number: '00' }
  ];

  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
  // tab code end


  public selectedNodeId: any = "";

  onNodeClick(event: any): void {
    console.log('Clicked Node ID:', event.item.dataItem.id);
    this.selectedNodeId = event.item.dataItem.id;
  }

  callUpdateFunc(): void {
    if (this.equipmentTab && this.tabs[this.selectedTab].content === 'equipment') {
      this.equipmentTab.childUpdateFunc();
      this.loadData();
    }
  }
}
