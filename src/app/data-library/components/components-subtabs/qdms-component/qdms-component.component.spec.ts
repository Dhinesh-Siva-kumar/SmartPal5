import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QdmsComponentComponent } from './qdms-component.component';

describe('QdmsComponentComponent', () => {
  let component: QdmsComponentComponent;
  let fixture: ComponentFixture<QdmsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QdmsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QdmsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
