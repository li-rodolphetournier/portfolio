import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const CentresInteret = () => {
  const { centresInteret } = cvData;

  return (
    <section id="centres-interet" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          CENTRES D'INTÉRÊT
        </motion.h2>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {centresInteret.map((interet, index) => (
            <motion.span
              key={index}
              className="px-6 py-3 bg-gray-100 text-gray-800 text-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {interet}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CentresInteret;

