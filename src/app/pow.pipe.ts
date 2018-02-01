import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {

  transform(value: number, pow: number = 1, str: string ): string {
    return value + '^' + pow + str + Math.pow(value, pow);
  }

}
