import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassComponentComponent } from './class-component.component';

describe('ClassComponentComponent', () => {
  let component: ClassComponentComponent;
  let fixture: ComponentFixture<ClassComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
