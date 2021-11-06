import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  public baseURL: string = "http://localhost:8080/book/";

  constructor(
    private httpClient: HttpClient
  ) { }

  addBookDetails(book: Book) : Observable<any> {
    console.log(book);
    return this.httpClient.post(this.baseURL + "addBook", book);
  }

  getBookData() : Observable<any> {
    return this.httpClient.get(this.baseURL + "getAllBook");
  }
}
