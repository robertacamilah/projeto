import { Directive, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appIsRoute]',
  exportAs: 'isRoute'
})
export class IsRouteDirective {

  constructor(private router: Router) {}

  @Input('appIsRoute') route!: string;

  get match() {
    return this.router.url === this.route;
  }
}
