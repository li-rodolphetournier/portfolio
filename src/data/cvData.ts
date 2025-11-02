import type { CVData } from '@/types/cv.types';

export const cvData: CVData = {
  personal: {
    firstName: 'RODOLPHE',
    lastName: 'TOURNIER',
    initials: 'RT',
    title: 'DÉVELOPPEUR FULL-STACK',
    contact: {
      phone: 'No number',
      email: 'mail',
      address: 'adresse',
      city: 'Ville',
    },
    profil: `Passionné par le web depuis plus de 25 ans, j'ai évolué du design à l'intégration aux développement front puis au développement full-stack. Mon parcours m'a permis de collaborer avec de grands groupes (AVIV, Accord, Meetic, L'Occitane, Microsoft) et d'affiner mon expertise en React, accessibilité et performance. J'aime créer des interfaces élégantes, accessibles et centrées sur l'utilisateur, et je cultive une curiosité constante pour apprendre et adopter les outils du futur.`,
  },
  formations: [
    {
      title: 'CONCEPTEUR DÉVELOPPEUR D\'APPLICATIONS',
      year: '2025',
      institution: 'École Wild Code School',
    },
    {
      title: 'FORMATION DEV FRONT',
      year: '2016 / 2011 / 2007',
      institution: 'SFEIR / FzI / IFOCOP',
    },
    {
      title: 'INTÉGRATEUR DESIGNER FRONT',
      year: '2001',
      institution: 'Ecole MJM',
    },
  ],
  competences: [
    {
      category: 'Langages & Frameworks',
      items: [
        'React',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Sass',
        'Less',
        'TailwindCSS',
        'GraphQL',
      ],
    },
    {
      category: 'Outils & Environnements',
      items: [
        'Git',
        'Jira',
        'Confluence',
        'Vite',
        'Webpack',
        'Visual Studio Code',
        'Utilisation d\'outils d\'IA pour améliorer la productivité',
        'Automatiser les tests répétitifs',
        'Optimiser le développement',
      ],
    },
    {
      category: 'Accessibilité & Performance',
      items: [
        'Audit WCAG/W3C',
        'Optimisation Lighthouse',
        'Responsive Design',
        'SEO technique',
      ],
    },
    {
      category: 'Méthodologies & Collaboration',
      items: [
        'Agile / Scrum',
        'Code Review',
        'CI/CD',
        'Documentation technique',
        'Travail en équipe produit',
      ],
    },
    {
      category: 'Design & UX',
      items: [
        'Design system',
        'UI responsive',
        'Collaboration avec designers',
        'Sensibilité ergonomique',
      ],
    },
  ],
  experiences: [
    {
      title: 'DÉVELOPPEUR FRONT',
      company: 'AVIV GROUP (Seloger, Logic-Immo, MeilleursAgents, Immonet, ImmoWeb)',
      period: '2017 - 2025',
      description: [
        'Participation au développement et à l\'évolution des sites du groupe (Seloger, Logic-Immo, projets white-label internationaux)',
        'Ajout de nouvelles fonctionnalités front-end, intégration et maintenance des plateformes',
        'Réalisation d\'audits d\'accessibilité et de performance, correction de bugs et amélioration continue de l\'expérience utilisateur',
      ],
    },
    {
      title: 'DÉVELOPPEUR FRONT-END',
      company: 'ACCOR',
      period: '2016',
      description: [
        'Intégration de templates front-end HTML5/CSS3 sous environnement Java',
        'Intégration des maquettes PSD avec les spécifications fonctionnelles',
        'Gestion du wording multilingue et corrections des pages existantes',
      ],
    },
    {
      title: 'DÉVELOPPEUR FRONT-END',
      company: 'DIAPASON (MISSIONS ESN)',
      period: '2015',
      description: [
        'Meetic (6 mois) - Intégration front-end / site international',
      ],
      technologies: ['Symfony 2', 'Twig', 'HTML5', 'CSS3', 'Git', 'Jira'],
    },
    {
      title: 'DÉVELOPPEUR FRONT-END',
      company: 'INFOGÈNE, WAPP6, L\'OCCITANE',
      period: '2013-2015',
      description: [
        'Intégrations front-end',
      ],
      technologies: ['Symfony 2', 'Django/Python', 'HTML5', 'CSS3', 'Sass/Less', 'Bootstrap', 'Twig'],
      additionalInfo: 'Optimisations et corrections des pages web multilingue.',
    },
    {
      title: 'INTÉGRATEUR WEB ANALYTICS',
      company: 'CELLFISH',
      period: '2013-2015',
      description: [
        'Mise en place et optimisation du tracking (Google Analytics, GTM)',
        'Implémentation tracking client-side et server-side (C2S/S2S)',
        'Déploiement multi-pays et configuration d\'objectifs personnalisés',
        'Analyse de parcours utilisateurs web et mobile responsive',
      ],
      technologies: ['Google Analytics', 'GTM', 'Splunk', 'JSON', 'Jira', 'Confluence'],
    },
    {
      title: 'INTÉGRATEUR WEB',
      company: 'IPANEMA / MICROSOFT',
      period: '2013-2015',
      description: [
        'Intégrations front-end variées',
      ],
    },
  ],
  langues: [
    { name: 'Français', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'Courant (expérience pro internationale)' },
    { name: 'Japonais', level: 'Notions' },
  ],
  centresInteret: [
    'Dessin',
    'Voyages',
    'Mangas',
    'Jeux-vidéo',
    'Sports',
    'Cuisine',
  ],
};

