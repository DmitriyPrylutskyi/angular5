import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList: Array<object>, searchStr: string, fieldName: string): Array<object> {
    if (carList.length === 0 || searchStr === '') {
      return carList;
    }

    return carList.filter( car => car[fieldName].toString().toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
