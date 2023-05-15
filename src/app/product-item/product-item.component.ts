import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() p!:Product;
  @Output() likeEvent = new EventEmitter()
  @Output() DeleteProduct = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  like(){
    this.likeEvent.emit(this.p)
  }
  delete(id:any){
    this.DeleteProduct.emit(this.p.id);
  }

}
