import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhGuongComponent } from './thanh-guong.component';

describe('ThanhGuongComponent', () => {
  let component: ThanhGuongComponent;
  let fixture: ComponentFixture<ThanhGuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanhGuongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanhGuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
