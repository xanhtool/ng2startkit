import {Component, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/models/user';

@Component ({
  selector:'user-form',
  templateUrl:'./app/users/user-form.component.html',
  styles:[`
      form {
        padding:10px;
        background:#ECF0F1;
        border-radius: 3px;
        margin-bottom: 30px;
      }
    `]
})
export class UserFormCompoment {
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;
  onSubmit() {
    //show event that the user was created
    this.userCreated.emit({user:this.newUser})

    this.newUser = new User();
    this.active = false; // disappear component
    setTimeout (() => this .active= true,0); // call fresh component

  }
}
