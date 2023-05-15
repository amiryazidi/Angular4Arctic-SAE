import { AddProductComponent } from './add-product/add-product.component';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OffreEmploisComponent } from './offre-emplois/offre-emplois.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdcutsComponent,
    OffreEmploisComponent,
    NavbarComponent,
    NotFoundComponent,
    AddProductComponent,
    DetailsProductComponent,
    EditProductComponent,
    ProductItemComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
