import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { DeleteCategoryByIdComponent } from './delete-category-by-id/delete-category-by-id.component';
import { DeleteCategoryByShortCodeComponent } from './delete-category-by-short-code/delete-category-by-short-code.component';
import { DeleteProductByIdComponent } from './delete-product-by-id/delete-product-by-id.component';
import { DeleteProductByShortCodeComponent } from './delete-product-by-short-code/delete-product-by-short-code.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"products", component:ProductsComponent,
    children:[
      {path:"add", component:AddProductComponent},
      {path:"display", component:DisplayProductComponent},
      {path:"delete-id", component:DeleteProductByIdComponent},
      {path:"delete-shortcode", component:DeleteProductByShortCodeComponent}
    ]
  },
  {path:"categories", component:CategoriesComponent,
  children:[
    {path:"add", component:AddCategoryComponent},
    {path:"display", component:DisplayCategoryComponent},
    {path:"delete-id", component:DeleteCategoryByIdComponent},
    {path:"delete-shortcode", component:DeleteCategoryByShortCodeComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }