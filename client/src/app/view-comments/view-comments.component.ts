import { Component, OnInit } from '@angular/core';
import { ManualService } from '../manual.service'
import { Comments } from '../Comments'
import { Likes } from '../Likes'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {

 
  id: number
  userId: number
  comments: Comments[]
  counts: number
  like = new Likes()
  constructor(private manualservice: ManualService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')
    setInterval(()=>{
      this.manualservice.viewComments(this.id).subscribe(comments=>{
        this.comments = comments
       })
     },5000)
       
    
    
  }

  addLike(commentId: number){
    this.userId = 2
    this.like.like = 1 
    this.manualservice.addLike(this.like,commentId,this.userId).subscribe()
    
  }

  viewLike(commentId:number):void{
    this.manualservice.like(commentId).subscribe((counts)=>{
      this.counts = counts
    })
  }

}
