import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-templeate-form',
  templateUrl: './templeate-form.component.html',
  styleUrls: ['./templeate-form.component.css'],
})
export class TempleateFormComponent implements OnInit {
  user = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    email: 'bataman@example.com',
    country: '',
    gender: '',
    /*
    firstName: '',
    lastName: '',
    email: '',
    */
  };
  countries: any[];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getCountries()
      .subscribe((response) => (this.countries = response));
  }

  onSubmit(formTemplate: NgForm) {
    console.log('Call onSubmit');
    console.log(formTemplate.value);
    Object.values(formTemplate.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
