import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsComponentComponent } from './attachments-component.component';

describe('AttachmentsComponentComponent', () => {
  let component: AttachmentsComponentComponent;
  let fixture: ComponentFixture<AttachmentsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachmentsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttachmentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
