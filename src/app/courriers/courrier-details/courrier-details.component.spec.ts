import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierDetailsComponent } from './courrier-details.component';

describe('CourrierDetailsComponent', () => {
  let component: CourrierDetailsComponent;
  let fixture: ComponentFixture<CourrierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourrierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
