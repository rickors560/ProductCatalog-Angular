import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IEntities/IProduct';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-delete-product-by-id',
  templateUrl: './delete-product-by-id.component.html',
  styleUrls: ['./delete-product-by-id.component.css']
})
export class DeleteProductByIdComponent implements OnInit {

  constructor(private myproductservice: MyproductService) { }
  Products: IProduct[]
  id: number;
  ngOnInit(): void {
    this.myproductservice.products$.subscribe(c=>{
      this.Products = c;
    });
  }
  delete(){
    let itemFoundFlag : boolean = false;
    let itemFound: IProduct;
    this.Products.forEach(p =>{
      if(p.ID == this.id){
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
      this.id = 0;
    }
    else{
      alert("Id not Found");
    }
  }
}
