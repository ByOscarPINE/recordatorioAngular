import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  template: `<div class="my-1">
    <img src="/banner.jpg"
    alt="Banner Image" class="w-full h-48 object-cover rounded-lg"/>
  </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Banner { }
