import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class Tooltip {
  @Input("tooltip-title") title;
  @HostListener('mouseenter') onMouseEnter() {
    console.log('Enter: ', this.title);
  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log('Leave: ', this.title);
  }
  constructor() { }

}
