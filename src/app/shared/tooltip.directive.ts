import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class Tooltip {
  tooltipElement: HTMLDivElement = document.createElement('div');
  @Input("tooltip-title")
  set title(value) {
    this.tooltipElement.innerText = value;
  }

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.appendChild(this.tooltipElement);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.tooltipElement.remove()
  }
}
