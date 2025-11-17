import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CepService } from '../../service/cep.service';
import { FormsModule } from '@angular/forms';
import {BorderDirective} from "../highlight";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    BorderDirective
  ]
})

export class SearchComponent   {
  cep: string = '';

  constructor(private cepService: CepService) {}

  buscar() {
    console.log(this.cep);
    if (!this.cep) {
      alert('Digite um CEP válido');
      return;
    }
    this.cepService.buscarCep(this.cep);
  }
}
