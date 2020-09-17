import {Component} from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    isShow: boolean = true;

    phrase: any = {
        author: 'Ben Parker',
        message: 'With great power comes great responsibility'
    }

    characters: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];

}
