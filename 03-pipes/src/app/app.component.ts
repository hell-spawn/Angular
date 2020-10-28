import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    name: string = 'Monkey D. Luffy';
    nameLowerCase: string = 'monkey d. luffy';

    arrNames: string[] = ['Luffy', 'Soro', 'Namy', 'Usopp', 'Sanji']

    PI: number = Math.PI;

    money: number = 0.259;

    value: number = 0.357;

    currentDate = new Date();

    language: string = 'es-CO';

    pirate: Object = {
        name: 'Luffy',
        age: 17,
        alies: 'Straw Hat',
        techniques: {
            devilFruit: 'Gomu Gomu no Mi',
            haki: 'the three colors'
        }
    }

    password: string = 'i am secure';
    isShowPassword: boolean = false;

    videoUrl = 'https://player.vimeo.com/video/85628364?color=ffffff';

    objectPromise = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Load data ok');
        }, 4500);
    });


    changeLanguege(language: string) {
        this.language = language;
    }

}
