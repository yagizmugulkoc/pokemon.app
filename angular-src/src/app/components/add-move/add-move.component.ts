import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {TypeService} from "../../services/type.service";
import {MoveService} from "../../services/move.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-move',
  templateUrl: './add-move.component.html',
  styleUrls: ['./add-move.component.css']
})
export class AddMoveComponent implements OnInit {
  name: String;
  type: String;
  imageUrl: String;
  damage: number;
  energy: number;
  dps: number;
  duration: number;
  types: Object;

  constructor(private flashMessages: FlashMessagesService,
              private typeService: TypeService,
              private moveService: MoveService,
              private router: Router) {
  }

  ngOnInit() {
    this.type = "";
    this.typeService.getTypes().subscribe(types => {
      let typesForOptions = [];
      types.forEach(type => {
        typesForOptions.push({id: type._id, name: type.name});
      });
      this.types = typesForOptions;
    }, err => {
      console.log(err);
      return false;
    });
  }

  onTypeChange(value) {
  }

  onAddMoveSubmit() {
    if (this.type == undefined)
      this.type = '';
    const move = {
      name: this.name,
      type: this.type,
      imageUrl: this.imageUrl,
      damage: this.damage,
      energy: this.energy,
      dps: this.dps,
      duration: this.duration
    };
    this.moveService.addMove(move).subscribe(data => {
      if (data.success) {
        this.flashMessages.show('Move has been added', {cssClass: 'alert-success', timeout: 2000});
        this.router.navigate(['/moves']);
      }
      else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 2000});
      }
    });
  }

}
