import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appHighlitght]',
})
export class HighlitghtDirective implements OnInit {
    @Input('appHighlitght') color: string;
    constructor(private element: ElementRef, private renderer: Renderer2) {
        console.log('Hello Directive');
    }

    ngOnInit() {
        this.setBackgroundColor(this.color);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBackgroundColor('#DC3545');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBackgroundColor(this.color);
    }

    setBackgroundColor(color: string) {
        this.renderer.setStyle(
            this.element.nativeElement,
            'backgroundColor',
            color
        );
    }
}
