import { Component, OnInit } from '@angular/core';
import { Steps } from '../steps'
import { ManualService } from '../manual.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.css']
})
export class AddStepComponent implements OnInit {

  step = new Steps()
  manualId: number
  counter: number=1
  steps: number =0
  

  constructor(private manualservice: ManualService, private activatedrouter: ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }
  addStep(){
    this.step.step = this.steps;
    this.manualId = +this.activatedrouter.snapshot.paramMap.get('manualId')
    this.manualservice.addStep(this.step, this.manualId).subscribe()
  }
  increment(){
    this.steps++
    this.counter++
  }
  Save(){
    this.steps++
    this.counter++
    this.addStep()
    this.router.navigateByUrl('/')
  }

}
