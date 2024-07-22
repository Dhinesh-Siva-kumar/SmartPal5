import { Component } from '@angular/core';
import { MainControlTabsComponent } from '../../main-control-tabs/main-control-tabs.component';
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { FormsModule } from '@angular/forms';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CommonModule } from '@angular/common';

import { ProceduresComponent } from './job-lake-tabs/procedures/procedures.component';
import { JobPlanComponent } from './job-lake-tabs/job-plan/job-plan.component';
@Component({
  selector: 'app-job-lake',
  standalone: true,
  imports: [CommonModule,
    MainControlTabsComponent,FloatingLabelModule,FormsModule,InputsModule,LabelModule,DropDownsModule,ProceduresComponent,JobPlanComponent
  ],
  templateUrl: './job-lake.component.html',
  styleUrl: './job-lake.component.scss'
})
export class JobLakeComponent {
// areaList for dropdown
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
  { label: 'Procedures', content: 'procedures', number: '00' },
  
];

selectedTab: number = 0;

selectTab(index: number): void {
  this.selectedTab = index;
  
}
public selectedNodeId: any = "";
// tab code end
}
