import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DeckglComponent } from './deckgl/deckgl.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { AppRoutingModule } from './/app-routing.module';
import { DemoLondonComponent } from './demo-london/demo-london.component';
import { LondonAccidentService } from './london-accident.service';


@NgModule({
  declarations: [
    AppComponent,
    DeckglComponent,
    MapBoxComponent,
    DemoLondonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LondonAccidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
