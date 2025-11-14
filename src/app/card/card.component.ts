import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class CardComponent {
  @Input() imagem: string =
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';
  @Input() titulo: string = 'Card Moderno';
  @Input() descricao: string =
    'Um design elegante e interativo com animações suaves.';
  @Input() curtidas: number = 1234;
  @Input() comentarios: number = 342;
  @Input() link!: string;
}


