import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryCardComponent } from './accessory-card.component';

describe('AccessoryCardComponent', () => {
  let component: AccessoryCardComponent;
  let fixture: ComponentFixture<AccessoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
