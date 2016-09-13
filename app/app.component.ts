import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']

})
export class AppComponent {
    message : string = 'Hello';
    users : User[] = [
        { id: 25, name: 'Chris', username: 'Hiep' },
        { id: 26, name: 'Nick', username: 'Hiep' },
        { id: 27, name: 'Holly', username: 'Hiep' },
    ];
    activeUser: User;
    selectUser(user) {
      this.activeUser = user;
      console.log(this.activeUser);
    }
    onUserCreated(event) {
      this.users.push(event.user);
    }
}
