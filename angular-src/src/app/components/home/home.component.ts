import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TypeService} from "../../services/type.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  types: Object;

  constructor(private router: Router,
              private typeService: TypeService) {
  }

  ngOnInit() {
    this.typeService.getTypes().subscribe(types => {
        this.types = types;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
