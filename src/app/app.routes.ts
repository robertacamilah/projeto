import { Routes } from '@angular/router';
import {DestinosComponent} from "./destinos/destinos.component";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  { path: 'destinos', component: DestinosComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

