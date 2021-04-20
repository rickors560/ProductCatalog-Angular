import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ICategory } from '../IEntities/ICategory';
import { IProduct } from '../IEntities/IProduct';
import { MyproductService } from '../myproduct.service';

function uniqueShortCodeValidator(shortcodes:string[]):ValidatorFn{
  return (control : AbstractControl):{[key:string]: boolean} | null => 
  {
    if(shortcodes.includes(control.value)){
      return {"shortcodeNotUnique":true}
    }
    return null;
  }
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  Products:IProduct[];
  Categories: ICategory[];
  ProductShortCodes:string[];
  id: number;
  constructor(private myproductservice:MyproductService) {}

  addProductForm:FormGroup;

  ngOnInit(): void {
    this.myproductservice.categories$.subscribe(c=>{
      this.Categories = c;
    });
    this.myproductservice.productshortcodes$.subscribe(c =>{
      this.ProductShortCodes = c;
    });
    this.myproductservice.products$.subscribe(c=>{
      this.Products = c;
    });
    this.id = this.Products[this.Products.length -1].ID + 1;

    this.addProductForm = new FormGroup({
      id: new FormControl(this.id),
      name: new FormControl("",[Validators.required]),
      manufacturer: new FormControl("",[Validators.required]),
      shortcode: new FormControl("",[Validators.required, Validators.maxLength(4), uniqueShortCodeValidator(this.ProductShortCodes)]),
      categories: new FormControl(),
      description: new FormControl("",[Validators.required]),
      sellingprice: new FormControl([Validators.required, Validators.min(0)])
    })
  }
  submit(){
    let newProduct: IProduct = {
      ID : this.addProductForm.get('id')?.value,
      Name : this.addProductForm.get('name')?.value,
      Manufacturer : this.addProductForm.get('manufacturer')?.value,
      ShortCode : this.addProductForm.get('shortcode')?.value,
      Categories : this.addProductForm.get('categories')?.value,
      Description : this.addProductForm.get('description')?.value,
      SellingPrice : this.addProductForm.get('sellingprice')?.value,
    };
    this.myproductservice.addProduct(newProduct);
  }
  reset(){
    this.addProductForm.reset();
  }
}