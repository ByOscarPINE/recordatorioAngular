import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  imports: [],
  template: `
  <div class="comment-box w-full max-w-2xl mx-auto">
    <div class="comment-input-row">
      <img class="avatar" src="https://www.gravatar.com/avatar/?d=mp&s=48" alt="avatar" />
      <div class="input-area">
        <textarea placeholder="Añade un comentario público..." class="comment-textarea" rows="3"></textarea>
        <div class="controls">
          <div class="hint">Los comentarios respetuosos y constructivos ayudan a la comunidad</div>
          <div class="buttons">
            <button class="btn cancel">CANCELAR</button>
            <button class="btn publish">COMENTAR</button>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="example-comment">
      <img class="avatar-sm" src="https://www.gravatar.com/avatar/?d=mp&s=36" alt="avatar" />
      <div class="comment-body">
        <div class="meta"><span class="author">UsuarioEjemplo</span> <span class="time">hace 2 horas</span></div>
        <div class="text">Este es un ejemplo de comentario. Así se vería en la lista de comentarios.</div>
        <div class="actions">Me gusta · Responder · 3 respuestas</div>
      </div>
    </div>
  </div>
  `,
  styles: `
    :host { display:block; }

    .comment-box { background: #fff; border-radius: 8px; padding: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); max-width: 800px; }
    .comment-input-row { display:flex; gap:12px; }
    .avatar { width:40px; height:40px; border-radius:50%; }
    .input-area { flex:1; }
    .comment-textarea { width:100%; border:1px solid #e5e7eb; border-radius:8px; padding:10px; resize:vertical; font-size:14px; font-family: inherit; }
    .controls { display:flex; justify-content:space-between; align-items:center; margin-top:8px; }
    .hint { color:#6b7280; font-size:12px; }
    .buttons { display:flex; gap:8px; }
    .btn { padding:6px 12px; border-radius:4px; font-weight:600; font-size:13px; cursor:default; }
    .btn.cancel { background:transparent; color:#374151; border:1px solid transparent; }
    .btn.publish { background:#065f46; color:#fff; }

    .divider { height:1px; background:#f3f4f6; margin:12px 0; }

    .example-comment { display:flex; gap:10px; align-items:flex-start; }
    .avatar-sm { width:32px; height:32px; border-radius:50%; }
    .comment-body { background:transparent; }
    .meta { font-size:13px; color:#111827; margin-bottom:4px; }
    .author { font-weight:600; margin-right:6px; }
    .time { color:#6b7280; font-size:12px; }
    .text { color:#111827; margin-bottom:6px; }
    .actions { color:#6b7280; font-size:13px; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentBox {
    constructor() {
    console.log('CommentBox component initialized');
  }
 }