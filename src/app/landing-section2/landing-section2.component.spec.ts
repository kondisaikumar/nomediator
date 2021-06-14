import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSection2Component } from './landing-section2.component';

describe('LandingSection2Component', () => {
  let component: LandingSection2Component;
  let fixture: ComponentFixture<LandingSection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
