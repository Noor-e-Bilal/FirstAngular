import { Component } from '@angular/core';

declare function arlo_tm_glitch(): any;
@Component({
  selector: 'app-glitch-slider',
  templateUrl: './glitch-slider.component.html',
})
export class GlitchSliderComponent {
  ngOnInit() {
    arlo_tm_glitch();
  }
}
