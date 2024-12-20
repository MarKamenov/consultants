import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appHideMissing]',
  standalone: false
})
export class HideMissingDirective {

  constructor(private el: ElementRef) { }

  @HostListener('error')
  private onError() {
    this.el.nativeElement.src = 'https://placehold.co/240x250';
  }
}


