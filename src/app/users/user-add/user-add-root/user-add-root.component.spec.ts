import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddRootComponent } from './user-add-root.component';

describe('UserAddRootComponent', () => {
  let component: UserAddRootComponent;
  let fixture: ComponentFixture<UserAddRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
