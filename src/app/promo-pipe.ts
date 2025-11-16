import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'promo',
  pure: false
})
export class PromoPipe implements PipeTransform {

  transform(valor: number, desconto?: number, fimPromo?: Date | string): string {
    if (!valor) return '';

    const precoOriginal = valor.toFixed(2).replace('.', ',');
    const precoComDesconto = desconto ? (valor - desconto).toFixed(2).replace('.', ',') : null;

    let countdown = '';
    if (fimPromo) {

      const agora = new Date().getTime();
      const fim = new Date(fimPromo).getTime();
      let diff = Math.max(fim - agora, 0);

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= dias * (1000 * 60 * 60 * 24);

      const horas = Math.floor(diff / (1000 * 60 * 60));
      diff -= horas * (1000 * 60 * 60);

      const minutos = Math.floor(diff / (1000 * 60));

      countdown = ` - Faltam ${dias}d ${horas}h ${minutos}m`;
    } else {
      countdown = ' - por tempo limitado!';
    }

    if (precoComDesconto) {
      return `De R$ ${precoOriginal} por R$ ${precoComDesconto}${countdown}`;
    }
    return `R$ ${precoOriginal}${countdown}`;
  }
}
