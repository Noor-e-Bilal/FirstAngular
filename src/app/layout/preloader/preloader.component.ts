import { Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  template: `
    <div class="arlo_tm_preloader">
      <div class="spinner_wrap">
        <div class="spinner"></div>
      </div>
    </div>
  `,
})
export class PreloaderComponent {}
