import { OnInit, ElementRef, Directive } from '@angular/core';

@Directive({
    selector: '[appFront]'
})
export class FrontDirective implements OnInit {

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'red';
        this.elementRef.nativeElement.style.height = '200px';
        this.elementRef.nativeElement.style.width = '200px';
        this.elementRef.nativeElement.style.textAlign = 'center';
    }
}
