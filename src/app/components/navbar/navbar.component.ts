import { Component, HostListener, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  portfolio = inject(PortfolioService);
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse?.classList.contains('show')) {
      (document.querySelector('.navbar-toggler') as HTMLElement)?.click();
    }
  }
}
