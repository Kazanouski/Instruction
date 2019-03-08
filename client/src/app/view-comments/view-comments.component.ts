import { Component, OnInit } from '@angular/core';
import { ManualService } from '../manual.service'
import { Comments } from '../Comments'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {

 
  id: number
  comments: Comments[]
  constructor(private manualservice: ManualService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')
    //setInterval(()=>{
      this.manualservice.viewComments(this.id).subscribe(comments=>{
        this.comments = comments
       })
    // },3000)
    
    
  }

}
