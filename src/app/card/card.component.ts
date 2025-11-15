import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CepService, CepData } from '../../service/cep.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  data: CepData | null = null;

  constructor(private cepService: CepService) {
    // inscreve e pega o valor atual também
    this.cepService.cepData$.subscribe(res => {
      if (res) {
        console.log('Recebido no Card:', res);
        this.data = res;
      }
    });

    // pega o último valor emitido imediatamente
    const current = this.cepService['cepDataSubject'].value;
    if (current) this.data = current;
  }

}
