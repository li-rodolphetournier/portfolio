import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const Profil = () => {
  const { profil } = cvData.personal;

  return (
    <section id="profil" className="w-full">
      <motion.h2
        className="text-lg font-bold uppercase mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        PROFIL
      </motion.h2>
      
      <motion.p
        className="text-sm leading-relaxed text-justify"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {profil}
      </motion.p>
    </section>
  );
};

export default Profil;
