import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftVersionCardComponent } from './aircraft-version-card.component';

describe('AircraftVersionCardComponent', () => {
  let component: AircraftVersionCardComponent;
  let fixture: ComponentFixture<AircraftVersionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftVersionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftVersionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
