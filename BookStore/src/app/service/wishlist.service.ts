import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
 
  public baseURL: string = "http://localhost:8080/bookStore/wishList/";

  constructor(
    private httpClient: HttpClient
  ) { }

  addWishDetails(book: any) {
    console.log(book);
    return this.httpClient.post(this.baseURL + "addWishListDetails", book);
  }

  getWishDetails() : Observable<any> {
    return this.httpClient.get(this.baseURL + "getWishListDetails");
  }

  removeWishDetails(id: any) : Observable<any> {
    console.log(id);
    return this.httpClient.delete(this.baseURL + "deleteWishListDetails",{
      headers: new HttpHeaders(),
      params: new HttpParams().append('id', id),
    });
  }

}
