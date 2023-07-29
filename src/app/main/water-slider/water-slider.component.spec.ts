import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSliderComponent } from './water-slider.component';

describe('WaterSliderComponent', () => {
  let component: WaterSliderComponent;
  let fixture: ComponentFixture<WaterSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterSliderComponent]
    });
    fixture = TestBed.createComponent(WaterSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
