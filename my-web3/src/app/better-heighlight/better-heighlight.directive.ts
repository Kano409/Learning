import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appBetterHeighlight]',
})
export class BetterHeighlightDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.eleRef.nativeElement,
    //   'background-color',
    //   'silver'
    // );
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      'silver'
    );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      'chocolate'
    );
  }
}
