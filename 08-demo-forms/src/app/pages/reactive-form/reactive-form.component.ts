import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.populateFrom();
  }

  private buildForm() {
    this.userForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        lastName: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        user: ['', Validators.required, CustomValidators.userExists],
        age: ['', [Validators.required, CustomValidators.minimalLegalAge]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        address: this.fb.group({
          city: [''],
          province: [''],
        }),
        hobbies: this.fb.array([]),
      },
      {
        validators: CustomValidators.comfirmPasswords(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  private populateFrom() {
    // Altenative more extrictic

    /*
    this.userForm.setValue({
      name: 'Bruce',
      lastName: 'Wayne',
      email: 'batman@gmail.com',
      address: {
        city: 'Gotam',
        province: 'Tricorners',
      },
    });
   */

    this.userForm.reset({
      name: 'Bruce',
      lastName: 'Wayne',
      email: 'batman@gmail.com',
      password: 'qwerty123',
      confirmPassword: 'qwerty123',
      age: 20,
    });
  }

  addHobbie() {
    this.hobbies.push(this.fb.control(''));
  }

  removeHobbie(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    console.log(this.userForm);
    if (this.userForm.invalid) {
      return Object.values(this.userForm.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) => {
            control.markAsTouched();
          });
        }
        control.markAsTouched();
      });
    }
  }

  public get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  public get nameIsInvalid(): boolean {
    return (
      this.userForm.get('name').invalid && this.userForm.get('name').touched
    );
  }

  public get lastNameIsInvalid(): boolean {
    return (
      this.userForm.get('lastName').invalid &&
      this.userForm.get('lastName').touched
    );
  }

  public get emailIsInvalid(): boolean {
    return (
      this.userForm.get('email').invalid && this.userForm.get('email').touched
    );
  }

  public get userIsInvalid(): boolean {
    return (
      this.userForm.get('user').invalid &&
      this.userForm.get('user').touched &&
      !this.userForm.hasError('userExists', 'user')
    );
  }

  public get passwordIsInvalid(): boolean {
    return (
      this.userForm.get('password').invalid &&
      this.userForm.get('password').touched
    );
  }

  public get confirmPasswordIsInvalid(): boolean {
    return (
      this.userForm.get('confirmPassword').invalid &&
      this.userForm.get('confirmPassword').touched
    );
  }

  public get ageIsInvalid(): boolean {
    return this.userForm.get('age').invalid && this.userForm.get('age').touched;
  }

  public get cityIsInvalid(): boolean {
    let groupAddres = this.userForm.get('address');
    return groupAddres.get('city').invalid && groupAddres.get('city').touched;
  }

  public get provinceIsInvalid(): boolean {
    let groupAddres = this.userForm.get('address');
    return (
      groupAddres.get('province').invalid && groupAddres.get('province').touched
    );
  }
}
