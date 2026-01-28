import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
  <div class="bg-neutral-700 p-2 rounded-3xl ">
    <h1 class="text-zinc-50 px-2 text-xl font-extralight">Titulo del producto</h1>
    <hr>
    <img src="https://images.unsplash.com/photo-1736778236361-9cc4532131e9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
