import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhGuongComponent } from './thanh-guong.component';

describe('ThanhGuongComponent', () => {
  let component: ThanhGuongComponent;
  let fixture: ComponentFixture<ThanhGuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanhGuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhGuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
