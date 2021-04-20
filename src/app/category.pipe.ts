import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from './IEntities/ICategory';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: ICategory[], args: string, filterby:any): ICategory[] {
    if(!args){
      return value;
    }
    if(args == 'searchByID'){
      return value.filter(
        x => x.ID == filterby
      );
    }
    if(args == 'searchByName'){
      return value.filter(
        x => x.Name.toLowerCase().indexOf(filterby.toLowerCase()) > -1 
      );
    }
    if(args == 'searchByShortCode'){
      return value.filter(
        x => x.ShortCode.indexOf(filterby) > -1
      );
    }
    return value;
  }
}
