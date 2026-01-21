import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-funciones',
  imports: [],
  templateUrl: './funciones.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Funciones {
  public x = input.required<Number>
  base_triangulo: number = 0;
  altura_triangulo: number = 0;
  area_triangulo: number = 0;
  sumar (a: number, b: number): number {
    this.area_triangulo = b * a / 2
    return this.area_triangulo;
  }

}