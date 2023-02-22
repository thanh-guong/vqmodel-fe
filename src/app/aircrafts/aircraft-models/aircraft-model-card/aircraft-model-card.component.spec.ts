import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftModelCardComponent } from './aircraft-model-card.component';

describe('AircraftModelCardComponent', () => {
  let component: AircraftModelCardComponent;
  let fixture: ComponentFixture<AircraftModelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftModelCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftModelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
