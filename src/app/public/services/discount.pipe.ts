import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number): any {
    const after: number = value * .8;
    return after.toFixed(2);
  }

}
