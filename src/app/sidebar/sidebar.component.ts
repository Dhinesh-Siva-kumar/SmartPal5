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

  public navList = [
    {name: 'Dashboard', linkto: '/dashboard', icon: 'bi bi-display'} ,
    {name: 'Data Library', linkto: '/data-library', icon: 'bi bi-clipboard-data'} ,
    {name: 'Findings', linkto: '/findings', icon: 'bi bi-exclamation-triangle'},
    {name: 'Deficiencies', linkto: '/deficiencies', icon: 'bi bi-x-circle'},
    {name: 'Settings', linkto: '/settings', icon: 'bi bi-gear'},
    {name: 'Other applications', linkto: '/other-applications', icon: 'bi bi-grid'}
  ]

  public toggleState = false;

  
  

  toggleFunc() {
    this.toggleState = !this.toggleState;
  }

}
