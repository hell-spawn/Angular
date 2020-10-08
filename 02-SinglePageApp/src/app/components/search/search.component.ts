import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Hero} from 'src/app/services/heroes.service';
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {

    public heroes: Hero[];
    public term: string;

    constructor(private activatedRoute: ActivatedRoute, private heroService: HeroesService) {
        this.activatedRoute.params.subscribe(parameters => {
            this.term = parameters['term'];
            this.heroes = heroService.searchHeros(this.term);
        });
    }


}
