import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserComponent } from './user.component';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080/hello-world';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<any>{
    return this.httpClient.get('${this.baseUrl}');
  }

}
