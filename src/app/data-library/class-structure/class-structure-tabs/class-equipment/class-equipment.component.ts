import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { FormFieldModule } from "@progress/kendo-angular-inputs";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { FloatingLabelModule } from "@progress/kendo-angular-label";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";


@Component({
  selector: 'app-class-equipment',
  standalone: true,
  imports: [
    CommonModule,
    DateInputsModule,
    FormFieldModule,
    InputsModule,
    FloatingLabelModule,
    LabelModule,
    DropDownsModule,
  ],
  templateUrl: './class-equipment.component.html',
  styleUrl: './class-equipment.component.scss'
})


export class ClassEquipmentComponent {
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

  public expandedKeys: any[] = ["0", "1"];

  public checkedKeys: any[] = ["0_1"];

  public data: any[] = [
    {
      text: "Furniture",
      items: [
        { text: "Tables & Chairs" },
        { text: "Sofas" },
        { text: "Occasional Furniture" },
      ],
    },
    {
      text: "Decor",
      items: [
        { text: "Bed Linen" },
        { text: "Curtains & Blinds" },
        { text: "Carpets" },
      ],
    },
  ];


}
