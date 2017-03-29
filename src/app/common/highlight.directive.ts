import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // css selector
})
export class HighlightDirective implements OnInit {
// use @Input() to define input attributes
  @Input() level: number;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = 'red';
        if (this.level < 11) {
            this.element.nativeElement.classList.add('danger');
        } else if (this.level < 26) {
             this.element.nativeElement.classList.add('warning');
        } else if (this.level > 50 ) {
             this.element.nativeElement.classList.add('success');
        }
  }
}
