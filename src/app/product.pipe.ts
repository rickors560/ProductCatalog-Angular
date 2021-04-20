import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './IEntities/IProduct';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: IProduct[], args: string, filterby:any): IProduct[] {
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
    if(args == 'searchByPriceLower'){
      return value.filter(
        x => x.SellingPrice <= filterby
      );
    }
    if(args == 'searchByPriceHigher'){
      return value.filter(
        x => x.SellingPrice >= filterby
      );
    }
    if(args == 'searchByPriceEqual'){
      return value.filter(
        x => x.SellingPrice == filterby
      );
    }
    return value;
  }
}
