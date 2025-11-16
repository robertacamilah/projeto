import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImagemService, Imagem } from "./image.service"

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
    return this.imagemService.buscarImagensExternas().pipe(
      map((imagens: Imagem[]) => {

        const shuffledImages = imagens.sort(() => Math.random() - 0.5);


        const imagensParaCeps = shuffledImages.slice(0, ceps.length);

        return ceps.map((cep, index) => {
          const img = imagensParaCeps[index];
          return {
            cep,
            logradouro: 'Exemplo',
            complemento: '',
            bairro: 'Exemplo',
            localidade: 'Exemplo',
            uf: 'SP',
            estado: 'SP',
            regiao: 'Sudeste',
            ddd: '11',
            imagem: img.download_url
          } as CepComImagem;
        });
      })
    );
  }
}
