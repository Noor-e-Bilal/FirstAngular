import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleSliderComponent } from './particle-slider.component';

describe('ParticleSliderComponent', () => {
  let component: ParticleSliderComponent;
  let fixture: ComponentFixture<ParticleSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticleSliderComponent]
    });
    fixture = TestBed.createComponent(ParticleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
