import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appClickedDirective]'
})
export class ClickedDirective implements OnInit{
  @Input() defaultColor = 'transparent';
  @Input() clickedColor = '#47b4d5';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('click') click(eventData: Event) {
    if (this.backgroundColor === this.defaultColor) {
        this.backgroundColor = this.clickedColor;
    } else {
      this.backgroundColor = this.defaultColor;
    }
  }
}
