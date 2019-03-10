import { Component, OnInit, Input } from '@angular/core';
import { Manuals } from '../manuals';
import { ManualService } from '../manual.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Topic } from '../topic';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() id:number;
  
  manual = new Manuals();
  manualId: number
  manuals: Manuals
  topic: Topic[]
  constructor(private manualService: ManualService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.manualService.allTopic().subscribe((topic)=>{
      this.topic= topic
    })
    this.manualService.maxManual().subscribe((manualId)=>{
      this.manualId = manualId + 1
    })
  }
  
  add(){
    this.manualService.add(this.id,this.manual).subscribe(()=>{
        this.router.navigateByUrl(`/addSteps/${this.manualId}`);
    });
  }

}
