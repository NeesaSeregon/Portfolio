import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  portfolio = inject(PortfolioService);
  i18n = inject(TranslationService);

  /**
   * Periodo del puesto solo con años. Si empieza y termina el mismo año se
   * muestra uno solo, para no escribir "2024 — 2024".
   */
  period(index: number): string {
    const job = this.i18n.t().experience.jobs[index];
    const start = this.year(job.startDate);
    const end = job.endDate ? this.year(job.endDate) : this.i18n.t().experience.present;
    return start === end ? start : `${start} — ${end}`;
  }

  private year(value: string): string {
    return value.match(/\d{4}/)?.[0] ?? value;
  }
}
