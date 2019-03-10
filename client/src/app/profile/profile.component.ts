import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { ManualService } from '../manual.service';
import { Manuals } from '../manuals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails;
  manuals:Manuals[]
  constructor(private auth: AuthenticationService, private manualservice:ManualService) { }

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user;
        this.UserManual(user.id)
      },
      err => {
        console.error(err);
      }
    )
  
  }

  UserManual(id:number):void{   
    this.manualservice.userManual(id).subscribe(manuals=>{
      this.manuals = manuals
    })
  }
}
