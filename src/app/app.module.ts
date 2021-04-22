import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MyproductService } from './myproduct.service';
import {MatTableModule} from '@angular/material/table';
import { DeleteProductByIdComponent } from './delete-product-by-id/delete-product-by-id.component';
import { DeleteProductByShortCodeComponent } from './delete-product-by-short-code/delete-product-by-short-code.component';
import { ProductPipe } from './product.pipe';
import {MatMenuModule} from '@angular/material/menu';
import { CategoryPipe } from './category.pipe';
import { DeleteCategoryByShortCodeComponent } from './delete-category-by-short-code/delete-category-by-short-code.component';
import { DeleteCategoryByIdComponent } from './delete-category-by-id/delete-category-by-id.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { MyerrorhandlerService } from './myerrorhandler.service';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    DisplayProductComponent,
    AddProductComponent,
    DeleteProductByIdComponent,
    DeleteProductByShortCodeComponent,
    ProductPipe,
    CategoryPipe,
    DeleteCategoryByShortCodeComponent,
    DeleteCategoryByIdComponent,
    AddCategoryComponent,
    DisplayCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  providers: [
      MyproductService,
     {provide: ErrorHandler, useClass:MyerrorhandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
