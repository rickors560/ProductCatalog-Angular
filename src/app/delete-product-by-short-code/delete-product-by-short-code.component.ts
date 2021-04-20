import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IEntities/IProduct';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-delete-product-by-short-code',
  templateUrl: './delete-product-by-short-code.component.html',
  styleUrls: ['./delete-product-by-short-code.component.css']
})
export class DeleteProductByShortCodeComponent implements OnInit {

  constructor(private myproductservice: MyproductService) { }
  Products: IProduct[]
  shortcode: string;
  ngOnInit(): void {
    this.myproductservice.products$.subscribe(c=>{
      this.Products = c;
    });
  }
  delete(){
    if(this.Products.filter(p => p.ShortCode == this.shortcode).length > 0){
      this.Products = this.Products.filter(p => p.ShortCode != this.shortcode);
      this.myproductservice.deleteProduct(this.Products);
      alert("Deleted Successfully");
      this.shortcode = '';
    }
    else{
      alert("ShortCode not Found");
    }
  }
}
