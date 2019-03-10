import { Component, OnInit } from '@angular/core';
import { ManualService } from '../manual.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Manuals } from '../manuals';

@Component({
  selector: 'app-update-manual',
  templateUrl: './update-manual.component.html',
  styleUrls: ['./update-manual.component.css']
})
export class UpdateManualComponent implements OnInit {
  id:number
  manual = new Manuals()

  constructor(private manualservice:ManualService, private activatedroute:ActivatedRoute, private router:Router) { }
  ngOnInit():void {
    this.id = +this.activatedroute.snapshot.paramMap.get('id')
    this.manualservice.manualById(this.id).subscribe((manual)=>{
      this.manual = manual
    })
  }
  updateManual(){
    this.manualservice.updateManual(this.id, this.manual).subscribe(()=>{
      this.router.navigateByUrl('/profile')
    })
  }
  deleteManual(){
    this.manualservice.deleteManual(this.id).subscribe(()=>{
      this.router.navigateByUrl('/profile')
    })
  }
}
