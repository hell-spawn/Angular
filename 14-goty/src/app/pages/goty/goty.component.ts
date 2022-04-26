import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { GameModel } from 'src/interfaces/GameModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css'],
})
export class GotyComponent implements OnInit {
  games: GameModel[];

  constructor(private gameService: GameService) {
    this.games = [];
  }

  ngOnInit(): void {
    this.gameService.getNominatedGames().subscribe((resp) => {
      this.games = resp;
    });
  }

  voteForGame(game: GameModel) {
    this.gameService.addVoteToGame(game.id).subscribe((resp: any) => {
      if (resp.status === 'ok') {
        Swal.fire({ title: 'gracias', text: resp.message, icon: 'success' });
      } else {
        Swal.fire({ title: 'Oppsss', text: resp.message, icon: 'error' });
      }
    });
  }
}
