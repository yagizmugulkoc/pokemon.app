import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {TypeComponent} from './components/type/type.component';
import {MoveComponent} from './components/move/move.component';
import {PokemonComponent} from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypeComponent,
    MoveComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
