import Contact from '../Contact/Contact';
import Profil from '../Profil/Profil';
import Formation from '../Formation/Formation';
import Competences from '../Competences/Competences';
import Experiences from '../Experiences/Experiences';

const CVLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8 pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="space-y-10">
          <Contact />
          <Formation />
          <Competences />
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <Profil />
          <Experiences />
        </div>
      </div>
    </div>
  );
};

export default CVLayout;

