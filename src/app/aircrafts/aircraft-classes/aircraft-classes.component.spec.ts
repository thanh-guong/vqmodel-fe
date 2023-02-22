import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftClassesComponent } from './aircraft-classes.component';

describe('AircraftClassesComponent', () => {
  let component: AircraftClassesComponent;
  let fixture: ComponentFixture<AircraftClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
