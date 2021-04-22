import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICategory } from '../IEntities/ICategory';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-delete-category-by-short-code',
  templateUrl: './delete-category-by-short-code.component.html',
  styleUrls: ['./delete-category-by-short-code.component.css']
})
export class DeleteCategoryByShortCodeComponent implements OnInit {

  constructor(private myproductservice: MyproductService, private _snackBar: MatSnackBar) { }
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
      this.openSnackBar("Deleted Successfully!!");
      this.shortcode = '';
    }
    else{
      this.openSnackBar("ShortCode not Found!!");
    }
  }
  openSnackBar(msg:string) {
    this._snackBar.open(msg,"Ok");
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000);
  }
}
