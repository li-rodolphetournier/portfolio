import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const Langues = () => {
  const { langues } = cvData;

  return (
    <section id="langues" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          LANGUES
        </motion.h2>
        <div className="space-y-6">
          {langues.map((langue, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-4 border-b border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-lg font-semibold">{langue.name}</span>
              <span className="text-gray-600">{langue.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Langues;

