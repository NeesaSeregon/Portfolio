import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'es' | 'en';

const TRANSLATIONS = {
  es: {
    lang_toggle: 'EN',
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      education: 'Formación',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      cta_projects: 'Ver proyectos',
      cta_contact: 'Contactar',
    },
    portfolio: {
      title: 'Desarrollador de Aplicaciones Web',
      tagline: 'Entusiasta de la tecnología y el software cuya meta personal es la elaboración de aplicaciones web modernas y eficientes.',
      bio: 'Soy un desarrollador con experiencia en proyectos de desarrollo de aplicaciones web, tanto frontend como backend. Disfruto aprendiendo sobre nuevas tecnologías con el objetivo de crear productos de calidad. En lo personal, soy una persona extrovertida y sociable que valora el trabajo en equipo y el factor humano. Busco nuevos retos profesionales con los que poder crecer y alcanzar nuevas cotas.',
      location: 'España',
    },
    about: {
      section: 'Sobre mí',
    },
    skills: {
      section: 'Habilidades',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Herramientas',
        other: 'Otros',
      },
    },
    experience: {
      section: 'Experiencia',
      present: 'Actualidad',
      jobs: [
        {
          position: 'Desarrollador Junior (Prácticas)',
          startDate: 'Septiembre 2024',
          endDate: 'Diciembre 2024' as string | null,
          description: [
            'Mantenimiento y mejora de aplicaciones existentes.',
            'Participación en su programa de formación interno.',
            'Colaboración en equipo de desarrollo de una tienda online.',
          ],
        },
      ],
    },
    education: {
      section: 'Formación',
      connector: 'en',
      present: 'Actualidad',
      entries: [
        {
          degree: 'Certificación MS-900',
          field: '365 Fundamentals',
          description: 'Conocimientos básicos sobre la nube de Microsoft, sus aplicaciones como Teams, Word y SharePoint y sus servicios de software como servicio (SaaS).',
        },
        {
          degree: 'Certificación AZ-900',
          field: 'Azure Fundamentals',
          description: 'Conocimientos básicos sobre servicios en la nube de Microsoft Azure y conceptos generales de computación en la nube.',
        },
        {
          degree: 'Certificación AI-900',
          field: 'Azure AI Fundamentals',
          description: 'Conocimientos básicos sobre conceptos de inteligencia artificial y cómo se aplican en los servicios en la nube de Microsoft Azure.',
        },
        {
          degree: 'Certificación SC-900',
          field: 'Security, Compliance, and Identity Fundamentals',
          description: 'Conocimientos básicos sobre identidad, seguridad y cumplimiento normativo en la nube.',
        },
        {
          degree: 'Grado Superior',
          field: 'Desarrollo de Aplicaciones Web',
          description: 'Formación intensiva en tecnologías web modernas.',
        },
      ],
    },
    projects: {
      section: 'Proyectos',
      featured: 'Destacado',
      items: [
        {
          name: 'Este Portfolio',
          description: 'Portfolio personal desarrollado con Angular 18 y Bootstrap 5. Diseño responsive con múltiples secciones.',
        },
        {
          name: 'Acortador de Links',
          description: 'Aplicación para acortar URLs, autenticación de usuarios y panel de administración además de capacidad de análisis de uso de los links creados.',
        },
      ],
    },
    contact: {
      section: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
      info_title: 'Información de contacto',
      location_label: 'Ubicación',
      socials_title: 'Redes sociales',
      form_title: 'Envíame un mensaje',
      name_label: 'Nombre',
      name_placeholder: 'Tu nombre',
      name_error: 'Introduce tu nombre.',
      email_placeholder: 'tu@email.com',
      email_error: 'Introduce un email válido.',
      message_label: 'Mensaje',
      message_placeholder: 'Cuéntame sobre tu proyecto...',
      message_error: 'El mensaje debe tener al menos 10 caracteres.',
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Te responderé lo antes posible.',
      error: 'Ha ocurrido un error. Inténtalo de nuevo o escríbeme directamente.',
    },
    footer: 'Desarrollado con Angular & Bootstrap',
  },
  en: {
    lang_toggle: 'ES',
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      cta_projects: 'View projects',
      cta_contact: 'Contact me',
    },
    portfolio: {
      title: 'Web Application Developer',
      tagline: 'Technology and software enthusiast whose personal goal is to build modern and efficient web applications.',
      bio: 'I am a developer with experience in web application development projects, both frontend and backend. I enjoy learning about new technologies with the goal of creating quality products. On a personal level, I am an outgoing and sociable person who values teamwork and the human factor. I am looking for new professional challenges to grow and reach new heights.',
      location: 'Spain',
    },
    about: {
      section: 'About me',
    },
    skills: {
      section: 'Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools',
        other: 'Other',
      },
    },
    experience: {
      section: 'Experience',
      present: 'Present',
      jobs: [
        {
          position: 'Junior Developer (Internship)',
          startDate: 'September 2024',
          endDate: 'December 2024' as string | null,
          description: [
            'Maintenance and improvement of existing applications.',
            'Participation in the internal training program.',
            'Team collaboration on the development of an online store.',
          ],
        },
      ],
    },
    education: {
      section: 'Education',
      connector: 'in',
      present: 'Present',
      entries: [
        {
          degree: 'MS-900 Certification',
          field: '365 Fundamentals',
          description: "Basic knowledge of Microsoft's cloud, its applications such as Teams, Word and SharePoint, and its software-as-a-service (SaaS) services.",
        },
        {
          degree: 'AZ-900 Certification',
          field: 'Azure Fundamentals',
          description: 'Basic knowledge of Microsoft Azure cloud services and general cloud computing concepts.',
        },
        {
          degree: 'AI-900 Certification',
          field: 'Azure AI Fundamentals',
          description: 'Basic knowledge of artificial intelligence concepts and how they are applied in Microsoft Azure cloud services.',
        },
        {
          degree: 'SC-900 Certification',
          field: 'Security, Compliance, and Identity Fundamentals',
          description: 'Basic knowledge of identity, security, and compliance in the cloud.',
        },
        {
          degree: 'Higher Degree',
          field: 'Web Application Development',
          description: 'Intensive training in modern web technologies.',
        },
      ],
    },
    projects: {
      section: 'Projects',
      featured: 'Featured',
      items: [
        {
          name: 'This Portfolio',
          description: 'Personal portfolio built with Angular 18 and Bootstrap 5. Responsive design with multiple sections.',
        },
        {
          name: 'Link Shortener',
          description: 'Application for shortening URLs, user authentication and admin panel, as well as usage analytics for created links.',
        },
      ],
    },
    contact: {
      section: 'Contact',
      subtitle: "Have a project in mind? Let's talk!",
      info_title: 'Contact information',
      location_label: 'Location',
      socials_title: 'Social media',
      form_title: 'Send me a message',
      name_label: 'Name',
      name_placeholder: 'Your name',
      name_error: 'Please enter your name.',
      email_placeholder: 'you@email.com',
      email_error: 'Please enter a valid email.',
      message_label: 'Message',
      message_placeholder: 'Tell me about your project...',
      message_error: 'Message must be at least 10 characters.',
      submit: 'Send message',
      sending: 'Sending...',
      success: "Message sent! I'll get back to you as soon as possible.",
      error: 'An error occurred. Please try again or contact me directly.',
    },
    footer: 'Built with Angular & Bootstrap',
  },
} as const;

export type Translations = typeof TRANSLATIONS.es;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly lang = signal<Lang>('es');
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  toggle() {
    this.lang.set(this.lang() === 'es' ? 'en' : 'es');
  }
}
