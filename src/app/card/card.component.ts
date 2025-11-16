import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

export interface CardData {
  imagem: string;
  bairro: string;
  localidade: string;
  logradouro: string;
  // adicione outros campos se necessário
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: CardData;
}

