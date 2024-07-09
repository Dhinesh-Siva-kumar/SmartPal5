import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparesComponentComponent } from './spares-component.component';

describe('SparesComponentComponent', () => {
  let component: SparesComponentComponent;
  let fixture: ComponentFixture<SparesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
