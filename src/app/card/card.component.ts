// card.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CepService, CepComImagem } from '../../service/cep.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  data: CepComImagem | null = null;

  constructor(private cepService: CepService) {
    this.cepService.cepData$.subscribe(res => {
      if (res) this.data = res;
    });
  }
}
