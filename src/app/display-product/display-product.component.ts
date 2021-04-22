import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IEntities/IProduct';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
  Products:IProduct[];
  displayedColumns: string[] = ['ID', 'Name', 'Manufacturer', 'ShortCode','Categories','Description','SellingPrice'];
  search:any ;
  filtertype:string ;
  constructor(private myproductservice:MyproductService) { }
  
  ngOnInit(): void {
    this.myproductservice.products$.subscribe(c=>{
      this.Products = c.slice(1);
    });
  }
  filterByID(){
    this.search = 1;
    this.filtertype = 'searchByID';
  }
  filterByName(){
    this.search = '';
    this.filtertype = 'searchByName';
  }
  filterByShortCode(){
    this.search = '';
    this.filtertype = 'searchByShortCode';
  }
  filterByPriceLower(){
    this.search = 0;
    this.filtertype = 'searchByPriceLower';
  }
  filterByPriceEqual(){
    this.search = 0;
    this.filtertype = 'searchByPriceEqual';
  }
  filterByPriceHigher(){
    this.search = 0;
    this.filtertype = 'searchByPriceHigher';
  }
}
