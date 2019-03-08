import { Component, OnInit } from '@angular/core';
import { Comments } from '../Comments'
import { ManualService } from '../manual.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {

  id: number
  comments = new Comments()

  constructor(private manualService: ManualService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  AddCommnet(){
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')
    this.manualService.addComment(this.id, this.comments).subscribe()

  }
}
