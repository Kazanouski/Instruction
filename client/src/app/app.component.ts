import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name1: string;
  otherTheme: boolean = false;
  constructor(public auth: AuthenticationService){ }

  changeTheme(){
    this.otherTheme = !this.otherTheme
  }
}
