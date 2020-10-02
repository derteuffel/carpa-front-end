import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourrierComponent } from './add-courrier.component';

describe('AddCourrierComponent', () => {
  let component: AddCourrierComponent;
  let fixture: ComponentFixture<AddCourrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
