import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function price_valid(
  controlName1: string,
  controlName2: string
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const value1 = group.get(controlName1)?.value;
    const value2 = group.get(controlName2)?.value;

    if (value1 == null || value2 == null) return null;


    if(value1 >= value2) {
        group.get(controlName2)?.setErrors({ priceComparison: true });
    }
  return null;
  };
}