import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent, CardData } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { FooterComponent } from '../footer/footer.component';
import { CepService } from '../../service/cep.service';
import {DataPipe} from "../data-pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, DataPipe, FooterComponent, CardComponent, CommonModule, HeaderComponent, SearchComponent],
})
export class HomeComponent {
  currentDate: Date = new Date();
  hora: string = '';
  data: string = '';

  card: CardData | null = null; // <-- propriedade para um único card

  constructor(private cepService: CepService) {}

  ngOnInit() {

    // Buscar um CEP único e setar no card
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
