import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Card } from "../../components/share/card/card";
import { CommentBox } from "../../components/comment-box/comment-box";

@Component({
  selector: 'app-defers',
  imports: [
    ProductCard,
    CommentBox
],
  templateUrl: './defers.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Defers {
 }
