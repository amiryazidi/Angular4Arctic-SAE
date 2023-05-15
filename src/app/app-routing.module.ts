import { AddProductComponent } from './add-product/add-product.component';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { OffreEmploisComponent } from './offre-emplois/offre-emplois.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './details-product/details-product.component';

const routes: Routes = [
  {path:'' , redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProdcutsComponent},
  {path:'offres', component:OffreEmploisComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'product/:id', component:DetailsProductComponent},
  {path:'**', component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
