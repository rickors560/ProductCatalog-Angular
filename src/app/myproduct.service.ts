import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from './IEntities/ICategory';
import { IProduct } from './IEntities/IProduct';

@Injectable({
  providedIn: 'root'
})
export class MyproductService{

  Products:IProduct[];
  Categories: ICategory[];
  Productshortcodes: string[] = [];
  Categoryshortcodes: string[] = ["Tech", "Food"];
  products$:BehaviorSubject<IProduct[]>;
  categories$:BehaviorSubject<ICategory[]>;
  productshortcodes$:BehaviorSubject<string[]>;
  categoryshortcodes$:BehaviorSubject<string[]>;
  constructor() {
    this.Categories = [
      {
        ID: 1,
        Name: "Technology",
        ShortCode: "Tech",
        Description: "Products related to technology"
      },
      {
        ID: 2,
        Name: "Food",
        ShortCode: "Food",
        Description: "Food items"
      }
    ];
    this.Products = [
      {
        ID:1,
        Name:"Laptop",
        Manufacturer:"Lenovo",
        ShortCode:"T430",
        Categories:'Tech',
        Description: "Lenovo ThinkPad Laptop",
        SellingPrice: 50000
      },
      {
        ID:2,
        Name:"Bread",
        Manufacturer:"Britannia",
        ShortCode:"BR1",
        Categories:'Food',
        Description: "Whole Wheat Bread",
        SellingPrice: 10
      }
    ];
    this.Productshortcodes.push(this.Products[0].ShortCode);
    this.products$ = new BehaviorSubject(this.Products);
    this.categories$ = new BehaviorSubject(this.Categories);
    this.productshortcodes$ = new BehaviorSubject(this.Productshortcodes);
    this.categoryshortcodes$ = new BehaviorSubject(this.Categoryshortcodes);
   }
   addProduct(product:IProduct){
     this.Productshortcodes.push(product.ShortCode);
     this.productshortcodes$.next(this.Productshortcodes);

     this.Products.push(product);
     this.products$.next(this.Products);
   }
   deleteProduct(products:IProduct[]){
     this.Products = products;
     this.products$.next(this.Products);
   }

   addCategory(category:ICategory){
    this.Categoryshortcodes.push(category.ShortCode);
    this.categoryshortcodes$.next(this.Categoryshortcodes);

    this.Categories.push(category);
    this.categories$.next(this.Categories);
  }
  deleteCategory(categories:ICategory[]){
    this.Categories = categories;
    this.categories$.next(this.Categories);
  }
}
