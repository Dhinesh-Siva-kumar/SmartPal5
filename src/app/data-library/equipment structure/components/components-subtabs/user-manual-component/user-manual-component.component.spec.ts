import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManualComponentComponent } from './user-manual-component.component';

describe('UserManualComponentComponent', () => {
  let component: UserManualComponentComponent;
  let fixture: ComponentFixture<UserManualComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManualComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserManualComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
