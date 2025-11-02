import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const Competences = () => {
  const { competences } = cvData;

  return (
    <section id="competences" className="w-full">
      <motion.h2
        className="text-lg font-bold uppercase mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        COMPÉTENCES
      </motion.h2>
      
      <div className="space-y-4">
        {competences.map((competence, index) => (
          <motion.div
            key={index}
            className="pb-4 border-b border-gray-200 last:border-b-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start space-x-3 mb-2">
              {/* Empty circle bullet */}
              <div className="w-2.5 h-2.5 rounded-full border-2 border-black mt-0.5 flex-shrink-0"></div>
              <h3 className="text-sm font-semibold">
                {competence.category}
              </h3>
            </div>
            
            <ul className="ml-6 space-y-0.5">
              {competence.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-xs flex items-start">
                  <span className="mr-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Competences;
