import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

const Contact = () => {
  const { contact } = cvData.personal;

  return (
    <section id="contact" className="w-full">
      <motion.h2
        className="text-lg font-bold uppercase mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        CONTACT
      </motion.h2>
      
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-sm">{contact.phone}</div>
        <div className="text-sm">{contact.email}</div>
        <div className="text-sm">{contact.address}</div>
        <div className="text-sm">{contact.city}</div>
      </motion.div>
    </section>
  );
};

export default Contact;
