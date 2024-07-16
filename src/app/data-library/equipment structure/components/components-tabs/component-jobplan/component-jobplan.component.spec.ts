import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentJobplanComponent } from './component-jobplan.component';

describe('ComponentJobplanComponent', () => {
  let component: ComponentJobplanComponent;
  let fixture: ComponentFixture<ComponentJobplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentJobplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentJobplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
