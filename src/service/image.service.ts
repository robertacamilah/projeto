// imagem.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Imagem {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  constructor(private http: HttpClient) {}

  // Mantém a função existente: imagem única por CEP
  buscarImagemPorCep(cep: string): string {
    return `https://loremflickr.com/800/600/nature,landscape?lock=${cep}`;
  }

  // Nova função: busca várias imagens externas
  buscarImagensExternas(): Observable<Imagem[]> {
    return this.http.get<Imagem[]>('https://picsum.photos/v2/list');
  }
}
