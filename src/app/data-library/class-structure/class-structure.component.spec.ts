import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStructureComponent } from './class-structure.component';

describe('ClassStructureComponent', () => {
  let component: ClassStructureComponent;
  let fixture: ComponentFixture<ClassStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
