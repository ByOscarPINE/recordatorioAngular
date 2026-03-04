import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function date_valid(
  controlName1: string,
  controlName2: Date
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const fecha1 = new Date(group.get(controlName1)?.value);
    const fecha2 = new Date(controlName2);

    if (fecha1 == null || fecha2 == null) return null;

    if(fecha1 <= fecha2) {
      console.log("Fecha 1 es menor a fecha 2");
        group.get(controlName1)?.setErrors({ dateComparasion: true });
    }
  return null;
  };
}
