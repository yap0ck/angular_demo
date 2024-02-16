
import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appSurlignage]'
})
export class SurlignageDirective {

  constructor(private _element: ElementRef) { }
    @HostListener('mouseover')
    onmouseover(){
      this._element.nativeElement.style.backgroundColor= 'green'
    }

    @HostListener('mouseout')
    onMouseout(){
    this._element.nativeElement.style.backgroundColor= 'none'
    }

}
