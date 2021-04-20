import { Component, OnInit } from '@angular/core';
import { ICategory } from '../IEntities/ICategory';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-delete-category-by-short-code',
  templateUrl: './delete-category-by-short-code.component.html',
  styleUrls: ['./delete-category-by-short-code.component.css']
})
export class DeleteCategoryByShortCodeComponent implements OnInit {

  constructor(private myproductservice: MyproductService) { }
  Categories: ICategory[]
  shortcode: string;
  ngOnInit(): void {
    this.myproductservice.categories$.subscribe(c=>{
      this.Categories = c;
    });
  }
  delete(){
    let itemFoundFlag : boolean = false;
    let itemFound: ICategory;
    this.Categories.forEach(c =>{
      if(c.ShortCode == this.shortcode){
        itemFoundFlag = true;
        itemFound = c;
      }
    })

    if(itemFoundFlag){
      let categories: ICategory[] = [];
      this.Categories.forEach((c,index) => {
        if(c != itemFound){
          categories.push(c);
        }
      });
      this.myproductservice.deleteCategory(categories);
      alert("Deleted Successfully");
      this.shortcode = '';
    }
    else{
      alert("ShortCode not Found");
    }
  }
}
