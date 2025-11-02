# Plan d'Installation et de Mise en Place - Portfolio

## Vue d'ensemble
Portfolio professionnel en page unique avec scroll vertical et navigation par ancres, basé sur React + Vite + TypeScript, reprenant fidèlement la structure et le contenu du CV.

---

## 1. PRÉREQUIS ET INSTALLATION INITIALE

### 1.1 Vérification des prérequis
```bash
# Vérifier Node.js (version 18+ recommandée)
node --version

# Vérifier npm ou yarn
npm --version
# ou
yarn --version
```

### 1.2 Création du projet
```bash
# Créer le projet avec Vite + React + TypeScript
npm create vite@latest portfolio -- --template react-ts

# Ou avec yarn
yarn create vite portfolio --template react-ts

# Entrer dans le dossier
cd portfolio

# Installer les dépendances
npm install
# ou
yarn install
```

### 1.3 Dépendances supplémentaires recommandées
```bash
# Pour le styling (selon préférence)
npm install styled-components
# OU
npm install @emotion/react @emotion/styled
# OU simplement utiliser CSS Modules / TailwindCSS

# Pour les animations de scroll
npm install react-scroll

# Pour les icônes
npm install react-icons
# ou
npm install @heroicons/react

# Pour le responsive et les animations
npm install framer-motion

# Pour les types (si nécessaire)
npm install --save-dev @types/react-scroll
```

---

## 2. STRUCTURE DU PROJET

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── (images si nécessaire)
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   ├── Navigation/
│   │   │   ├── Navigation.tsx
│   │   │   └── Navigation.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.module.css
│   │   ├── Profil/
│   │   │   ├── Profil.tsx
│   │   │   └── Profil.module.css
│   │   ├── Formation/
│   │   │   ├── Formation.tsx
│   │   │   └── Formation.module.css
│   │   ├── Competences/
│   │   │   ├── Competences.tsx
│   │   │   └── Competences.module.css
│   │   ├── Experiences/
│   │   │   ├── Experiences.tsx
│   │   │   └── Experiences.module.css
│   │   ├── Langues/
│   │   │   ├── Langues.tsx
│   │   │   └── Langues.module.css
│   │   └── CentresInteret/
│   │       ├── CentresInteret.tsx
│   │       └── CentresInteret.module.css
│   ├── data/
│   │   └── cvData.ts
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── reset.css
│   ├── types/
│   │   └── cv.types.ts
│   ├── utils/
│   │   └── scrollTo.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 3. CONFIGURATION DES FICHIERS DE BASE

### 3.1 tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 3.2 vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

---

## 4. DÉFINITION DES TYPES TypeScript

### 4.1 src/types/cv.types.ts
```typescript
export interface Contact {
  phone: string;
  email: string;
  address: string;
  city: string;
}

export interface Formation {
  title: string;
  year: string;
  institution: string;
  type?: string;
}

export interface Competence {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Langue {
  name: string;
  level: string;
}

export interface CVData {
  personal: {
    firstName: string;
    lastName: string;
    initials: string;
    title: string;
    contact: Contact;
    profil: string;
  };
  formations: Formation[];
  competences: Competence[];
  experiences: Experience[];
  langues: Langue[];
  centresInteret: string[];
}
```

---

## 5. DONNÉES DU CV (src/data/cvData.ts)

Extraire et structurer toutes les données du CV PDF dans ce fichier TypeScript.

---

## 6. COMPOSANTS PRINCIPAUX

### 6.1 App.tsx - Structure principale
```typescript
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Profil from './components/Profil/Profil';
import Formation from './components/Formation/Formation';
import Competences from './components/Competences/Competences';
import Experiences from './components/Experiences/Experiences';
import Langues from './components/Langues/Langues';
import CentresInteret from './components/CentresInteret/CentresInteret';
import './styles/globals.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'contact', 'profil', 'formation', 'competences', 'experiences', 'langues', 'centres-interet'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        <section id="profil">
          <Profil />
        </section>
        
        <section id="formation">
          <Formation />
        </section>
        
        <section id="competences">
          <Competences />
        </section>
        
        <section id="experiences">
          <Experiences />
        </section>
        
        <section id="langues">
          <Langues />
        </section>
        
        <section id="centres-interet">
          <CentresInteret />
        </section>
      </main>
    </div>
  );
}

export default App;
```

### 6.2 Navigation.tsx - Barre de navigation fixe
```typescript
import { Link } from 'react-scroll';
import './Navigation.module.css';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'contact', label: 'Contact' },
    { id: 'profil', label: 'Profil' },
    { id: 'formation', label: 'Formation' },
    { id: 'competences', label: 'Compétences' },
    { id: 'experiences', label: 'Expériences' },
    { id: 'langues', label: 'Langues' },
    { id: 'centres-interet', label: 'Centres d\'intérêt' }
  ];

  return (
    <nav className="navigation">
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
```

### 6.3 Hero.tsx - Section d'accueil
```typescript
import { cvData } from '../../data/cvData';
import './Hero.module.css';

const Hero = () => {
  const { personal } = cvData;

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="initials">{personal.initials}</h1>
        <h2 className="first-name">{personal.firstName}</h2>
        <h3 className="last-name">{personal.lastName}</h3>
        <p className="title">{personal.title}</p>
      </div>
    </div>
  );
};

export default Hero;
```

---

## 7. STYLES ET DESIGN

### 7.1 Theme minimaliste noir et blanc
- **Couleurs principales :**
  - Fond : Blanc (#FFFFFF)
  - Texte : Noir (#000000)
  - Accents : Gris (#333333, #666666, #999999)

### 7.2 src/styles/variables.css
```css
:root {
  --color-primary: #000000;
  --color-secondary: #ffffff;
  --color-accent: #333333;
  --color-text-light: #666666;
  --color-text-lighter: #999999;
  
  --font-primary: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-heading: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  
  --max-width: 1200px;
  --section-padding: 5rem 2rem;
  
  --transition: all 0.3s ease;
}
```

### 7.3 src/styles/globals.css
```css
@import './variables.css';
@import './reset.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  color: var(--color-primary);
  background-color: var(--color-secondary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

section {
  min-height: 100vh;
  padding: var(--section-padding);
  max-width: var(--max-width);
  margin: 0 auto;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

h1 { font-size: 3rem; }
h2 { font-size: 2.5rem; }
h3 { font-size: 2rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

p {
  margin-bottom: var(--spacing-sm);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 768px) {
  :root {
    --section-padding: 3rem 1rem;
  }
  
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }
}
```

---

## 8. FONCTIONNALITÉS DE NAVIGATION

### 8.1 Scroll smooth avec ancres
- Utiliser `react-scroll` pour la navigation fluide
- Navigation fixe en haut avec highlight de la section active
- Offset pour compenser la hauteur du header

### 8.2 Détection de la section active
- `Intersection Observer` ou calcul basé sur `scrollY`
- Mise à jour du style de la navigation selon la section visible

---

## 9. SECTIONS À IMPLÉMENTER

### 9.1 Ordre des sections (de haut en bas) :
1. **Hero** - Initiales, nom, prénom, titre
2. **Contact** - Téléphone, email, adresse
3. **Profil** - Description professionnelle
4. **Formation** - Liste des formations avec dates
5. **Compétences** - Groupées par catégories
6. **Expériences Professionnelles** - Avec dates, descriptions, technologies
7. **Langues** - Avec niveaux
8. **Centres d'intérêt** - Liste

---

## 10. RESPONSIVE DESIGN

- **Mobile First** : Concevoir d'abord pour mobile
- **Breakpoints** :
  - Mobile : < 768px
  - Tablet : 768px - 1024px
  - Desktop : > 1024px
- Navigation mobile : Menu hamburger si nécessaire

---

## 11. OPTIMISATIONS ET AMÉLIORATIONS

### 11.1 Performance
- Lazy loading des sections si nécessaire
- Optimisation des images
- Code splitting avec React.lazy()

### 11.2 SEO
- Meta tags dans `index.html`
- Structure sémantique HTML5
- Accessibilité (ARIA labels)

### 11.3 Accessibilité
- Navigation au clavier
- Contraste suffisant (noir/blanc)
- Labels ARIA
- Focus visible

---

## 12. COMMANDES DE DÉVELOPPEMENT

```bash
# Démarrer le serveur de développement
npm run dev
# ou
yarn dev

# Build de production
npm run build
# ou
yarn build

# Prévisualiser le build
npm run preview
# ou
yarn preview

# Linter
npm run lint
# ou
yarn lint
```

---

## 13. ÉTAPES DE MISE EN ŒUVRE (Checklist)

- [ ] Créer le projet Vite + React + TypeScript
- [ ] Installer les dépendances de base
- [ ] Configurer TypeScript et Vite
- [ ] Créer la structure de dossiers
- [ ] Définir les types TypeScript
- [ ] Extraire et structurer les données du CV
- [ ] Créer les composants de base (Header, Navigation)
- [ ] Implémenter la navigation avec ancres
- [ ] Créer le composant Hero
- [ ] Créer la section Contact
- [ ] Créer la section Profil
- [ ] Créer la section Formation
- [ ] Créer la section Compétences
- [ ] Créer la section Expériences
- [ ] Créer la section Langues
- [ ] Créer la section Centres d'intérêt
- [ ] Appliquer le styling minimaliste noir et blanc
- [ ] Implémenter le scroll smooth
- [ ] Ajouter la détection de section active
- [ ] Tester le responsive (mobile, tablette, desktop)
- [ ] Optimiser les performances
- [ ] Vérifier l'accessibilité
- [ ] Tester la navigation au clavier
- [ ] Build de production
- [ ] Déploiement (Netlify, Vercel, GitHub Pages, etc.)

---

## 14. DÉPLOIEMENT

### 14.1 Préparation
```bash
npm run build
```

### 14.2 Options de déploiement
- **Netlify** : Glisser-déposer le dossier `dist`
- **Vercel** : `vercel --prod`
- **GitHub Pages** : Configurer GitHub Actions
- **Autre** : Upload du dossier `dist` sur votre hébergeur

---

## 15. NOTES IMPORTANTES

- Respecter le style minimaliste noir et blanc du CV
- Maintenir la cohérence visuelle avec le document PDF
- S'assurer que toutes les informations du CV sont présentes
- Tester sur différents navigateurs (Chrome, Firefox, Safari, Edge)
- Optimiser pour les performances (Lighthouse score > 90)

---

**Date de création** : 2025
**Version** : 1.0
