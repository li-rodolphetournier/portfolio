import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const Experiences = () => {
  const { experiences } = cvData;

  return (
    <section id="experiences" className="w-full">
      <motion.h2
        className="text-lg font-bold uppercase mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        EXPÉRIENCES PROFESSIONNELLES
      </motion.h2>
      
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="pb-4 border-b border-gray-200 last:border-b-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start space-x-3 mb-2">
              {/* Empty circle bullet */}
              <div className="w-2.5 h-2.5 rounded-full border-2 border-black mt-0.5 flex-shrink-0"></div>
              
              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-0.5">
                  {experience.title}
                </h3>
                <p className="text-xs font-medium text-gray-800 mb-0.5">
                  {experience.company}
                </p>
                <p className="text-xs text-gray-600 mb-2">{experience.period}</p>
                
                <ul className="space-y-0.5 mb-2">
                  {experience.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-xs flex items-start">
                      <span className="mr-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                {experience.technologies && (
                  <div className="mt-2 pt-2 border-t border-gray-100 space-y-1">
                    <div>
                      <p className="text-xs font-semibold text-gray-600">
                        Environnement technique : {experience.technologies.slice(0, 2).join(', ')}
                      </p>
                    </div>
                    {experience.technologies.length > 2 && (
                      <div>
                        <p className="text-xs font-semibold text-gray-600">
                          Technologies : {experience.technologies.slice(2).join(', ')}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {(experience as any).additionalInfo && (
                  <p className="text-xs mt-2">{(experience as any).additionalInfo}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
