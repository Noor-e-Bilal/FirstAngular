import { Component } from '@angular/core';

declare function arlo_tm_ripple(): any;

@Component({
  selector: 'app-water-slider',
  templateUrl: './water-slider.component.html',
})
export class WaterSliderComponent {
  ngOnInit() {
    arlo_tm_ripple();
  }
}
