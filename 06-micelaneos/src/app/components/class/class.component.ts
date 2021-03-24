import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
    alertCtrl = 'alert-primary';
    loading = false;
    properties = {
        danger: true,
    };

    constructor() {}

    ngOnInit(): void {
        console.log(this.properties);
    }

    ejecutar() {
        this.loading = true;
        setTimeout(() => (this.loading = false), 3000);
    }
}
