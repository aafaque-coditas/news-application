import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSearch]',
})
export class SearchDirective {
  @Input() appSearch!: Function;
  constructor() {}
  @HostListener('keyup', ['$event'])
  onKeyUp(event: any) {
    setTimeout(() => {
      event.preventDefault();
      this.appSearch();
    }, 2000);
  }
}
