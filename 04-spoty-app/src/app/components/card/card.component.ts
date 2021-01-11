import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() items: any[];

    constructor(private router: Router) {}

    public showArtist(item: any): void {
        let artistId: string;
        if (item.type === 'album') {
            artistId = item.artists[0].id;
        } else {
            artistId = item.id;
        }
        this.router.navigate(['artist', artistId]);
    }
}
