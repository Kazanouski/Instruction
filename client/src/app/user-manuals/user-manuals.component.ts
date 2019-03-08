import { Component, OnInit } from '@angular/core';
import { ManualService } from '../manual.service'
import { Manuals } from '../manuals'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-manuals',
  templateUrl: './user-manuals.component.html',
  styleUrls: ['./user-manuals.component.css']
})
export class UserManualsComponent implements OnInit {

  manuals:Manuals[]
  constructor(private manualservice: ManualService, private route: ActivatedRoute) { }

  ngOnInit():void {
    const userId = +this.route.snapshot.paramMap.get('userId');
    this.manualservice.userManual(userId).subscribe(manuals=>{
      this.manuals = manuals
    })
  }
}
