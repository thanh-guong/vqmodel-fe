import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftModelsComponent } from './aircraft-models.component';

describe('AircraftModelsComponent', () => {
  let component: AircraftModelsComponent;
  let fixture: ComponentFixture<AircraftModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
