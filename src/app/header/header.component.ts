import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {IsRouteDirective} from "../is-route";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, IonicModule, IsRouteDirective],
})
export class HeaderComponent implements OnInit {

  ngOnInit() {}

  @Output() botaoClicado = new EventEmitter<string>();

  onClick(botaoId: string) {
    this.botaoClicado.emit(botaoId);
  }
}


