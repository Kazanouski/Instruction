import { Component, OnInit } from '@angular/core';
import { Users } from '../users'
import { UsersService } from '../users.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {

  id: number
  users = new Users()
  nameControl123 = FormControl
  emailControl = FormControl
  passwordControl = FormControl
  constructor(private userservice: UsersService, private activatedroute:ActivatedRoute, private router: Router) { }

  ngOnInit():void {
    this.id = +this.activatedroute.snapshot.paramMap.get('id')
    this.userservice.UserById(this.id).subscribe((users)=>{
      this.users = users
    })
  }

  updateUsers(){
    this.id  = +this.activatedroute.snapshot.paramMap.get('id')
    this.userservice.UpdateUsers(this.id,this.users).subscribe(()=>{
      this.router.navigateByUrl(`/profile`)
    }
      
    )
  }

}
