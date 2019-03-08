import { Component, OnInit } from '@angular/core';
import { ManualService } from '../manual.service'
import { Manuals } from '../manuals'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manual-detail',
  templateUrl: './manual-detail.component.html',
  styleUrls: ['./manual-detail.component.css']
})
export class ManualDetailComponent implements OnInit {
  headerData: number=0
  manual:Manuals
  constructor(private manualService: ManualService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.manualService.manualDetail(id).subscribe(manual=>{
      this.manual = manual
    })
  }

}
