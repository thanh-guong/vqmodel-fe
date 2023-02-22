import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftClassCardComponent } from './aircraft-class-card.component';

describe('AircraftClassCardComponent', () => {
  let component: AircraftClassCardComponent;
  let fixture: ComponentFixture<AircraftClassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftClassCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
