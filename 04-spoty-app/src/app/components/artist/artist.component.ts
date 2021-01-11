import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
    private artistId: string;
    private artist: any;
    public topTracks: any[];
    public isLoading = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private spotifyService: SpotifyService
    ) {
        this.activatedRoute.params.subscribe((params) => {
            this.artistId = params['id'];
            console.log('>> Parameter: ' + this.artistId);
        });

        this.spotifyService.getArtist(this.artistId).subscribe((data) => {
            this.artist = data;
        });

        this.spotifyService
            .getTopTrackByArtist(this.artistId)
            .subscribe((data) => {
                this.topTracks = data.tracks;
                console.log(this.topTracks);
                this.isLoading = false;
            });
    }
}
