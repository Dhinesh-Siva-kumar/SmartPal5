import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDetailsComponentComponent } from './basic-details-component.component';

describe('BasicDetailsComponentComponent', () => {
  let component: BasicDetailsComponentComponent;
  let fixture: ComponentFixture<BasicDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDetailsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
