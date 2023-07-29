import { Component, OnInit } from '@angular/core';
declare function initializePlugins(): any;
declare function InitJs(): any;
declare function initParticals(): any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  template = 1;

  ngOnInit() {
    initializePlugins();
    // InitJs();
    // initParticals();
  }
  ngAfterViewChecked() {
    InitJs();
    initParticals();
  }
}
