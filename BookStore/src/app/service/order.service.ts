import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public baseURL: string = "http://localhost:8080/order/";

  constructor(
    private httpClient: HttpClient
  ) { }

  addOrderDetails(order: Order) : Observable<any> {
    console.log(order);
    return this.httpClient.post(this.baseURL + "addOrder", order);
  }

  // getOrderData() : Observable<any> {
  //   return this.httpClient.get(this.baseURL + "getBookDetails");
  // }
}
