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
    if(this.Products.filter(p => p.ID == this.id).length > 0){
      this.Products = this.Products.filter(p => p.ID != this.id);
      this.myproductservice.deleteProduct(this.Products);
      alert("Deleted Successfully");
      this.id = 0;
    }
    else{
      alert("ID not Found");
    }
  }
}
