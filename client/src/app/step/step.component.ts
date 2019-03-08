import { Component, OnInit } from '@angular/core';
import { Steps } from '../steps'
import { ManualService } from '../manual.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  
  manualId:number
  counter: number =1
  steps:Steps
  constructor( private manualservice: ManualService, private activatedroute: ActivatedRoute) { }

  ngOnInit():void {
    this.counter = +this.activatedroute.snapshot.paramMap.get('step')
    this.Step(this.counter)
  }
  increment(){
    if(this.steps.step!==null){
      this.counter++
      this.Step(this.counter)
    } else{
      this.counter = 1
      this.Step(this.counter)
    }
    
  }
  decrement(){
    if(this.counter===1){
      this.counter = 1
      this.Step(this.counter)
    } else{
      this.counter--
      this.Step(this.counter)
    }
  }

  Step(counter: number){
    this.manualId = +this.activatedroute.snapshot.paramMap.get('id')
    return this.manualservice.Step(this.manualId, counter).subscribe(steps=>{
      this.steps = steps
    })
  }

}
