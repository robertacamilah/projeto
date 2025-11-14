import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonList, IonListHeader, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle],
})
export class HomePage {
  constructor() {}
}
