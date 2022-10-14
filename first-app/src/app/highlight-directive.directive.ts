import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  //selector: '[appHighlightDirective]'
  selector:'appHighlight'
})
export class HighlightDirectiveDirective {

  constructor(private el:ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(): void{
    this.el.nativeElement.style.backgroundColor="springgreen";
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.el.nativeElement.style.backgroundColor="hotpink";
  }

}
