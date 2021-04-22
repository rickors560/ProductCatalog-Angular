import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICategory } from '../IEntities/ICategory';
import { MyproductService } from '../myproduct.service';

function uniqueShortCodeValidator(shortcodes:string[]):ValidatorFn{
  return (control : AbstractControl):{[key:string]: boolean} | null => 
  {
    if(shortcodes.includes(control.value)){
      return {"shortcodeNotUnique":true}
    }
    return null;
  }
}

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  Categories: ICategory[];
  CategoryShortCodes:string[];
  id: number;
  constructor(private myproductservice:MyproductService, private _snackBar: MatSnackBar) {}

  addCategoryForm:FormGroup;

  ngOnInit(): void {
    this.myproductservice.categories$.subscribe(c=>{
      this.Categories = c;
    });
    this.myproductservice.categoryshortcodes$.subscribe(c =>{
      this.CategoryShortCodes = c;
    });
    this.id = this.Categories[this.Categories.length -1].ID + 1;

    this.addCategoryForm = new FormGroup({
      id: new FormControl(this.id),
      name: new FormControl("",[Validators.required]),
      shortcode: new FormControl("",[Validators.required, Validators.maxLength(4), uniqueShortCodeValidator(this.CategoryShortCodes)]),
      description: new FormControl("",[Validators.required])
    })
  }
  submit(){
    let newCategory: ICategory = {
      ID : this.addCategoryForm.get('id')?.value,
      Name : this.addCategoryForm.get('name')?.value,
      ShortCode : this.addCategoryForm.get('shortcode')?.value,
      Description : this.addCategoryForm.get('description')?.value
    };
    this.myproductservice.addCategory(newCategory);
    this.openSnackBar();
  }
  reset(){
    this.addCategoryForm.reset();
  }
  openSnackBar() {
    this._snackBar.open("Added Successfully!!","Ok");
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000);
  }
}