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
    let itemFoundFlag : boolean = false;
    let itemFound: IProduct;
    this.Products.forEach(p =>{
      if(p.ShortCode == this.shortcode){
        itemFoundFlag = true;
        itemFound = p;
      }
    })

    if(itemFoundFlag){
      let products: IProduct[] = [];
      this.Products.forEach((p,index) => {
        if(p != itemFound){
          products.push(p);
        }
      });
      this.myproductservice.deleteProduct(products);
      alert("Deleted Successfully");
      this.shortcode = '';
    }
    else{
      alert("ShortCode not Found");
    }
  }
}
