import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoMadeThisWebsiteComponent } from './who-made-this-website.component';

describe('WhoMadeThisWebsiteComponent', () => {
  let component: WhoMadeThisWebsiteComponent;
  let fixture: ComponentFixture<WhoMadeThisWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoMadeThisWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoMadeThisWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
