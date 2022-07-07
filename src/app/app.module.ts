import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { MapService } from './map.service';





@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
