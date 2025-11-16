import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  standalone: true
})
export class BorderDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('pointerenter')
  onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #000');
  }

  @HostListener('pointerleave')
  onLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'border');
  }
}
