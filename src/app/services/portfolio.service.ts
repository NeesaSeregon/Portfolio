import { Injectable } from '@angular/core';
import { Education, Experience, Project, Skill, SocialLink } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  readonly name = 'Luis Torices';
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
      url: 'https://github.com/',
      iconClass: 'fab fa-github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/',
      iconClass: 'fab fa-linkedin'
    },
    {
      platform: 'Email',
      url: 'mailto:luis.babuska@gmail.com',
      iconClass: 'fas fa-envelope'
    }
  ];

  readonly skills: Skill[] = [
    // Frontend
    { name: 'Angular', level: 70, category: 'frontend' },
    { name: 'HTML / CSS', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 70, category: 'frontend' },
    { name: 'Bootstrap', level: 80, category: 'frontend' },
    // Backend
    { name: 'Java', level: 75, category: 'backend' },
    { name: 'Spring Boot', level: 65, category: 'backend' },
    { name: 'SQL', level: 70, category: 'backend' },
    { name: 'REST APIs', level: 75, category: 'backend' },
    // Tools
    { name: 'Git', level: 80, category: 'tools' },
    { name: 'Docker', level: 55, category: 'tools' },
    { name: 'VS Code', level: 90, category: 'tools' },
  ];

  readonly experience: Experience[] = [
    {
      company: 'Empresa Ejemplo S.L.',
      position: 'Desarrollador Full Stack',
      startDate: 'Enero 2023',
      endDate: null,
      description: [
        'Desarrollo de aplicaciones web con Angular y Spring Boot.',
        'Diseño e implementación de APIs REST.',
        'Participación en sprints ágiles y revisiones de código.'
      ],
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker']
    },
    {
      company: 'Otra Empresa S.A.',
      position: 'Desarrollador Junior',
      startDate: 'Junio 2021',
      endDate: 'Diciembre 2022',
      description: [
        'Mantenimiento y mejora de aplicaciones existentes.',
        'Corrección de errores y optimización de rendimiento.',
        'Colaboración en el equipo de desarrollo frontend.'
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'MySQL']
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
      name: 'Proyecto E-Commerce',
      description: 'Aplicación de tienda online con carrito de compras, autenticación de usuarios y panel de administración.',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/',
      liveUrl: '',
      featured: true
    },
    {
      name: 'API REST de Tareas',
      description: 'API RESTful para gestión de tareas con autenticación JWT, roles de usuario y documentación Swagger.',
      technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/',
      featured: false
    },
    {
      name: 'App del Tiempo',
      description: 'Aplicación de consulta meteorológica que consume una API externa y muestra previsiones con gráficas.',
      technologies: ['Angular', 'TypeScript', 'Chart.js'],
      githubUrl: 'https://github.com/',
      liveUrl: '',
      featured: false
    }
  ];
}
