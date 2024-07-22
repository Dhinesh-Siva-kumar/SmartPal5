import { Component } from '@angular/core';
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { FormsModule } from '@angular/forms';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
@Component({
  selector: 'app-job-plan',
  standalone: true,
  imports: [FloatingLabelModule, FormsModule, InputsModule, LabelModule, DropDownsModule],
  templateUrl: './job-plan.component.html',
  styleUrl: './job-plan.component.scss'
})
export class JobPlanComponent {
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
}
