import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentEquipmentComponent } from './equipment-tabs/component-equipment/component-equipment.component';
import { ComponentJobplanComponent } from './equipment-tabs/component-jobplan/component-jobplan.component';
import { ClassEquipmentComponent } from '../class-structure/class-structure-tabs/class-equipment/class-equipment.component';
import { BreadCrumbItem, BreadCrumbModule } from "@progress/kendo-angular-navigation";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MainControlTabsComponent } from '../../main-control-tabs/main-control-tabs.component';
import { ComponentSparePartsComponent } from './equipment-tabs/component-spare-parts/component-spare-parts.component';
import { SharedService } from './shared.service';
import { ComponentMappedVesselComponent } from './equipment-tabs/component-mapped-vessel/component-mapped-vessel.component';
import { BasicDetailsComponentComponent } from './equipment-subtabs/basic-details-component/basic-details-component.component';

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
  selector: 'app-equipment',
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
    ComponentMappedVesselComponent,
    ComponentSparePartsComponent,
  ],
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss', '../../data-library.component.scss']
})

export class EquipmentComponent implements OnInit {

  @ViewChild(ComponentEquipmentComponent) equipmentTab!: ComponentEquipmentComponent;
  @ViewChild(BasicDetailsComponentComponent) basicequipmentTab!: BasicDetailsComponentComponent;
  @Input() childTemplate!: TemplateRef<any>;


  treeViewitems: { 
    text: string, 
    id: string, 
    equipmentCode: string, 
    equipmentName: string, 
    parentEquipment: string,
    equipment: string,
    jobplan: string,
    mappedVessel: string,
    serviceLetter: string,
    spareParts: string,
    userManual: string,
   }[] = [];

  public expandedKeys: any[] = [];

  public checkedKeys: any[] = [];

  public data: any[] = [];

  public searchTreeViewList: Array<string> = [];

  constructor(public shareComponent: SharedService){

  }
  

  ngOnInit() {
    this.loadData();
  }

  // Load data from localStorage or set default
  loadData() {
    const data = localStorage.getItem('apiData');
    if (data) {
      const overallData = JSON.parse(data);
      this.treeViewitems = overallData.map((equipment: any) => ({
        text:  `${equipment.equipmentCode} - ${equipment.equipmentName}`,
        id: equipment.id,
        equipmentCode: equipment.equipmentCode,
        equipmentName: equipment.equipmentName,
        parentEquipment: equipment.parentEquipment,
        equipment: equipment.equipment,
        jobplan: equipment.jobplan,
        mappedVessel: equipment.mappedVessel,
        serviceLetter: equipment.serviceLetter,
        spareParts: equipment.spareParts,
        userManual: equipment.userManual,
      }));
    } else {
      const hardCodeItems = [
        { text: "Equipment 1", id: '1', equipmentCode: '', equipmentName: '', parentEquipment: '', equipment: '', jobplan: '', mappedVessel: '', serviceLetter: '', spareParts: '', userManual: '' },
        { text: "Equipment 2", id: '2', equipmentCode: '', equipmentName: '', parentEquipment: '', equipment: '', jobplan: '', mappedVessel: '', serviceLetter: '', spareParts: '', userManual: '' },
        { text: "Equipment 3", id: '3', equipmentCode: '', equipmentName: '', parentEquipment: '', equipment: '', jobplan: '', mappedVessel: '', serviceLetter: '', spareParts: '', userManual: '' },
        { text: "Equipment 4", id: '4', equipmentCode: '', equipmentName: '', parentEquipment: '', equipment: '', jobplan: '', mappedVessel: '', serviceLetter: '', spareParts: '', userManual: '' },
        { text: "Equipment 5", id: '5', equipmentCode: '', equipmentName: '', parentEquipment: '', equipment: '', jobplan: '', mappedVessel: '', serviceLetter: '', spareParts: '', userManual: '' },
        { text: "Equipment 6", id: '6', equipmentCode: '', equipmentName: '', parentEquipment: '', equipment: '', jobplan: '', mappedVessel: '', serviceLetter: '', spareParts: '', userManual: '' },
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
    { label: 'Mapped Vessel', content: 'mappedVessel', number: '00' },
    { label: 'Spare Parts', content: 'spareParts', number: '00' },
    { label: 'Service Letter', content: 'jobplan', number: '00' },
    { label: 'User Manual', content: 'jobplan', number: '00' }
  ];

  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
    this.toggleSidebar();
  }
  // tab code end


  public selectedNodeId: any = "";

  onNodeClick(event: any): void {
    console.log('Clicked Node ID:', event.item.dataItem);
    this.selectedNodeId = event.item.dataItem.id;
    this.shareComponent.selectedTreeId = event.item.dataItem.id;
    this.tabs = [
      { label: 'Equipment', content: 'equipment', number: event.item.dataItem.equipment },
      { label: 'Job Plan', content: 'jobplan', number: event.item.dataItem.jobplan },
      { label: 'Mapped Vessel', content: 'mappedVessel', number: event.item.dataItem.mappedVessel },
      { label: 'Spare Parts', content: 'spareParts', number: event.item.dataItem.spareParts },
      { label: 'Service Letter', content: 'jobplan', number: event.item.dataItem.serviceLetter },
      { label: 'User Manual', content: 'jobplan', number: event.item.dataItem.userManual }
    ];
  }

  callUpdateFunc(): void {
    
    if (this.equipmentTab) {
      if (this.equipmentTab.validateForm()) {
        console.log("btn click")
        this.equipmentTab.childUpdateFunc();
        this.loadData();
      } else {
        this.equipmentTab.equipmentForm.ngSubmit.emit(); 
      }
    }

    // dummy updated need to re-work in service
    if(this.basicequipmentTab){
      console.log("btn click basic" )
      this.equipmentTab.childUpdateFunc();
      this.loadData();
    } 
  }

  isPinSidebar: boolean = false;
  filterBoolan: boolean = false;

  pinSidebar() {
    this.isPinSidebar = !this.isPinSidebar;
  }

  toggleSidebar() {
    this.filterBoolan = false;
    this.isPinSidebar = false;
  }

  public callChildToParentSidebar(): void{
    console.log("Im Working")
  }

  handleChildEvent(data: any) {
    this.filterBoolan = data;
    console.log('Data received from child:', data);
    // Your logic here
  }
}
