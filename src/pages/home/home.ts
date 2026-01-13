import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from "../../components/share/card/card";

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  isLogeged = false;
 }
