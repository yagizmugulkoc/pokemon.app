import {Component, OnInit} from '@angular/core';
import {IMultiSelectOption} from "angular-2-dropdown-multiselect"
import {FlashMessagesService} from "angular2-flash-messages"
import {TypeService} from "../../services/type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
  weakAgainst: String[];
  effectiveAgainst: String[];
  typeOptions: IMultiSelectOption[];
  color: String;
  name: String;

  constructor(private flashMessages: FlashMessagesService,
              private typeService: TypeService,
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
  }

  onChangeColorHex8(event) {
    console.log(this.color);
  }

  onAddTypeSubmit() {
    if (this.weakAgainst == undefined)
      this.weakAgainst = [];
    if (this.effectiveAgainst == undefined)
      this.effectiveAgainst = [];
    const type = {
      name: this.name,
      color: this.color,
      weakAgainst: this.weakAgainst,
      effectiveAgainst: this.effectiveAgainst
    };
    this.typeService.addType(type).subscribe(data => {
      if (data.success) {
        this.flashMessages.show('Type has been added', {cssClass: 'alert-success', timeout: 2000});
        this.router.navigate(['']);
      }
      else {
        this.flashMessages.show(data.msg, {cssClass: 'alert-danger', timeout: 2000});
      }
    });
  }

}
