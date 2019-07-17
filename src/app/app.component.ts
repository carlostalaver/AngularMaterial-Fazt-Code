import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('btnTest', { static: true }) btnTest: MatButton;

  title = 'angularMaterial';

  albums: Array<number> = [1, 2, 3];
  constructor() {

  }

}
