import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ScrollService } from '../../services/scroll.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  portfolio = inject(PortfolioService);
  i18n = inject(TranslationService);
  private scroll = inject(ScrollService);

  scrollTo(sectionId: string) {
    this.scroll.toSection(sectionId);
  }
}
