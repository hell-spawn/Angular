import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { GameModel } from 'src/interfaces/GameModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: any[] = [];

  constructor(private firestore: AngularFirestore) {
    console.log('Prueba');
    firestore
      .collection<GameModel>('goty')
      .valueChanges()
      .pipe(
        map((resp: GameModel[]) =>
          resp.map(({ name, votes }) => ({ name, value: votes }))
        )
      )
      .subscribe((resp) => (this.games = resp));
  }

  ngOnInit(): void {}
}
