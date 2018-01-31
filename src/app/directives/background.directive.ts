import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  @HostBinding('style.backgroundColor') background: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  @HostListener('mouseenter') moiseEnter() {
    const {nativeElement} = this.el;
    this.background = 'red';
    this.renderer.addClass(nativeElement, 'white-text');
  }

  @HostListener('mouseleave') moiseLeave() {
    const {nativeElement} = this.el;
    this.background = 'transparent';
    this.renderer.removeClass(nativeElement, 'white-text');
  }

}
