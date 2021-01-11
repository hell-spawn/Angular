import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
})
export class SearchComponent {
    public artists: any[] = [];
    public isLoading = false;
    public hasError = false;
    public error: any;

    constructor(private spotifyService: SpotifyService) {
        console.log('>> SearchComponent.constructor');
    }

    searchArtist(term: string): void {
        if (term.length < 1) {
            this.artists = [];
            return;
        }
        this.isLoading = true;
        this.spotifyService.searchArtist(term).subscribe(
            (data) => {
                this.artists = data;
                this.isLoading = false;
            },
            (response) => {
                this.error = response.error.error;
                this.isLoading = false;
                this.hasError = true;
            }
        );
    }
}
