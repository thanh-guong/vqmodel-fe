import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftClassesComponent } from './aircraft-classes.component';

describe('AircraftClassesComponent', () => {
  let component: AircraftClassesComponent;
  let fixture: ComponentFixture<AircraftClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
