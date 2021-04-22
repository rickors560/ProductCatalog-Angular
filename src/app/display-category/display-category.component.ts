import { Component, OnInit } from '@angular/core';
import { ICategory } from '../IEntities/ICategory';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {

  Categories:ICategory[];
  displayedColumns: string[] = ['ID', 'Name', 'ShortCode', 'Description'];
  search:any ;
  filtertype:string ;
  constructor(private myproductservice:MyproductService) { }
  
  ngOnInit(): void {
    this.myproductservice.categories$.subscribe(c=>{
      this.Categories = c.slice(1);
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
}
