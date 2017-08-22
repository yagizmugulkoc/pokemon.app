import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  constructor(private http: Http) {
  }

  getPokemonByName(pokemonName) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/' + pokemonName, {headers: headers})
      .map(res => res.json());
  }

  getAllPokemons() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/list', {headers: headers})
      .map(res => res.json());
  }

  addPokemon(pokemon) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/addPokemon', pokemon, {headers: headers})
      .map(res => res.json());
  }

}
