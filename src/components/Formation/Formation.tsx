import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const Formation = () => {
  const { formations } = cvData;

  return (
    <section id="formation" className="w-full">
      <motion.h2
        className="text-lg font-bold uppercase mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        FORMATION
      </motion.h2>
      
      <div className="space-y-4">
        {formations.map((formation, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-3 pb-4 border-b border-gray-200 last:border-b-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Empty circle bullet */}
            <div className="w-2.5 h-2.5 rounded-full border-2 border-black mt-1.5 flex-shrink-0"></div>
            
            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-0.5">
                {formation.title}
              </h3>
              <p className="text-xs text-gray-700 mb-0.5">{formation.year}</p>
              <p className="text-xs">{formation.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Formation;
