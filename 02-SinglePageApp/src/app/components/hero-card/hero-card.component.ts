import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from 'src/app/services/heroes.service';

@Component({
    selector: 'app-hero-card',
    templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

    @Input()
    public hero: Hero;
    @Input()
    public id: number;


    constructor(private router: Router) {}

    ngOnInit(): void {
    }

    loadHero(id: number): void {
        this.router.navigate(['/hero', this.id]);
    }

}
