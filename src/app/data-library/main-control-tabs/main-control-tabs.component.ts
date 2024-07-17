import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-control-tabs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-control-tabs.component.html',
  styleUrl: './main-control-tabs.component.scss'
})
export class MainControlTabsComponent implements OnInit {

  @Input() pageName: any;
  @Input() activeClass: any;

  activeTab: string = '';

  buttonArray:any;

  equipmentStructure = [
    { label: 'Components', linkTo: '/data-library'},
    { label: 'Class Structure', linkTo: '/data-library/class-structure'},
    { label: 'Vessel', linkTo: '/data-library/vessel'},
  ];

  JobStructure = [
    { label: 'Job Master', linkTo: '/data-library/job-master'},
    { label: 'Job Lake', linkTo: '/data-library/job-structure/job-lake'},
    { label: 'Archive Job', linkTo: '/data-library/job-structure/archive-job'},
  ];

  spareStructure = [
    { label: 'Spare Master', linkTo: '/data-library/spare-structure/spare-master'},
    { label: 'Spare Lake', linkTo: '/data-library/spare-structure/spare-lake'},
    { label: 'Archive Spare', linkTo: '/data-library/spare-structure/archive-spare'},
  ];

  constructor() {}

  ngOnInit(): void {

    if(this.pageName === "equipment-structure"){
      this.buttonArray = this.equipmentStructure;
    }
    else if(this.pageName === "job-structure"){
      this.buttonArray = this.JobStructure;
    }
    else if(this.pageName === "spare-structure"){
      this.buttonArray = this.spareStructure;
    }

    this.activeTab = this.activeClass;
  }

  isActive(tabName: string): string {
    return this.activeTab === tabName ? 'filter-tab-btn-active' : 'filter-tab-btn';
  }
  
}
