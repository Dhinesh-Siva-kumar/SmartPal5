import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  isSidebarOpen: boolean = false;
  isPinSidebar: boolean = false;
  
  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    this.isPinSidebar = false;
  }

  pinSidebar() {
    this.isPinSidebar = !this.isPinSidebar;
  }

  isActive = false;

  toggleSidebar() {
    this.isActive = !this.isActive;
    this.isPinSidebar = false;
  }

}
