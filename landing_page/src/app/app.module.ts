import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DiscographyPageComponent } from './discography-page/discography-page.component';
import { InfluencePageComponent } from './influence-page/influence-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutTheStrokesComponent } from './about-the-strokes/about-the-strokes.component';
import { CardsMembersComponent } from './cards-members/cards-members.component';
import { CardsReasonsComponent } from './cards-reasons/cards-reasons.component';
import { CardsAlbumesComponent } from './cards-albumes/cards-albumes.component';
import { CardsArtistsComponent } from './cards-artists/cards-artists.component';
import { RecognitionInSocietyComponent } from './recognition-in-society/recognition-in-society.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DiscographyPageComponent,
    InfluencePageComponent,
    NavBarComponent,
    AboutTheStrokesComponent,
    CardsMembersComponent,
    CardsReasonsComponent,
    CardsAlbumesComponent,
    CardsArtistsComponent,
    RecognitionInSocietyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
