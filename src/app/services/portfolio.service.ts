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
    { name: 'Angular', iconClass: 'devicon-angularjs-plain colored', category: 'frontend' },
    { name: 'HTML / CSS', iconClass: 'devicon-html5-plain colored', category: 'frontend' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored', category: 'frontend' },
    { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored', category: 'frontend' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored', category: 'frontend' },
    // Backend
    { name: 'Java', iconClass: 'devicon-java-plain colored', category: 'backend' },
    { name: 'PHP', iconClass: 'devicon-php-plain colored', category: 'backend' },
    { name: 'Symfony', iconClass: 'devicon-symfony-plain', category: 'backend' },
    { name: 'SQL', iconClass: 'devicon-mysql-plain colored', category: 'backend' },
    { name: 'REST APIs', iconClass: 'fas fa-plug', category: 'backend' },
    // Tools
    { name: 'Git', iconClass: 'devicon-git-plain colored', category: 'tools' },
    { name: 'Docker', iconClass: 'devicon-docker-plain colored', category: 'tools' },
    { name: 'VS Code', iconClass: 'devicon-vscode-plain colored', category: 'tools' },
    { name: 'GitHub', iconClass: 'devicon-github-original', category: 'tools' },
    { name: 'GitLab', iconClass: 'devicon-gitlab-plain colored', category: 'tools' },
    { name: 'Jira', iconClass: 'devicon-jira-plain colored', category: 'tools' },
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
      institution: 'Certiport - Microsoft',
      degree: 'Certificación MS-900',
      field: '365 Fundamentals',
      startYear: 2025,
      endYear: 2025,
      description: 'Conocimientos basicos sobre la nube de Microsoft, sus aplicaciones como Teams, Word y SharePoint y sus servicios de software como servicio (SaaS)'
    },
      {
      institution: 'Certiport - Microsoft',
      degree: 'Certificación AZ-900',
      field: 'Azure Fundamentals',
      startYear: 2025,
      endYear: 2025,
      description: 'Conocimientos basicos sobre servicios en la nube de Microsoft Azure y conceptos generales de computacion en la nube.'
    },
      {
      institution: 'Certiport - Microsoft',
      degree: 'Certificación AI-900',
      field: 'Azure AI Fundamentals',
      startYear: 2025,
      endYear: 2025,
      description: 'Conocimientos basicos sobre conceptos de inteligencia artificial y como se aplican en los servicios en la nube de Microsoft Azure'
    },
      {
      institution: 'Certiport - Microsoft',
      degree: 'Certificación SC-900',
      field: 'Security, Compilance, and Identity Fundamentals',
      startYear: 2025,
      endYear: 2025,
      description: 'Conocimientos basicos sobre identidad, seguridad y cumplimiento normativo en la nube'
    },
    {
      institution: 'C.I.F.P. Camino de la Miranda - Palencia',
      degree: 'Grado superior',
      field: 'Desarrollo de aplicaciones web',
      startYear: 2022,
      endYear: 2024,
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
