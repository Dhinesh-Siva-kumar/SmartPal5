import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-control-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-control-tabs.component.html',
  styleUrl: './main-control-tabs.component.scss'
})
export class MainControlTabsComponent implements OnInit {
  activeTab: string = 'Components';

  buttons = [
    { label: 'Components', linkTo: '/data-library'},
    { label: 'Class Structure', linkTo: '/data-library/class-structure'},
    { label: 'Vessel', linkTo: '/data-library/vessel'},
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActive(this.router.url);
  }

  isActive(tabName: string): string {
    return this.activeTab === tabName ? 'filter-tab-btn-active' : 'filter-tab-btn';
  }

  // need to re-work on this logic

  setActive(url: string): void {
    const lastSegment = url.split('/').filter(segment => segment).pop();  // Getting the last segment of the URL
    console.log('Current URL:', url);
    console.log('Last Segment:', lastSegment);
    
    const matchedButton = this.buttons.find(button => {
      const buttonLastSegment = button.linkTo.split('/').filter(segment => segment).pop();  // Getting the last segment of the button's linkTo
      return buttonLastSegment === lastSegment;
    });
    
    console.log('Matched Button:', matchedButton);
    if (matchedButton) {
      this.activeTab = matchedButton.label;
    }


  }

  
}
