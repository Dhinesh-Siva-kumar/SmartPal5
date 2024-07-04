import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainControlTabsComponent } from './main-control-tabs.component';

describe('MainControlTabsComponent', () => {
  let component: MainControlTabsComponent;
  let fixture: ComponentFixture<MainControlTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainControlTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainControlTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
