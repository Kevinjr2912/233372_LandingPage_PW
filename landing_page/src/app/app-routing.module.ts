import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DiscographyPageComponent } from './discography-page/discography-page.component';
import { InfluencePageComponent } from './influence-page/influence-page.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"discography", component:DiscographyPageComponent},
  {path:"influence", component:InfluencePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
