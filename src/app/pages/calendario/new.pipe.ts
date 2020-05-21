import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateCustomPipe'
})
export class dateCustomPipe implements PipeTransform {

  transform(date: Date | string, day: number, format: string = 'yyyy-MM-dd'): string {
    date = new Date(date);  // if orginal type was a string
    date.setDate(date.getDate()-day);
    return new DatePipe('es-MX').transform(date, format);
  }

}
