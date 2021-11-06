import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseURL: string = "http://localhost:8080/user/";

  constructor(
    private httpClient: HttpClient
  ) { }

  addUserDetails(user: User) : Observable<any> {
    console.log(user);
    return this.httpClient.post(this.baseURL + "addUser", user);
  }

  getUserDatails() : Observable<any> {
    return this.httpClient.get(this.baseURL + "getAllUser");
  }
}
