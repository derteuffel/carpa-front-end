import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourrierAddFilesComponent } from './courrier-add-files.component';

describe('CourrierAddFilesComponent', () => {
  let component: CourrierAddFilesComponent;
  let fixture: ComponentFixture<CourrierAddFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourrierAddFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourrierAddFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
