import { Injectable } from '@angular/core';

/**
 * Desplazamiento entre secciones.
 *
 * El offset bajo la barra fija lo resuelve `scroll-margin-top` en styles.css,
 * no un cálculo manual: así no depende de la altura de la barra, que cambia
 * al hacer scroll.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {

  toSection(sectionId: string) {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }
    // Se espera al siguiente frame para que cualquier cambio de layout previo
    // (por ejemplo el cierre del menú móvil) ya esté aplicado antes de calcular
    // la posición de destino.
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: this.behavior(), block: 'start' });
    });
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: this.behavior() });
  }

  private behavior(): ScrollBehavior {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }
}
