import { Component, OnInit } from '@angular/core';
declare function initParticals(): any;

@Component({
  selector: 'app-particle-slider',
  templateUrl: './particle-slider.component.html',
})
export class ParticleSliderComponent {
  ngOnInit() {
    initParticals();
  }
}
