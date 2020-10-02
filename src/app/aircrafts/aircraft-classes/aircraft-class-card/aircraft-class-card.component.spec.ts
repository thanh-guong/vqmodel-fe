import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftClassCardComponent } from './aircraft-class-card.component';

describe('AircraftClassCardComponent', () => {
  let component: AircraftClassCardComponent;
  let fixture: ComponentFixture<AircraftClassCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftClassCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
