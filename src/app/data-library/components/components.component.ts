import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './components-tabs/equipment/equipment.component';
import { ClassEquipmentComponent } from '../class-structure/class-structure-tabs/class-equipment/class-equipment.component';


@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    EquipmentComponent,
    ClassEquipmentComponent
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
})
export class ComponentsComponent {

  activeTab: string = 'Components';

  buttons = [
    { label: 'Components'},
    { label: 'Class Structure'},
    { label: 'Vessel'},
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


}
