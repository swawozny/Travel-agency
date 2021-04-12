import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDate'
})
export class FilterByDatePipe implements PipeTransform {

  transform(items: any, minDate: string, maxDate: string): any {
    if (!items)
    return [];
    if (!minDate || !maxDate )
    return items;
   return items.filter((item: { startDate: string, endDate:string }) => {
    return item.startDate >= minDate && item.endDate <= maxDate;
    });
  }
}