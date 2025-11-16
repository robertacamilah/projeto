import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable, map } from 'rxjs';
import { ImagemService } from './image.service';

export interface CepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ddd: string;
}

export interface CepComImagem extends CepData {
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private cepDataSubject = new BehaviorSubject<CepComImagem | null>(null);
  public cepData$ = this.cepDataSubject.asObservable();

  constructor(private http: HttpClient, private imagemService: ImagemService) {}

  // Função existente para 1 CEP
  buscarCep(cep: string): Observable<CepComImagem> {
    return this.http.get<CepData>(`https://viacep.com.br/ws/${cep}/json/`).pipe(
      map(cepData => {
        const imgUrl = this.imagemService.buscarImagemPorCep(cep);
        const resultado: CepComImagem = { ...cepData, imagem: imgUrl };
        this.cepDataSubject.next(resultado); // mantém o BehaviorSubject
        return resultado;
      })
    );
  }

  // Nova função: busca vários CEPs
  buscarVariosCeps(ceps: string[]): Observable<CepComImagem[]> {
    const requests: Observable<CepComImagem>[] = ceps.map(cep => this.buscarCep(cep));
    return forkJoin(requests); // retorna todos de uma vez
  }
}
