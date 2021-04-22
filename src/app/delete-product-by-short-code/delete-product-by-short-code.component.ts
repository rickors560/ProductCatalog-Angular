import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from '../IEntities/IProduct';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-delete-product-by-short-code',
  templateUrl: './delete-product-by-short-code.component.html',
  styleUrls: ['./delete-product-by-short-code.component.css']
})
export class DeleteProductByShortCodeComponent implements OnInit {

  constructor(private myproductservice: MyproductService, private _snackBar: MatSnackBar) { }
  Products: IProduct[]
  shortcode: string;
  ngOnInit(): void {
    this.myproductservice.products$.subscribe(c=>{
      this.Products = c;
    });
  }
  delete(){
    if(this.Products.filter(p => p.ShortCode == this.shortcode).length > 0 && this.shortcode != "Default"){
      this.Products = this.Products.filter(p => p.ShortCode != this.shortcode);
      this.myproductservice.deleteProduct(this.Products);
      this.openSnackBar("Deleted Successfully!!");
      this.shortcode = '';
    }
    else{
      this.openSnackBar("ShortCode not Found!!");
    }
  }
  openSnackBar(msg:string) {
    this._snackBar.open(msg,"Ok");
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000);
  }
}
