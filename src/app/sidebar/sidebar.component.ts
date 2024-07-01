import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public navList = [
    {name: 'Dashboard', linkto: '', icon: 'bi bi-display'} ,
    {name: 'Reports', linkto: '/reports', icon: 'bi bi-clipboard-data'} ,
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
