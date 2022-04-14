import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetclicNavbarComponent } from './betclic-navbar.component';

describe('BetclicNavbarComponent', () => {
  let component: BetclicNavbarComponent;
  let fixture: ComponentFixture<BetclicNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetclicNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetclicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
