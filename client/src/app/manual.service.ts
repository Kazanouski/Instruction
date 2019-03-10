import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Manuals} from './manuals'
import { Observable } from 'rxjs';
import { Steps } from './steps'
import { Comments } from './Comments'
import { Likes } from './Likes';
import { Topic } from './topic';
import { Count } from './Count';

@Injectable({
  providedIn: 'root'
})
export class ManualService {

  constructor(private http: HttpClient, private router: Router) {
    
   }

  public add(userId: number,manual: Manuals):Observable<Manuals>{
    return this.http.post<Manuals>(`/api/add/${userId}`,manual)

  }

  public allManuals():Observable<Manuals[]>{
    return this.http.get<Manuals[]>('/api/allManuals');
  }

  public manualDetail(id: number): Observable<Manuals>{
    return this.http.get<Manuals>(`/api/manual/${id}/1`)
  }

  public userManual(userId: number): Observable<Manuals[]>{
    return this.http.get<Manuals[]>(`/api/userManuals/${userId}`)
  }

  public addStep(step: Steps,manualId: number):Observable<Steps>{
    return this.http.post<Steps>(`/api/addSteps/${manualId}`,step)
  }

  public Step(manualId: number, step:number):Observable<Steps>{
    return this.http.get<Steps>(`/api/steps/${manualId}/${step}`)
  }

  public addComment(manualId: number, comments: Comments):Observable<Comments>{
    return this.http.post<Comments>(`/api/comments/${manualId}`,comments)
  }

  public viewComments(manualId:number):Observable<Comments[]>{
    return this.http.get<Comments[]>(`/api/comments/${manualId}`)
  }

  public viewManualName(name: string):Observable<Manuals>{
    return this.http.get<Manuals>(`api/manual/${name}`)
  }

  public addLike(likes: Likes, commentId:number, userId: number):Observable<Likes>{
    return this.http.post<Likes>(`/api/addLikes/${userId}/${commentId}`, likes)
  }

  public like(commentId:number):Observable<number>{
    return this.http.get<number>(`/api/like/${commentId}`)
  }

  public countSteps(manualId:number):Observable<number>{
    return this.http.get<number>(`/api/steps/${manualId}`)
  }

  public allTopic():Observable<Topic[]>{
    return this.http.get<Topic[]>(`/api/topic`)
  }

  public updateManual(id:number, manual:Manuals):Observable<Manuals>{
    return this.http.put<Manuals>(`/api/manual/${id}`,manual)
  }

  public deleteManual(id:number):Observable<Manuals>{
    return this.http.delete<Manuals>(`/api/manual/${id}`)
  }

  public maxManual():Observable<number>{
    return this.http.get<number>(`/api/maxManual`)
  }

  public commentsCount(manualId:number):Observable<Count[]>{
    return this.http.get<Count[]>(`/api/commentsCount/${manualId}`)
  }

  public manualById(id: number):Observable<Manuals>{
    return this.http.get<Manuals>(`/api/manuals/${id}`)
  }
  
}
