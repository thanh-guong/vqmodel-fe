import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorCardComponent } from './distributor-card.component';

describe('DistributorCardComponent', () => {
  let component: DistributorCardComponent;
  let fixture: ComponentFixture<DistributorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
