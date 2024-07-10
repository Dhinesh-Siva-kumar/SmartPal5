import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSparePartsComponent } from './component-spare-parts.component';

describe('ComponentSparePartsComponent', () => {
  let component: ComponentSparePartsComponent;
  let fixture: ComponentFixture<ComponentSparePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSparePartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentSparePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
