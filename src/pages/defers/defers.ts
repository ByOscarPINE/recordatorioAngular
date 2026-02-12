import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Card } from "../../components/share/card/card";
import { CommentBox } from "../../components/comment-box/comment-box";
import { CuponCard } from "../../components/cupon-card/cupon-card";
import { Banner } from "../../components/banner/banner";
import { Register } from "../../components/register/register";

interface Cupon {
  name: string;
  discountPercentage: number;
  expiryDate: string;
}
@Component({
  selector: 'app-defers',
  imports: [
    ProductCard,
    CommentBox,
    CuponCard,
    Banner,
    Register
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
  isPremium = false;
  cupones: Cupon[] = [
  { name: 'Cupón Especial', discountPercentage: 50, expiryDate: '28 Feb 2026' },
  { name: 'Descuento Verano', discountPercentage: 30, expiryDate: '31 Ago 2024' },
]
  cuponesPremium: Cupon[] = [
  { name: 'Cupón VIP', discountPercentage: 70, expiryDate: '31 Dic 2024' },
  { name: 'Descuento Exclusivo', discountPercentage: 60, expiryDate: '30 Nov 2024' },
]

 }
