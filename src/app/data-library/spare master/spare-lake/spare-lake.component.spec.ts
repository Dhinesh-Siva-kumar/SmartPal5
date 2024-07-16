import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareLakeComponent } from './spare-lake.component';

describe('SpareLakeComponent', () => {
  let component: SpareLakeComponent;
  let fixture: ComponentFixture<SpareLakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpareLakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpareLakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
