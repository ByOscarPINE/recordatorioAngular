import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `<!-- component -->
<div class=" bg-gray-100 flex items-center justify-center">
  <div class="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
    <div class="relative">
      <img 
        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpFub74hi00mE-P4cddtz5qvrJ1q6JfHp5N-DFxusIH8U6BufIWjLCULL5PgnZC1T4Dwphv4EeAcUWGuXrSwVobhOK0RM8KY1Cia8lIF_bc9z-g8T1MMwu"
        alt="Product"
        class="w-full h-52 object-cover"
      />
      <span class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        @if(stock > 0) {
          Aviable
        }@else {
          Out of stock
        }
      </span>
    </div>
    
    <div class="p-5 space-y-4">
      <div>
        <h3 class="text-xl font-bold text-gray-900">{{title}}</h3>
        <p class="text-gray-500 mt-1">Cheetos de queso</p>
      </div>
      
      <div class="flex justify-between items-center">
        <div class="space-y-1">
          <p class="text-2xl font-bold text-gray-900">$ {{price}}</p>
          <p class="text-sm text-gray-500 line-through">$69.99</p>
        </div>
        
        <div class="flex items-center gap-1">
          <div class="text-yellow-400">★★★★</div>
          <div class="text-gray-300">★</div>
          <span class="text-sm text-gray-600 ml-1">(42)</span>
        </div>
      </div>
        @if(stock > 0) {bb 
          <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
            Add to Cart
          </button>
        }@else {
          <button disabled class="w-full bg-indigo-300 text-white font-medium py-3 rounded-lg transition-colors">
            Add to Cart
          </button>
        }
    </div>
  </div>
</div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  @Input() title : string = '';
  @Input() price : number = 0;
  @Input() stock : number = 0;
  @Input() aviable : boolean = false;
}
