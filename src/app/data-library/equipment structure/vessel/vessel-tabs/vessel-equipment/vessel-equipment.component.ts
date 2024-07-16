import { Component } from '@angular/core';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputModule } from '@progress/kendo-angular-dateinputs';
import { FormFieldModule } from "@progress/kendo-angular-inputs";
import { IconsModule } from "@progress/kendo-angular-icons";
import { LabelModule } from '@progress/kendo-angular-label';

import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { InputsModule } from "@progress/kendo-angular-inputs";

@Component({
  selector: 'app-vessel-equipment',
  standalone: true,
  imports: [
    DropDownsModule,
    DateInputModule,
    DateInputsModule,
    FormFieldModule,
    IconsModule,
    LabelModule,
    InputsModule
  ],
  templateUrl: './vessel-equipment.component.html',
  styleUrl: './vessel-equipment.component.scss'
})
export class VesselEquipmentComponent {


  public value: Date = new Date(2000, 2, 10);
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
