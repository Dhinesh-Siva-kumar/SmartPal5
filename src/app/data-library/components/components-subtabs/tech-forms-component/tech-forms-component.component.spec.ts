import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechFormsComponentComponent } from './tech-forms-component.component';

describe('TechFormsComponentComponent', () => {
  let component: TechFormsComponentComponent;
  let fixture: ComponentFixture<TechFormsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechFormsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechFormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
