import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Hero} from 'src/app/services/heroes.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {

    public currentHero: Hero;

    constructor(private activatedRoute: ActivatedRoute, private heroService: HeroesService) {
        this.activatedRoute.params.subscribe(parameters => {
            this.currentHero = this.heroService.getHero(parameters['id']);
        });
    }

}
