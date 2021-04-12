import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {

  transform(items: any, minPrice: number, maxPrice: number): any {
    if (!items)
    return [];
    if (!minPrice || !maxPrice )
    return items;
   return items.filter((item: { price: number }) => {
    return item.price >= minPrice && item.price <= maxPrice;
    });
  }
}