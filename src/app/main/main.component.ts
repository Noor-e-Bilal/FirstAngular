import { Component, ChangeDetectorRef } from '@angular/core';
declare function initializePlugins(): any;
declare function InitJs(): any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  template = 2;
  intervalId: any;
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    initializePlugins();
    InitJs();
    this.template = Math.floor(Math.random() * 3);
    // this.intervalId = setInterval(() => {
    //   this.updateNumber();
    //   console.log(this.template);
    //   this.cdRef.detectChanges();
    // }, 4000);
  }

  // ngOnDestroy() {
  //   // Clear the interval when the component is destroyed
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }
}
