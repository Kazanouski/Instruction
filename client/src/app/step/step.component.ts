import { Component, OnInit, Input } from '@angular/core';
import { Steps } from '../steps'
import { ManualService } from '../manual.service'
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() manualName: string
  manualId:number
  counter: number =1
  count: number
  steps:Steps
  constructor( private manualservice: ManualService, private activatedroute: ActivatedRoute) { }

  ngOnInit():void {
    this.counter = +this.activatedroute.snapshot.paramMap.get('step')
    this.manualId = +this.activatedroute.snapshot.paramMap.get('id')
    this.Step(this.counter)
    this.manualservice.countSteps(this.manualId).subscribe((count)=>{
      this.count = count
    })
  }
  increment(){
    if(this.count>this.counter){
      this.counter++
      this.Step(this.counter)
    } else{
      this.counter = 1
      this.Step(this.counter)
    }
    
  }
  decrement(){
    if(this.counter ===1 || this.counter===0){
      this.counter = this.count
      this.Step(this.counter)
    } else{
      this.counter--
      this.Step(this.counter)
    }
  }

  Step(counter: number){
    return this.manualservice.Step(this.manualId, counter).subscribe(steps=>{
      this.steps = steps
    })
  }

}
