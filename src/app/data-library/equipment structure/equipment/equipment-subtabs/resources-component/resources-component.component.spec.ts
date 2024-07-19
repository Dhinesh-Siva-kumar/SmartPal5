import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesComponentComponent } from './resources-component.component';

describe('ResourcesComponentComponent', () => {
  let component: ResourcesComponentComponent;
  let fixture: ComponentFixture<ResourcesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourcesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
