import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  portfolio = inject(PortfolioService);

  readonly categories: { key: Skill['category']; label: string }[] = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'tools', label: 'Herramientas' },
    { key: 'other', label: 'Otros' },
  ];

  skillsByCategory(category: Skill['category']): Skill[] {
    return this.portfolio.skills.filter(s => s.category === category);
  }

  hasCategory(category: Skill['category']): boolean {
    return this.portfolio.skills.some(s => s.category === category);
  }
}
