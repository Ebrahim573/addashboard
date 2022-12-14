import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

postProduct(data:any){
  return this.http.post<any>("http://localhost:3000/productlist/", data);

}
getProduct(data:any){
  return this.http.get<any>("http://localhost:3000/productlist/");
}

}
