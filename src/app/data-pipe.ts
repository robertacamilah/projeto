import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {
  transform(value?: Date | string): string {
    const date = value ? new Date(value) : new Date(); // usa a data atual se não passar nada
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
}
