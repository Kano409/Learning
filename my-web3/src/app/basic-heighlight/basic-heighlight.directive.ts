import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // object to configure directive
  selector: '[appBasicHeighlight]',
})
export class BasicHeighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'brown';
  }
}
