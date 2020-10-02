import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftModelDetailComponent } from './aircraft-model-detail.component';

describe('AircraftModelDetailComponent', () => {
  let component: AircraftModelDetailComponent;
  let fixture: ComponentFixture<AircraftModelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftModelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftModelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
