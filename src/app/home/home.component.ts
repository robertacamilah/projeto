import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CardComponent, CardData } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { FooterComponent } from '../footer/footer.component';
import { CepService } from '../../service/cep.service';
import {PromoPipe} from "../promo-pipe";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, PromoPipe, FooterComponent, CardComponent, CommonModule, HeaderComponent, SearchComponent],
})
export class HomeComponent {
  currentDate: Date = new Date();

  card: CardData | null = null;

  constructor(private cepService: CepService, private router: Router) {}
  acaoDoBotao(botaoId: string) {
    if (botaoId === 'destinos') {
      this.router.navigate(['/destinos'], {
        queryParams: {
          ip: this.ip,
          cidade: this.cidade,
          regiao: this.regiao,
          regiaoCodigo: this.regiaoCodigo
        }
      });
    }
  }
  ip: string = '';
  cidade: string = '';
  regiao: string = '';
  regiaoCodigo: string = '';

  async ngOnInit() {


    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      this.ip = data.ip;
      this.cidade = data.city;
      this.regiao = data.region;
      this.regiaoCodigo = data.region_code;
    } catch (err) {
      console.error('Erro ao buscar IP:', err);
    }

    this.cepService.cepData$.subscribe(res => {
      if (res) {
        this.card = {
          imagem: res.imagem,
          bairro: res.bairro,
          localidade: res.localidade,
          logradouro: res.logradouro
        };
      }
    });
  }



}
