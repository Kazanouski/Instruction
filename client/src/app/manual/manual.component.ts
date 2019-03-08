import { Component, OnInit } from '@angular/core';
import { ManualService } from '../manual.service';
import { Router } from '@angular/router';
import { Manuals } from '../manuals';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

  manuals: Manuals[]
  constructor(private manualService: ManualService) { }
  

  ngOnInit(): void{
    this.allManuals();
  }

  allManuals(){
    return this.manualService.allManuals().subscribe(
      manuals=>{
        this.manuals = manuals
      }
    )
  }

}
