import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLibraryComponent } from './data-library.component';

describe('DataLibraryComponent', () => {
  let component: DataLibraryComponent;
  let fixture: ComponentFixture<DataLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
