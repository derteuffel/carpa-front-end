import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddExpertComponent } from './user-add-expert.component';

describe('UserAddExpertComponent', () => {
  let component: UserAddExpertComponent;
  let fixture: ComponentFixture<UserAddExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
