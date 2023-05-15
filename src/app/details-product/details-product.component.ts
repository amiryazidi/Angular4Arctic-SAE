import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProoductService } from '../Services/product.service';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
id!:number;
product!:Product
  constructor(private route:ActivatedRoute,private sp:ProoductService ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.product=this.sp.listProduct[this.id];
  }

}
