import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { CalculService } from '../Services/calcul.service';
import { ConsumerProductService } from '../Services/consumer-product.service';
import { ProoductService } from '../Services/product.service';

@Component({
  selector: 'app-prodcuts',
  templateUrl: './prodcuts.component.html',
  styleUrls: ['./prodcuts.component.css']
})
export class ProdcutsComponent implements OnInit {
  title : string ="welcome 4SE3"
  listProduct!: Product[];
  priceMax!:number;
  alertStock!:number;
  constructor(private sp:ProoductService,private sc:CalculService,private conP:ConsumerProductService) { }

  ngOnInit(): void {
   //this.listProduct= this.sp.listProduct;
   this.conP.getProduct().subscribe({
    next:(data)=>this.listProduct=data,
    error: (error)=>console.log(error),
    complete: ()=>console.log('im finishing'),
   })
  }
  buy(i:number){
    this.listProduct[i].quantity--;
  }
  like(p:any){
    let i=this.listProduct.indexOf(p)
    this.listProduct[i].like++;
  }
  getAlertStock(){
    this.alertStock=this.sc.getStat(this.listProduct,'quantity',0);
  }
  delete(id:number){
    this.conP.deleteProduct(id).subscribe({
      next:()=>this.listProduct=this.listProduct.filter((p)=>p.id!=id),
    });
  }
}
