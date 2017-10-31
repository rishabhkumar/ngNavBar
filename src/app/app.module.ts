import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TeamsComponent} from './teams/teams.component';
import {LeaguesComponent} from './leagues/leagues.component';
import {LaligaComponent} from './laliga/laliga.component';
import {EplComponent} from './epl/epl.component';
import {SerieaComponent} from './seriea/seriea.component';
import {BarcelonaComponent} from './barcelona/barcelona.component';
import {MadridComponent} from './madrid/madrid.component';
import {CityComponent} from './city/city.component';
import {UnitedComponent} from './united/united.component';
import {JuventusComponent} from './juventus/juventus.component';
import {MilanComponent} from './milan/milan.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    LeaguesComponent,
    LaligaComponent,
    EplComponent,
    SerieaComponent,
    BarcelonaComponent,
    MadridComponent,
    CityComponent,
    UnitedComponent,
    JuventusComponent,
    MilanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //full : makes sure the path is absolute path
      {path: '', redirectTo: '/leagues', pathMatch: 'full'},
      {
        path: 'leagues', component: LeaguesComponent,
      },
      {
        path: 'laliga', component: LaligaComponent,
        children: [{path: 'barcelona', component: BarcelonaComponent},
          {path: 'madrid', component: MadridComponent}]
      },
      {
        path: 'epl', component: EplComponent,
        children: [{path: 'city', component: CityComponent},
          {path: 'united', component: UnitedComponent}]
      },
      {
        path: 'seriea', component: SerieaComponent,
        children: [{path: 'juventus', component: JuventusComponent},
          {path: 'milan', component: MilanComponent}]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
