import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftVersionsComponent } from './aircraft-versions.component';

describe('AircraftVersionsComponent', () => {
  let component: AircraftVersionsComponent;
  let fixture: ComponentFixture<AircraftVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
