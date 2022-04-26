import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { GameModel } from 'src/interfaces/GameModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: GameModel[] = [];

  constructor(private http: HttpClient) {}

  getNominatedGames() {
    if (this.games.length > 0) {
      console.log('Cache');
      return of(this.games);
    }
    console.log('from web');
    return this.http
      .get<GameModel[]>(`${environment.urlService}/api/goty`)
      .pipe(tap((games) => (this.games = games)));
  }

  addVoteToGame(id: string) {
    return this.http.post(`${environment.urlService}/api/goty/${id}`, {}).pipe(
      catchError((err) => {
        return of(err.error);
      })
    );
  }
}
