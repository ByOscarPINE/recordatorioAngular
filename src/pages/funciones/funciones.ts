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

  
  alumnos : String[] = [];
  alumnosRes = this.alumnos;
  constructor() {
    this.rellenarAlumnos();
  };
  
  rellenarAlumnos() {
    this.alumnos = ['Ana', 'Luis', 'Carlos', 'Marta', 'Sofía'];
  };
  
  public x = input.required<Number>
  base_triangulo: number = 0;
  altura_triangulo: number = 0;
  area_triangulo: number = 0;
  sumar (a: number, b: number): number {
    this.area_triangulo = b * a / 2
    return this.area_triangulo;
  }
  
  
  mostrarAlumnos() {
    console.log(this.alumnos)
  }
  
  reprobarAlumnos() {
    this.alumnos = []
  }
  
  recuperarAlumnos() {
    this.alumnos = this.alumnosRes
  }


  saludo: String = '';
  saludar(nombre?: String) {
    nombre ? this.saludo = `Hola, ${nombre}` : this.saludo = 'Hola, Bienvenido' ;
  }

  nombre: String = ''
  n_1: number = 0;
  n_2: number = 0;
  n_mayor: String = '';
  mayorQue(num1: number, num2: number) {
    this.n_1 = num1;
    this.n_2 = num2;
    
    this.n_mayor = num1 > num2 ? String(num1) : num2 ? String(num2) : 'Iguales';
    return this.n_mayor;
  }

  suma2 = 0;

  sumatorioa(n1: number, n2?: number){
    n2 ? this.suma2 = n1 + n2 : this.suma2 = n1;
  }

  total: number = 0;
  precio: number = 0;
  descuento_valor: number = 0;

  // Ejemplo 1: propiedades para parámetro por defecto (descuento)
  precio_def: number = 0;
  total_def: number = 0;

  // Ejemplo 2: propiedades para parámetro por defecto (fecha)
  formattedFecha: string = '';

  descuento(precio: number, descuento?: number) {
    this.precio = precio;
    this.descuento_valor = descuento ? descuento : 0;
    this.total = descuento ? precio - (precio * descuento / 100) : precio;
  }

  edad: number = 0;
  esMayorDeEdad(edad = 18) {
    this.edad = edad;
  }
  
  pais: String = '';

  esPais(pais = 'Mexico') {
    this.pais = pais;
  }

  emojies : String[] = ['😀'];

  agregarEmojie() {
    this.emojies.length < 10 ? this.emojies.push(this.emojies[0]) : null;
  }
}