import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SpotifyService {
    private token =
        'BQBeYhIVls7wfQ0F64wZ6QMOOrd9NdpXwXb3GOMqy2vQYhhTUvMNbTIqWx8EyYElwD2EximkM4xqGeBlkr8';

    private endpoint = 'https://api.spotify.com/v1';

    constructor(private httpClient: HttpClient) {
        console.log('>> SpotifyService Ready');
    }

    private buildRequest(
        requestPath: string,
        httpParams?: HttpParams
    ): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
        });
        let options = {};
        if (httpParams == undefined) {
            options = { headers: headers };
        } else {
            options = { headers: headers, params: httpParams };
        }

        return this.httpClient.get(`${this.endpoint}${requestPath}`, options);
    }

    public getNewReleases(): Observable<any> {
        return this.buildRequest('/browse/new-releases').pipe(
            map((data) => data['albums'].items)
        );
    }

    public searchArtist(term: string): Observable<any> {
        let params = new HttpParams();
        params = params.set('type', 'artist');
        params = params.set('q', term);
        return this.buildRequest('/search', params).pipe(
            map((data) => data['artists'].items)
        );
    }

    public getArtist(artistId: string): Observable<any> {
        return this.buildRequest(`/artists/${artistId}`);
    }

    public getTopTrackByArtist(artistId: string): Observable<any> {
        let params = new HttpParams();
        params = params.set('country', 'US');
        return this.buildRequest(`/artists/${artistId}/top-tracks`, params);
    }
}
