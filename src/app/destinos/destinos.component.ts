import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CardComponent, CardData } from '../card/card.component';
import { CepService } from '../../service/cep.service';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import {infoRegiaoUsuarioComponent} from "../info-regiao-usuario/info-regiao-usuario.component";


@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, CardComponent, FooterComponent, HeaderComponent,infoRegiaoUsuarioComponent ],
})
export class DestinosComponent {
  ceps: string[] = [
    '53401-900', '53030-970', '52160-000', '53040-970', '01005-000',
    '52130-000', '51310-000', '53370-970', '50090-000', '53110-970'
  ];

  cards: CardData[] = [];

  cidade: string = '';
  regiao: string = '';
  estado: string = '';
  codigo: string = '';

  constructor(private cepService: CepService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.cidade = params['cidade'] || '';
      this.regiao = params['regiao'] || '';
      this.estado = params['regiaoCodigo'] || '';
      this.codigo = params['ip'] || '';
    });

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
