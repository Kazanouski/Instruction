import { Injectable } from '@angular/core';
import{ Users } from './users'
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private route: Router) { }

  public allUsers():Observable<Users[]>{
    return this.http.get<Users[]>(`/api/users`)
  }

  public UpdateUsers(id:number, users:Users): Observable<Users>{
    return this.http.put<Users>(`/api/users/${id}`,users)
  }

  public DeleteUser(id: number): Observable<Users>{
    return this.http.delete<Users>(`api/users/${id}`)
  }

}
