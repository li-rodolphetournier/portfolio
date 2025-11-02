import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import CVLayout from './components/CVLayout/CVLayout';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'contact',
        'profil',
        'formation',
        'competences',
        'experiences',
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app min-h-screen bg-white">
      <Header />
      <Navigation activeSection={activeSection} />
      <main>
        <CVLayout />
      </main>
    </div>
  );
}

export default App;
