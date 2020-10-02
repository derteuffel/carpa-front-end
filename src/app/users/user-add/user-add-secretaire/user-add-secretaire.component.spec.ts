import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddSecretaireComponent } from './user-add-secretaire.component';

describe('UserAddSecretaireComponent', () => {
  let component: UserAddSecretaireComponent;
  let fixture: ComponentFixture<UserAddSecretaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddSecretaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
