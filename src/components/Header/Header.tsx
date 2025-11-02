import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const Header = () => {
  const { personal } = cvData;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white border-b border-black"
    >
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-start justify-between">
          {/* Left: Name and Title */}
          <div className="relative flex-1">
            {/* Initiales RT en décoration typographique - en arrière-plan */}
            <div 
              className="absolute -left-4 -top-8 text-[300px] leading-none text-black pointer-events-none select-none opacity-10"
              style={{ 
                fontFamily: "'Brittany Signature', 'Brittany', 'Brush Script MT', 'Lucida Handwriting', cursive",
                zIndex: 0,
                fontWeight: 'normal',
                fontStyle: 'normal'
              }}
            >
              {personal.initials}
            </div>
            
            {/* Name - au premier plan */}
            <div className="relative z-10">
              <motion.h1
                className="text-7xl font-bold uppercase tracking-tighter leading-none mb-1 relative z-20"
                style={{ fontFamily: 'sans-serif', letterSpacing: '-0.02em' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {personal.firstName}
              </motion.h1>
              <motion.h2
                className="text-7xl font-bold uppercase tracking-tighter leading-none mb-4 relative z-20"
                style={{ fontFamily: 'sans-serif', letterSpacing: '-0.02em' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {personal.lastName}
              </motion.h2>
              
              {/* Vertical line separator */}
              <div className="w-px h-10 bg-black my-4 relative z-20"></div>
              
              <motion.p
                className="text-base uppercase tracking-wider font-semibold relative z-20"
                style={{ fontFamily: 'sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {personal.title}
              </motion.p>
            </div>
          </div>

          {/* Right: Profile Picture */}
          <div className="relative ml-8">
            {/* Profile Picture - Circular */}
            <div className="w-32 h-32 rounded-full border-2 border-black overflow-hidden">
              <img 
                src="/profile-photo.jpg" 
                alt="Rodolphe Tournier" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
