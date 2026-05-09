import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslationService } from '../../services/translation.service';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  portfolio = inject(PortfolioService);
  i18n = inject(TranslationService);

  readonly categoryKeys: Skill['category'][] = ['frontend', 'backend', 'tools', 'other'];

  skillsByCategory(category: Skill['category']): Skill[] {
    return this.portfolio.skills.filter(s => s.category === category);
  }

  hasCategory(category: Skill['category']): boolean {
    return this.portfolio.skills.some(s => s.category === category);
  }
}
