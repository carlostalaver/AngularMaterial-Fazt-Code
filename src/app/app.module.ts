import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DataComponent, MatPaginatorIntlCro } from './components/data/data.component';
import { AppComponentOld1 } from './app.componentOld-1';
import { PhotosComponent } from './components/photos/photos.component';
import { MatPaginatorIntl } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    DataComponent,
    AppComponentOld1
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}],
  bootstrap: [AppComponent /* AppComponentOld1 */]
})
export class AppModule { }
