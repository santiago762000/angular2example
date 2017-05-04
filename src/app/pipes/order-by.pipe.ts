import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, field?: any): any {
    let id=field.value;
    value.sort((a: any, b: any) => {
      if (a[id] < b[id]) {
        return -1;
      } else if (a[id] > b[id]) {
        return 1;
      } else {
        return 0;
      }
    });
    return value;
  }

  

}
