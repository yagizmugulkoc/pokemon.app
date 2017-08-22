import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: Object;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getAllPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
      console.log(pokemons);
    }, err => {
      console.log(err);
      return false;
    });
  }

}
