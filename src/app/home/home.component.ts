import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from "../search/search.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, CardComponent, CommonModule, HeaderComponent, SearchComponent, DatePipe],
})
export class HomeComponent {
  currentDate: Date = new Date();
}


