import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-regiao-usuario',
  templateUrl: './info-regiao-usuario.component.html',
  styleUrls: ['./info-regiao-usuario.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class infoRegiaoUsuarioComponent {
  @Input() cidade: string = '';
  @Input() regiao: string = '';
  @Input() estado: string = '';
  @Input() codigo: string = '';
}
