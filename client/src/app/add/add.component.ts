import { Component, OnInit } from '@angular/core';
import { Manuals } from '../manuals';
import { ManualService } from '../manual.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  manual = new Manuals();
  id: number
  manualId: number
  manuals: Manuals
  constructor(private manualService: ManualService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
  }

  add(){
    this.id = +this.activatedroute.snapshot.paramMap.get('userId')
    this.manualService.add(this.id,this.manual).subscribe(()=>{
        this.router.navigateByUrl(`/addSteps/${this.manual.id}`);
    });
  }

}
