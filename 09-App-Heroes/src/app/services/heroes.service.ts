import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../models/hero-model';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  API_URL = 'https://restapiheroes-default-rtdb.firebaseio.com';

  constructor(private httpClient: HttpClient) {}

  createHero(hero: HeroModel) {
    return this.httpClient.post(`${this.API_URL}/heroes.json`, hero).pipe(
      map((resp: any) => {
        hero.id = resp.name;
        return hero;
      })
    );
  }

  updateHero(hero: HeroModel) {
    const tmpHero: HeroModel = {
      ...hero,
    };

    tmpHero.id = null;
    return this.httpClient.put(
      `${this.API_URL}/heroes/${hero.id}.json`,
      tmpHero
    );
  }

  deleteHero(id: string) {
    return this.httpClient.delete(`${this.API_URL}/heroes/${id}.json`);
  }

  getHeroe(id: string) {
    return this.httpClient.get(`${this.API_URL}/heroes/${id}.json`).pipe(
      map((resp: any) => {
        let hero: HeroModel = { ...resp };
        hero.id = id;
        return hero;
      })
    );
  }

  //TODO delay for see loading
  getHeroes() {
    return this.httpClient
      .get(`${this.API_URL}/heroes.json`)
      .pipe(map(this.castResponse), delay(1000));
  }

  castResponse(heroesResponse: Object) {
    const heroes: HeroModel[] = [];

    if (heroesResponse === null) {
      return heroes;
    }

    Object.keys(heroesResponse).forEach((key) => {
      const hero: HeroModel = heroesResponse[key];
      hero.id = key;
      heroes.push(hero);
    });
    return heroes;
  }
}
