import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


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

@Injectable({
  providedIn: 'root'
})
export class CepService {
  private cepDataSubject = new BehaviorSubject<CepData | null>(null);
  public cepData$ = this.cepDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  buscarCep(cep: string) {
    this.http.get<CepData>(`https://viacep.com.br/ws/${cep}/json/`)
      .subscribe({
        next: data => this.cepDataSubject.next(data),
        error: err => console.error(err)
      });
  }
  // ,



}
