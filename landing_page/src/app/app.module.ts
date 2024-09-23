import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DiscographyPageComponent } from './discography-page/discography-page.component';
import { InfluencePageComponent } from './influence-page/influence-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DiscographyPageComponent,
    InfluencePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
