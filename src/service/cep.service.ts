import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { ImagemService, Imagem } from "./image.service"
import { map, switchMap } from 'rxjs/operators';



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


  buscarCep(cep: string) {
    this.http.get<CepData>(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
      next: cepData => {
        const imgUrl = this.imagemService.buscarImagemPorCep(cep);
        const resultado: CepComImagem = { ...cepData, imagem: imgUrl };
        this.cepDataSubject.next(resultado);
      },
      error: err => console.error(err)
    });
  }

  buscarVariosCeps(ceps: string[]): Observable<CepComImagem[]> {
    const requisicoes = ceps.map(cep =>
      this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`)
    );

    return forkJoin(requisicoes).pipe(
      switchMap((dadosCeps) =>
        this.imagemService.buscarImagensExternas().pipe(
          map((imagens: Imagem[]) => {
            const embaralhadas = [...imagens].sort(() => Math.random() - 0.5);

            return dadosCeps.map((cepData, index) => ({
              ...cepData,
              imagem: embaralhadas[index % embaralhadas.length]?.download_url
            }));
          })
        )
      )
    );
  }

}
