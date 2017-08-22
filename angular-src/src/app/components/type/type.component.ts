import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TypeService} from "../../services/type.service";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  name: String;
  type: Object;
  sortBy: String;
  pokemons: Object;

  constructor(private typeService: TypeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params["name"] != undefined) {
        this.name = params["name"];
      }
      else {
        this.route.queryParams.subscribe(queryParams => {
          if (queryParams.type != undefined)
            this.name = queryParams.type;
          if (queryParams.sortby)
            this.sortBy = queryParams.sortby;
        });
      }
      this.typeService.getTypeByName(this.name).subscribe(type => {
          this.type = type;
          this.typeService.getPokemonsWithSort(this.name, this.sortBy).subscribe(pokemons => {
            this.pokemons = pokemons;
            console.log(this.pokemons);
          }, err => {
            console.log(err);
            return false;
          });
        },
        err => {
          console.log(err);
          return false;
        });
    });
  }

}
