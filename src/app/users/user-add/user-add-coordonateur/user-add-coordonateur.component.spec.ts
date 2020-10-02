import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddCoordonateurComponent } from './user-add-coordonateur.component';

describe('UserAddCoordonateurComponent', () => {
  let component: UserAddCoordonateurComponent;
  let fixture: ComponentFixture<UserAddCoordonateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddCoordonateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddCoordonateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
