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
    if(this.Categories.filter(c => c.ShortCode == this.shortcode).length > 0){
      this.Categories = this.Categories.filter(c => c.ShortCode != this.shortcode);
      this.myproductservice.deleteCategory(this.Categories);
      alert("Deleted Successfully");
      this.shortcode = '';
    }
    else{
      alert("ShortCode not Found");
    }
  }
}
