import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {TypeComponent} from './components/type/type.component';
import {MoveComponent} from './components/move/move.component';
import {PokemonComponent} from './components/pokemon/pokemon.component';
import {AddPokemonComponent} from './components/add-pokemon/add-pokemon.component';
import {UpdatePokemonComponent} from './components/update-pokemon/update-pokemon.component';
import {AddTypeComponent} from './components/add-type/add-type.component';
import {UpdateTypeComponent} from './components/update-type/update-type.component';
import {AddMoveComponent} from './components/add-move/add-move.component';
import {UpdateMoveComponent} from './components/update-move/update-move.component';

import {TypeService} from "./services/type.service";
import {PokemonService} from "./services/pokemon.service";

import {FlashMessagesModule} from "angular2-flash-messages";
import {MultiselectDropdownModule} from "angular-2-dropdown-multiselect";
import {ColorPickerModule} from "ngx-color-picker";
import {NavbarComponent} from './components/navbar/navbar.component';
import {PokedexComponent} from './components/pokedex/pokedex.component';
import {MoveService} from "./services/move.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'type/:name', component: TypeComponent},
  {path: 'list/types', component: HomeComponent},
  {path: 'list', component: TypeComponent},
  {path: 'get', component: PokemonComponent},
  {path: 'get/:name', component: PokemonComponent},
  {path: 'move', component: MoveComponent},
  {path: 'add_pokemon', component: AddPokemonComponent},
  {path: 'update_pokemon/:id', component: UpdatePokemonComponent},
  {path: 'add_type', component: AddTypeComponent},
  {path: 'update_type/:id', component: UpdateTypeComponent},
  {path: 'add_move', component: AddMoveComponent},
  {path: 'update_move/:id', component: UpdateMoveComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: ':name', component: PokemonComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypeComponent,
    MoveComponent,
    PokemonComponent,
    AddPokemonComponent,
    UpdatePokemonComponent,
    AddTypeComponent,
    UpdateTypeComponent,
    AddMoveComponent,
    UpdateMoveComponent,
    NavbarComponent,
    PokedexComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule,
    MultiselectDropdownModule,
    ColorPickerModule
  ],
  providers: [TypeService, PokemonService, MoveService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
