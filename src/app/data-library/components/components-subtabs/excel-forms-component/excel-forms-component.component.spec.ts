import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelFormsComponentComponent } from './excel-forms-component.component';

describe('ExcelFormsComponentComponent', () => {
  let component: ExcelFormsComponentComponent;
  let fixture: ComponentFixture<ExcelFormsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelFormsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcelFormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
