import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import{HttpHeaders,HttpClient} from '@angular/common/http';
import { Order } from '../Models/order';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url:string='http://localhost:3000/order';
  constructor(private http:HttpClient) { }
  public Add(order:Order):Observable<any>{
    return this.http.post<any>(this.url,order,Requestheaders);
  }
  public Get():Observable<any>{
    return this.http.get<any>(this.url,Requestheaders);
  }
}
