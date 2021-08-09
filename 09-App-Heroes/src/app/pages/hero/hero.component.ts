import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroModel } from 'src/app/models/hero-model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public heroForm: FormGroup;
  public currentHero: HeroModel = new HeroModel();

  constructor(
    private fb: FormBuilder,
    private heroesService: HeroesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = '';
    this.buildForm();
    id = this.route.snapshot.paramMap.get('id');

    if (id !== 'new') {
      this.heroesService.getHeroe(id).subscribe((response) => {
        this.currentHero = response;
        this.populateHeroForm();
      });
    }
  }

  buildForm() {
    this.heroForm = this.fb.group({
      firebaseId: [''],
      name: ['', Validators.required],
      power: ['', Validators.required],
    });
  }

  populateHeroForm() {
    this.heroForm.reset({
      firebaseId: this.currentHero.id,
      name: this.currentHero.name,
      power: this.currentHero.power,
    });
  }

  onSubmit() {
    if (this.heroForm.invalid) {
      console.log('HeroForm is invalid');
      return;
    }

    Swal.fire({
      title: 'Processing',
      text: 'Saving your information',
      icon: 'info',
      allowOutsideClick: false,
    });

    Swal.showLoading();
    let request: Observable<any>;
    const { name, power, firebaseId } = this.heroForm.getRawValue();
    this.currentHero.id = firebaseId === '' ? null : firebaseId;
    this.currentHero.power = power;
    this.currentHero.name = name;
    if (this.currentHero.id === null) {
      request = this.heroesService.createHero(this.currentHero);
    } else {
      request = this.heroesService.updateHero(this.currentHero);
    }
    request.subscribe((resp) => {
      this.populateHeroForm();
      Swal.fire({
        title: this.currentHero.name,
        text: 'Updated informacion',
      });
    });
  }
}
