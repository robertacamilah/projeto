import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CardComponent, CardData } from '../card/card.component';
import { CepService} from '../../service/cep.service';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, CardComponent, FooterComponent, HeaderComponent],
})
export class DestinosComponent {
  ceps: string[] = [
    '01001-000', '01002-000', '01003-000', '01004-000', '01005-000',
    '01006-000', '01007-000', '01008-000', '01009-000', '01010-000'
  ];

  cards: CardData[] = [];

  constructor(private cepService: CepService) {}

  ngOnInit() {
    this.cepService.buscarVariosCeps(this.ceps).subscribe(res => {
      this.cards = res.map(c => ({
        imagem: c.imagem,
        bairro: c.bairro,
        localidade: c.localidade,
        logradouro: c.logradouro
      }));
    });
  }
}
