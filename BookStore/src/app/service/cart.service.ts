import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public baseURL: string = "http://localhost:8080/cart/";

  constructor(
    private httpClient: HttpClient
  ) { }

  addCartDetails(book: any) : Observable<any> {
    console.log(book);
    return this.httpClient.post(this.baseURL + "addToCart", book);
  }

  getCartDetails() : Observable<any> {
    return this.httpClient.get(this.baseURL + "getCartDetails");
  }

  removeCartDetails(id: any) : Observable<any> {
    console.log(id);
    return this.httpClient.delete(this.baseURL + "deleteCartDetails",{
      headers: new HttpHeaders(),
      params: new HttpParams().append('id', id),
    });
  }
}
