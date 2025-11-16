import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from "../search/search.component";
import {FooterComponent} from "../footer/footer.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, FooterComponent, CardComponent, CommonModule, HeaderComponent, SearchComponent, DatePipe],
})
export class HomeComponent {
  currentDate: Date = new Date();


  hora: string = '';
  data: string = '';

  ngOnInit() {
    this.atualizarRelogio();
    setInterval(() => this.atualizarRelogio(), 1000);
  }

  atualizarRelogio() {
    const agora = new Date();

    this.hora = agora.toLocaleTimeString('pt-BR');

    this.data = agora.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
}


