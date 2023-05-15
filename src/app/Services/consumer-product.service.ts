import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {
  url:string="http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<Product[]>(this.url);
  }
  getProductById(id:number){
    return this.http.get<Product>(this.url+'/'+id);
  }
  addProduct(product:Product){
    return this.http.post(this.url,product)
  }
  deleteProduct(id:number){
    return this.http.delete(this.url+'/'+id);
  }
  updateProduct(id:number,product:Product){
    return this.http.put(this.url+'/'+id,product)
  }
}
