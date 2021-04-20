import { Component, OnInit } from '@angular/core';
import { ICategory } from '../IEntities/ICategory';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-delete-category-by-id',
  templateUrl: './delete-category-by-id.component.html',
  styleUrls: ['./delete-category-by-id.component.css']
})
export class DeleteCategoryByIdComponent implements OnInit {

  constructor(private myproductservice: MyproductService) { }
  Categories: ICategory[]
  id: number;
  ngOnInit(): void {
    this.myproductservice.categories$.subscribe(c=>{
      this.Categories = c;
    });
  }
  delete(){
    let itemFoundFlag : boolean = false;
    let itemFound: ICategory;
    this.Categories.forEach(c =>{
      if(c.ID == this.id){
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
      this.id = 0;
    }
    else{
      alert("Id not Found");
    }
  }
}
