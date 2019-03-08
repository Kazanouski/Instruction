import { Component, OnInit } from '@angular/core';
import{ Users } from '../users'
import { UsersService } from '../users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  users = new Users()
  
  constructor(private userservice:UsersService, private router: Router) { }

  ngOnInit(){

  }

}
