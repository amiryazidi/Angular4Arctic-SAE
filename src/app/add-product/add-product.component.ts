import { Product } from './../core/model/product';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProoductService } from '../Services/product.service';
import { ConsumerProductService } from '../Services/consumer-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Product;
  constructor(private sp:ProoductService,private router:Router,private consP:ConsumerProductService) { }

  ngOnInit(): void {
    this.product = new Product();
  }
  ajouter(){
    //  console.log(this.product);
    //  this.sp.addProduct(this.product);
    //  this.router.navigateByUrl('/products');
    this.consP.addProduct(this.product).subscribe({
      next:()=>this.router.navigateByUrl('/products'),
      error:(error)=>console.log('Error lors de l\'ajout')
    })
  }
}
