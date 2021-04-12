import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDestination'
})
export class FilterByDestinationPipe implements PipeTransform {

  transform(items: any, searchText: string): any {
    if (!items)
    return [];
    if (!searchText)
    return items;
    searchText = searchText.toLowerCase(); return items.filter((item: { destination: string; }) => {
    return item.destination.toLowerCase().includes(searchText);
    });
  }
}