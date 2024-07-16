import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentEquipmentComponent } from '../../../components/components-tabs/component-equipment/component-equipment.component';
import { ComponentJobplanComponent } from '../../../components/components-tabs/component-jobplan/component-jobplan.component';

@Component({
  selector: 'app-class-component',
  standalone: true,
  imports: [
    CommonModule,
    ComponentEquipmentComponent,
    ComponentJobplanComponent
  ],
  templateUrl: './class-component.component.html',
  styleUrl: './class-component.component.scss'
})
export class ClassComponentComponent {

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

}
