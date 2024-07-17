import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateVendorsComponent } from './alternate-vendors.component';

describe('AlternateVendorsComponent', () => {
  let component: AlternateVendorsComponent;
  let fixture: ComponentFixture<AlternateVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternateVendorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlternateVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
