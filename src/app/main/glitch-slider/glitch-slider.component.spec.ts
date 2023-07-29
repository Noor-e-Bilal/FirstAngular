import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchSliderComponent } from './glitch-slider.component';

describe('GlitchSliderComponent', () => {
  let component: GlitchSliderComponent;
  let fixture: ComponentFixture<GlitchSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlitchSliderComponent]
    });
    fixture = TestBed.createComponent(GlitchSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
