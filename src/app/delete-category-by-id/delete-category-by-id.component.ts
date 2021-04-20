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
    if(this.Categories.filter(c => c.ID == this.id).length > 0){
      this.Categories = this.Categories.filter(c => c.ID != this.id);
      this.myproductservice.deleteCategory(this.Categories);
      alert("Deleted Successfully");
      this.id = 0;
    }
    else{
      alert("ID not Found");
    }
  }
}
