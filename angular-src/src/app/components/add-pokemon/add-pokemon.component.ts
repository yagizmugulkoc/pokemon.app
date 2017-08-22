import {Component, OnInit} from '@angular/core';
import {IMultiSelectOption} from "angular-2-dropdown-multiselect"
import {FlashMessagesService} from "angular2-flash-messages"
import {PokemonService} from "../../services/pokemon.service";
import {TypeService} from "../../services/type.service";
import {MoveService} from "../../services/move.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  types: String[];
  name: String;
  imageUrl: String;
  baseAttack: number;
  baseDefence: number;
  baseStamina: number;
  weight: number;
  height: number;
  moves: String[];
  nextEvolutions: String[];
  typeOptions: IMultiSelectOption[];
  moveOptions: IMultiSelectOption[];
  nextEvolutionOptions: IMultiSelectOption[];

  constructor(private flashMessages: FlashMessagesService,
              private pokemonService: PokemonService,
              private typeService: TypeService,
              private moveService: MoveService,
              private router: Router) {
  }

  ngOnInit() {
    this.typeService.getTypes().subscribe(types => {
      let typesForOptions = [];
      types.forEach(type => {
        typesForOptions.push({id: type._id, name: type.name});
      });
      this.typeOptions = typesForOptions;
    }, err => {
      console.log(err);
      return false;
    });

    this.moveService.getAllMoves().subscribe(moves => {
      let moveForOptions = [];
      moves.forEach(move => {
        moveForOptions.push({id: move._id, name: move.name});
      });
      this.moveOptions = moveForOptions;
    }, err => {
      console.log(err);
      return false;
    });

    this.pokemonService.getAllPokemons().subscribe(pokemons => {
      let pokemonForOptions = [];
      pokemons.forEach(pokemon => {
        pokemonForOptions.push({id: pokemon._id, name: pokemon.name});
      });
      this.nextEvolutionOptions = pokemonForOptions;
    }, err => {
      console.log(err);
      return false;
    });
  }

  onAddPokemonSubmit() {
    if (this.types == undefined)
      this.types = [];
    if (this.moves == undefined)
      this.moves = [];
    if (this.nextEvolutions == undefined)
      this.nextEvolutions = [];
    const pokemon = {
      name: this.name,
      imageUrl: this.imageUrl,
      baseAttack: this.baseAttack,
      baseDefence: this.baseDefence,
      baseStamina: this.baseStamina,
      height: this.height,
      weight: this.weight,
      type: this.types,
      moves: this.moves,
      nextEvolutions: this.nextEvolutions
    };

    this.pokemonService.addPokemon(pokemon).subscribe(data => {
      if (data.success) {
        this.flashMessages.show('Pokemon has been added', {cssClass: 'alert-success', timeout: 2000});
        this.router.navigate(['/pokedex']);
      }
      else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 2000});
      }
    });
  }

}
