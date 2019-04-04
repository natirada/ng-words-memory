import { OnInit, ElementRef, Directive } from '@angular/core';

@Directive({
    selector: '[appBack]'
})
export class BackDirective implements OnInit {

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'black';
        this.elementRef.nativeElement.style.height = '200px';
        this.elementRef.nativeElement.style.width = '200px';
        // height: 200px;
        // width: 200px;
    }
}
