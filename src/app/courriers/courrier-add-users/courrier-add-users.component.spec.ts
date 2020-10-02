import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierAddUsersComponent } from './courrier-add-users.component';

describe('CourrierAddUsersComponent', () => {
  let component: CourrierAddUsersComponent;
  let fixture: ComponentFixture<CourrierAddUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourrierAddUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierAddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
