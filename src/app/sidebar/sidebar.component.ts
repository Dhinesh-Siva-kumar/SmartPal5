import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public expanded:boolean = false

  public navList = [
    { name: 'Dashboard', linkto: '/dashboard', icon: 'bi bi-display' },
    {
      name: 'Data Library',
      dropdownList: [
        { name: 'Equipment Structure', linkto: '/data-library' },
        { name: 'Job Structure', linkto: '/data-library/job-structure/job-master' },
        { name: 'Spare Structure', linkto: '/data-library/spare-structure/spare-master' },
      ],
      linkto: '/data-library',
      icon: 'bi bi-clipboard-data',
      isOpen: false // Add this property to manage dropdown state
    },
    { name: 'Findings', linkto: '/findings', icon: 'bi bi-exclamation-triangle' },
    { name: 'Deficiencies', linkto: '/deficiencies', icon: 'bi bi-x-circle' },
    { name: 'Settings', linkto: '/settings', icon: 'bi bi-gear' },
    { name: 'Other applications', linkto: '/other-applications', icon: 'bi bi-grid' }
  ];

  toggleExpand(): void {
   this.expanded = !this.expanded
  }

  public toggleState = false;

  
  

  toggleFunc() {
    this.toggleState = !this.toggleState;
  }

}
