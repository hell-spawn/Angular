import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  /* simple validator */

  static minimalLegalAge(control: AbstractControl): ValidationErrors | null {
    if (
      control.value !== undefined &&
      (isNaN(control.value) || control.value < 18)
    ) {
      return { minimalLegalAge: true };
    }

    return null;
  }

  /* Validator form */
  static comfirmPasswords(
    controlName: string,
    matchingControlName: string
  ): ValidatorFn {
    return (group: AbstractControl): ValidationErrors => {
      const control = group.get(controlName).value;
      const matchingControl = group.get(matchingControlName).value;
      return control === matchingControl ? null : { noMatchPassword: true };
    };
  }

  /*Async validator*/

  static userExists(
    control: AbstractControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> {
    if (!control.value) {
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'spawn') {
          resolve({ userExists: true });
        } else {
          resolve(null);
        }
      }, 3500);
    });
  }
}
