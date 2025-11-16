
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

  buscarImagemPorCep(cep: string): string {
    return `https://loremflickr.com/800/600/nature,landscape?lock=${cep}`;
  }

  buscarImagensExternas(): Observable<Imagem[]> {
    return this.http.get<Imagem[]>('https://picsum.photos/v2/list?page=1&limit=50\n');
  }
}
