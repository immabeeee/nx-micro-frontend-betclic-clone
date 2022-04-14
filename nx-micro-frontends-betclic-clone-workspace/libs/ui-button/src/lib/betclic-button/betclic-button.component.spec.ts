import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetclicButtonComponent } from './betclic-button.component';

describe('BetclicButtonComponent', () => {
  let component: BetclicButtonComponent;
  let fixture: ComponentFixture<BetclicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetclicButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetclicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
