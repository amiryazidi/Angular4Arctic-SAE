import { Product } from './../core/model/product';
import { ConsumerProductService } from './../Services/consumer-product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product!:Product;

  constructor(private consP:ConsumerProductService) { }

  ngOnInit(): void {
  this.product = new Product();
  }
  updateProduct() {
    this.consP.updateProduct(this.product.id,this.product).subscribe({
      next: () => {
        console.log('Produit mis à jour avec succès');
        // Effectuez toute autre action nécessaire après la mise à jour
      },
      error: (error) => console.log('Erreur lors de la mise à jour du produit:', error)
    });
  }

}
