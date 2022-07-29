import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardHeadComponent } from './card-head/card-head.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { HistogramComponent } from './histogram/histogram.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardHeadComponent,
    CardBodyComponent,
    HistogramComponent,
    ChartBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
