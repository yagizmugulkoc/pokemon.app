import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  name: String;
  pokemon: Object;

  constructor(private pokemonService: PokemonService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params["name"] != undefined) {
        this.name = params["name"];
        this.pokemonService.getPokemonByName(this.name).subscribe(pokemon => {
          this.pokemon = pokemon
          console.log(pokemon);
        }, err => {
          console.log(err);
          return false;
        });
      }
      else {
        this.route.queryParams.subscribe(queryParams => {
          if (queryParams.name != undefined)
            this.name = queryParams.name;
          this.pokemonService.getPokemonByName(this.name).subscribe(pokemon => {
            this.pokemon = pokemon
          }, err => {
            console.log(err);
            return false;
          });
        });
      }
    });
  }

}
