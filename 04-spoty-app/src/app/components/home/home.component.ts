import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    public newAlbumReleases: any[];
    public isLoading = true;
    public hasError = false;
    public error: any;

    constructor(private spotifyService: SpotifyService) {
        console.log('>> HomeComponent Ready');
    }

    ngOnInit() {
        this.spotifyService.getNewReleases().subscribe(
            (data) => {
                this.newAlbumReleases = data;
                this.isLoading = false;
            },
            (response) => {
                this.isLoading = false;
                this.hasError = true;
                this.error = response.error.error;
                console.log(this.error);
            }
        );
    }
}
