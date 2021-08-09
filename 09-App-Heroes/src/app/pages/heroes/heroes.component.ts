import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { HeroModel } from 'src/app/models/hero-model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: HeroModel[] = [];
  public loading: boolean;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe((response) => {
      this.heroes = response;
    });
  }

  deleteHero(hero: HeroModel, index: number) {
    Swal.fire({
      title: 'Eliminar',
      text: 'Are you sure you want to eliminate ' + hero.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroesService.deleteHero(hero.id).subscribe((response) => {
          this.heroes.splice(index, 1);
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
