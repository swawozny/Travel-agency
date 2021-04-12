import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStars'
})
export class FilterByStarsPipe implements PipeTransform {

  transform(items: any, stars: any): any {
    if (!items)
    return [];
    if (!stars || stars == [] )
    return items;
   return items.filter((item: { stars: any; }) => {
    return item.stars == stars
    });
  }
}

