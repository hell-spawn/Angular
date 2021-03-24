import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-style',
    /*<p [ngStyle]="{ 'font-size': size + 'px' }"> */
    template: `
        <p [ngStyle]="{ 'fontSize.px': size }">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
        </p>
        <button
            type="button"
            class="btn btn-primary me-1"
            (click)="size = size + 5"
        >
            +
        </button>
        <button type="button" class="btn btn-primary" (click)="size = size - 5">
            -
        </button>
    `,
    styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
    size = 10;

    constructor() {}

    ngOnInit(): void {}
}
