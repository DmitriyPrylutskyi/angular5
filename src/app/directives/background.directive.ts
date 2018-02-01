import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @Input('appBackground') hoverColor = 'red';
  @Input() defaultColor = 'transparent';
  @HostBinding('style.backgroundColor') background: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') moiseEnter() {
    const {nativeElement} = this.el;
    this.background = this.hoverColor;
    this.renderer.addClass(nativeElement, 'white-text');
  }

  @HostListener('mouseleave') moiseLeave() {
    const {nativeElement} = this.el;
    this.background = this.defaultColor;
    this.renderer.removeClass(nativeElement, 'white-text');
  }

}
