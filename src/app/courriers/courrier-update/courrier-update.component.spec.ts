import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierUpdateComponent } from './courrier-update.component';

describe('CourrierUpdateComponent', () => {
  let component: CourrierUpdateComponent;
  let fixture: ComponentFixture<CourrierUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourrierUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
