// imagem.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {
  buscarImagemPorCep(cep: string): string {
    // Lock na URL com o CEP para sempre gerar a mesma imagem para um CEP
    return `https://loremflickr.com/800/600/nature,landscape?lock=${cep}`;
  }
}
