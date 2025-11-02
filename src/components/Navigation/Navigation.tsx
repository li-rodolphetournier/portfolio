import { Link } from 'react-scroll';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const navItems = [
    { id: 'contact', label: 'Contact' },
    { id: 'profil', label: 'Profil' },
    { id: 'formation', label: 'Formation' },
    { id: 'competences', label: 'Compétences' },
    { id: 'experiences', label: 'Expériences' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-center space-x-1 overflow-x-auto py-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={cn(
                  'block px-4 py-2 text-xs font-medium transition-colors cursor-pointer uppercase tracking-wide',
                  'hover:text-black hover:bg-gray-50',
                  activeSection === item.id
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-600'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
