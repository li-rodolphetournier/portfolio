import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const Hero = () => {
  const { personal } = cvData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personal.initials}
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {personal.firstName}
          </motion.h2>
          <motion.h3
            className="text-4xl md:text-5xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {personal.lastName}
          </motion.h3>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 uppercase tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {personal.title}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

