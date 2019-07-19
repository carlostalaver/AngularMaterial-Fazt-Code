import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  template: `
  <ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>
  <hr>

  <ng-template #eng let-name><span> <pre>
  Hello {{name | json}}!
  </pre> </span></ng-template>

  <ng-container *ngTemplateOutlet="svk; context: myContext"></ng-container>
  <hr>
  <ng-template #svk let-person="edad"><span>Ahoj {{person}}!</span></ng-template>
`})
export class AppComponentOld1 {

  myContext = {$implicit: {key1: 'World', key2: 'este es otro valor'}, localSk: 'Svet', edad: 21};

}
