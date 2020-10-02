import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierUsersComponent } from './courrier-users.component';

describe('CourrierUsersComponent', () => {
  let component: CourrierUsersComponent;
  let fixture: ComponentFixture<CourrierUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourrierUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
