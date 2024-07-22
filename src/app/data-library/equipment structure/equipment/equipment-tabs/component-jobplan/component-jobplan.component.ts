import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ColumnMenuSettings } from '@progress/kendo-angular-grid';
import { BasicDetailsComponentComponent } from '../../equipment-subtabs/basic-details-component/basic-details-component.component';
import { AttachmentsComponentComponent } from '../../equipment-subtabs/attachments-component/attachments-component.component';
import { ExcelFormsComponentComponent } from '../../equipment-subtabs/excel-forms-component/excel-forms-component.component';
import { QdmsComponentComponent } from '../../equipment-subtabs/qdms-component/qdms-component.component';
import { ResourcesComponentComponent } from '../../equipment-subtabs/resources-component/resources-component.component';
import { SparesComponentComponent } from '../../equipment-subtabs/spares-component/spares-component.component'; 
import { TaskComponentComponent } from '../../equipment-subtabs/task-component/task-component.component';
import { TechFormsComponentComponent } from '../../equipment-subtabs/tech-forms-component/tech-forms-component.component';
import { UserManualComponentComponent } from '../../equipment-subtabs/user-manual-component/user-manual-component.component';
import { products } from '../../dataFormat';
import { Equipment } from '../../dataFormat';


type InputSize = 'small' | 'medium' | 'large';


@Component({
  selector: 'app-component-jobplan',
  standalone: true,
  imports: [
    GridModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    CommonModule,
    BasicDetailsComponentComponent,
    AttachmentsComponentComponent,
    ExcelFormsComponentComponent,
    QdmsComponentComponent,
    ResourcesComponentComponent,
    SparesComponentComponent,
    TaskComponentComponent,
    TechFormsComponentComponent,
    UserManualComponentComponent
  ],
  templateUrl: './component-jobplan.component.html',
  styleUrls: ['./component-jobplan.component.scss', '../../../../data-library.component.scss']
})
export class ComponentJobplanComponent {

  @Input() selectedID: any;
  inputSize: InputSize = 'medium';
  public sizes = [10, 15, 20];

  getPlaceholder(value: any): string {
    return value + ' *';
  }  

  apiData: any = [];
  equipment: any = {} as Equipment; // Initialize the equipment model

  constructor() {
    const data = localStorage.getItem('apiData');
    if (data) {
      this.apiData = JSON.parse(data) as Equipment[];
    }
  }

  public gridData: unknown[] = products;


  public menuSettings: ColumnMenuSettings = {
    autoSizeColumn: true,
    autoSizeAllColumns: true,
  };

  // tabs codes start
  tabs = [
    { label: 'Basic Details', content: 'basicDetails', number: '00' },
    { label: 'Spares', content: 'spares', number: '00' },
    { label: 'Excel Forms', content: 'excelForms', number: '00' },
    { label: 'Attachments', content: 'attachments', number: '00' },
    { label: 'Task', content: 'task', number: '00' },
    { label: 'Tech Forms', content: 'techForms', number: '00' },
    { label: 'Resources', content: 'resources', number: '00' },
    { label: 'User Manual', content: 'userManual', number: '00' },
    { label: 'QDMS', content: 'qdms', number: '00' },
  ];

  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
  // tab code end


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedID'] && changes['selectedID'].currentValue) {
      const matchedObject = this.apiData.find((equipment: Equipment) => equipment.id === this.selectedID);
      if (matchedObject) {
        console.log('Matched Equipment:', matchedObject);
        this.equipment = matchedObject;
      } else {
        console.log('No matching equipment for ID:', this.selectedID);
        this.equipment = {};
      }
    }
  }

}
