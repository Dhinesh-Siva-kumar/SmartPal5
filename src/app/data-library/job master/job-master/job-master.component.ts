import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { BreadCrumbItem } from '@progress/kendo-angular-navigation';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MainControlTabsComponent } from '../../main-control-tabs/main-control-tabs.component';
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { FormsModule } from '@angular/forms';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from '@progress/kendo-angular-label';
import { JobPlanComponent } from './job-master-tabs/job-plan/job-plan.component';
@Component({
  selector: 'app-job-master',
  standalone: true,
  imports: [CommonModule,
    LayoutModule,
    DropDownsModule,
    TreeViewModule,MainControlTabsComponent,FloatingLabelModule,FormsModule,InputsModule,LabelModule,JobPlanComponent
    ],
  templateUrl: './job-master.component.html',
  styleUrl: './job-master.component.scss'
})
export class JobMasterComponent {
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
    
    { label: 'Job Plan', content: 'jobPlan', number: '00' },
    { label: 'Task', content: 'task', number: '00' },
    { label: 'Attachments', content: 'attachments', number: '00' },
    { label: 'Excel Forms', content: 'jobPlan', number: '00' },
    { label: 'User Manual', content: 'jobPlan', number: '00' },
    { label: 'QDMS', content: 'jobPlan', number: '00' },
    { label: 'Service Letter', content: 'jobPlan', number: '00' },
    { label: 'CBO Triggers', content: 'jobPlan', number: '00' },
    { label: 'Tech Forms', content: 'jobPlan', number: '00' },
    { label: 'Resources', content: 'jobPlan', number: '00' }
  ];

  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
    
  }
  public selectedNodeId: any = "";
  // tab code end

}
