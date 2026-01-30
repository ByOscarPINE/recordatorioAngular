import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cupon-card',
  imports: [],
  template: `
  <div class="coupon">
    <div class="coupon-left">
      <div class="badge">{{ discountPercentage }}%</div>
      <h3 class="title">{{ name }}</h3>
      <p class="desc">Descuento en tu próxima compra. Válido una vez por usuario.</p>
      <div class="code-box"><span class="code">SAVINGS50</span></div>
    </div>

    <div class="coupon-sep" aria-hidden></div>

    <div class="coupon-right">
      <div class="meta">Vence: <span class="expiry">{{ expiryDate }}</span></div>
      <button class="btn-use">Usar Cupón</button>
      <div class="small-note">* Aplican términos y condiciones</div>
    </div>
  </div>
  `,
  styles: `
    :host { display:block; }
    .coupon { display:flex; align-items:stretch; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 6px 18px rgba(16,24,40,0.08); max-width:720px; }

    /* Left panel */
    .coupon-left { flex:1.6; padding:20px; background: linear-gradient(135deg,#064e3b 0%, #047857 100%); color:#fff; display:flex; flex-direction:column; gap:12px; }
    .badge { background:rgba(255,255,255,0.12); padding:6px 10px; border-radius:999px; font-weight:700; width:max-content; }
    .title { margin:0; font-size:20px; font-weight:700; }
    .desc { margin:0; color:rgba(255,255,255,0.92); font-size:14px; }
    .code-box { margin-top:8px; background:rgba(0,0,0,0.08); padding:8px 12px; border-radius:8px; display:inline-block; }
    .code { font-weight:800; letter-spacing:1px; }

    /* Separator that emulates perforation */
    .coupon-sep { width:1px; background:linear-gradient(#e5e7eb 0%, #e5e7eb 100%); position:relative; }
    .coupon-sep::before { content:""; position:absolute; left:50%; top:6px; bottom:6px; width:1px; transform:translateX(-50%); background-image: linear-gradient(#f9fafb 0 33%, rgba(0,0,0,0) 0 66%); background-size:2px 8px; }

    /* Right panel */
    .coupon-right { flex:1; padding:18px; display:flex; flex-direction:column; justify-content:center; gap:10px; background:#f8fafc; }
    .meta { color:#374151; font-size:13px; }
    .expiry { font-weight:700; }
    .btn-use { background:#111827; color:#fff; border:none; padding:10px 14px; border-radius:8px; font-weight:700; cursor:pointer; }
    .btn-use:hover { background:#0f172a; }
    .small-note { color:#6b7280; font-size:12px; }

    /* Responsive */
    @media (max-width:640px) {
      .coupon { flex-direction:column; }
      .coupon-sep { display:none; }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuponCard { 
  constructor() {
    console.log('CuponCard component initialized'); 
  }
  @Input() name: string = '';  
  @Input() discountPercentage: number = 50;
  @Input() expiryDate: string = '';  
}
