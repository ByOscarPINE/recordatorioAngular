import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
  <div class="bg-neutral-700 p-2 rounded-lg ">
    <h1 class="text-zinc-50 px-2 text-xl font-extralight">Titulo del producto</h1>
    <hr>
    <img src="https://www.shutterstock.com/image-photo/delicious-pizza-fresh-nutritious-vegetables-600nw-2607572607.jpg" 
    alt="Imagen del producto" class="mx-auto my-2 rounded-lg"/>
    <div class="flex items-center justify-between">
      <button class="bg-blue-300 p-2 rounded-lg">
        Comprar
      </button>
      <span class="text-zinc-50 font-bold text-lg">$19.99</span>
    </div>
  </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard { 
    constructor() {
    console.log('ProductCard component initialized');
  }
}
