import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetclicSectionTemplateComponent } from './betclic-section-template.component';

describe('BetclicSectionTemplateComponent', () => {
  let component: BetclicSectionTemplateComponent;
  let fixture: ComponentFixture<BetclicSectionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetclicSectionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetclicSectionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
