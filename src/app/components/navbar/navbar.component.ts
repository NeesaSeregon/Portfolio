import { Component, HostListener, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ScrollService } from '../../services/scroll.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  portfolio = inject(PortfolioService);
  i18n = inject(TranslationService);
  private scroll = inject(ScrollService);
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(sectionId: string) {
    // Primero se cierra el menú desplegable y después se desplaza: al revés,
    // el layout cambiaba a mitad del recorrido y el scroll se quedaba corto.
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse?.classList.contains('show')) {
      (document.querySelector('.navbar-toggler') as HTMLElement)?.click();
    }
    this.scroll.toSection(sectionId);
  }
}
