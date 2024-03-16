import { AbstractControl, ValidatorFn } from "@angular/forms";

export default class Validation {

    static upperLowerSymbolNumberRegex: string | RegExp =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
    
    static passwordMatch(password: string, confirmPassword: string): ValidatorFn {
        return (formGroup: AbstractControl): { [key: string]: any } | null => {
          const passwordControl = formGroup.get(password);
          const confirmPasswordControl = formGroup.get(confirmPassword);
          
          if (!passwordControl || !confirmPasswordControl) {
            return null;
          }
          if (
            confirmPasswordControl.errors &&
            !confirmPasswordControl.errors['PasswordNoMatch']
            ) {
              return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
            confirmPasswordControl.setErrors({ PasswordNoMatch: true });
            return { PasswordNoMatch: true };
          } else {
            confirmPasswordControl.setErrors(null);
            return null;
          }
        };
      }
  }