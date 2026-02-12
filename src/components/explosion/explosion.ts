import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-explosion',
  imports: [],
  template: `<img src='https://png.pngtree.com/png-clipart/20250224/original/pngtree-scary-fire-explosion-isolated-high-impact-fiery-blast-with-smoke-png-image_20505686.png'>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Explosion { }
