import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const {nativeElement} = this.el;
    this.renderer.setStyle(nativeElement, 'background-color', 'red');
    this.renderer.addClass(nativeElement, 'white-text');
  }

}
