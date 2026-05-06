import { Injectable } from '@angular/core';
import { Education, Experience, Project, Skill, SocialLink } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  readonly name = 'Luis Torices Fernández';
  readonly title = 'Desarrollador de Software';
  readonly tagline = 'Apasionado por crear aplicaciones web modernas y eficientes.';
  readonly bio = `Soy un desarrollador con experiencia en el desarrollo de aplicaciones web,
    tanto en frontend como en backend. Me gusta aprender nuevas tecnologías y trabajar en equipo
    para crear productos de calidad. Busco nuevos retos donde seguir creciendo profesionalmente.`;
  readonly email = 'luis.babuska@gmail.com';
  readonly location = 'España';
  readonly photoUrl = 'photo.jpg'; // Coloca tu foto en /public/photo.jpg

  readonly socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/NeesaSeregon',
      iconClass: 'fab fa-github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/luis-torices-fernandez-b0a5b7117/?skipRedirect=true',
      iconClass: 'fab fa-linkedin'
    },
    {
      platform: 'Email',
      url: 'mailto:luis.babuska@gmail.com',
      iconClass: 'fas fa-envelope'
    },
    {
      platform: 'Infojobs',
      url: 'https://www.infojobs.net/candidate/cv/view/index.xhtml',
      iconClass: 'fa-address-card'
    }
  ];

  readonly skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 90, category: 'frontend' },
    { name: 'HTML / CSS', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 95, category: 'frontend' },
    { name: 'Bootstrap', level: 60, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    // Backend
    { name: 'Java', level: 75, category: 'backend' },
    { name: 'php', level: 95, category: 'backend' },
    { name: 'Symfony', level: 85, category: 'backend' },
    { name: 'SQL', level: 70, category: 'backend' },
    { name: 'REST APIs', level: 75, category: 'backend' },
    // Tools
    { name: 'Git', level: 80, category: 'tools' },
    { name: 'Docker', level: 55, category: 'tools' },
    { name: 'VS Code', level: 90, category: 'tools' },
    { name: 'GitHub', level: 90, category: 'tools' },
    { name: 'GitLab', level: 80, category: 'tools' },
    { name: 'Jira', level: 60, category: 'tools' },
  ];

  readonly experience: Experience[] = [
    {
      company: 'SERBATIC SISTEMAS TECNOLOGICOS S.L. - VALLADOLID',
      position: 'Desarrollador Junior (Practicas)',
      startDate: 'Septiembre 2024',
      endDate: 'Diciembre 2024',
      description: [
        'Mantenimiento y mejora de aplicaciones existentes.',
        'Participacion en su programa de formacion interno',
        'Colaboración en equipo de desarrollo de una tienda online.'
      ],
      technologies: ['Java', 'SpringBoot', 'HTML', 'CSS', 'MySQL']
    }
  ];

  readonly education: Education[] = [
    {
      institution: 'Universidad / Centro de Estudios',
      degree: 'Grado',
      field: 'Ingeniería Informática',
      startYear: 2017,
      endYear: 2021,
      description: 'Especialización en desarrollo de software y sistemas distribuidos.'
    },
    {
      institution: 'Plataforma Online',
      degree: 'Certificación',
      field: 'Desarrollo Web Full Stack',
      startYear: 2022,
      endYear: 2022,
      description: 'Formación intensiva en tecnologías web modernas.'
    }
  ];

  readonly projects: Project[] = [
    {
      name: 'Este Portfolio',
      description: 'Portfolio personal desarrollado con Angular 18 y Bootstrap 5. Diseño responsive con múltiples secciones.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap'],
      githubUrl: 'https://github.com/',
      featured: true
    },
    {
      name: 'Acortador de Links',
      description: 'Aplicación para acortar URLs, autenticación de usuarios y panel de administración ademas de capacidad de analisis de uso de los links creados.',
      technologies: ['Angular', 'Symfony', 'MySQL', 'Bootstrap', 'TypeScript'],
      githubUrl: 'https://github.com/NeesaSeregon/shortnees',
      liveUrl: 'shortnees.com',
      featured: true
    },
    {
      name: 'Proximamente',
      description: '',
      technologies: [],
      githubUrl: '',
      featured: false
    },
  ];
}
