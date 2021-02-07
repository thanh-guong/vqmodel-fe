import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorCardComponent } from './distributor-card.component';

describe('DistributorCardComponent', () => {
  let component: DistributorCardComponent;
  let fixture: ComponentFixture<DistributorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
