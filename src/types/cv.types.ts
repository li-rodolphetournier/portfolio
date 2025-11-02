export interface Contact {
  phone: string;
  email: string;
  address: string;
  city: string;
}

export interface Formation {
  title: string;
  year: string;
  institution: string;
  type?: string;
}

export interface Competence {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Langue {
  name: string;
  level: string;
}

export interface CVData {
  personal: {
    firstName: string;
    lastName: string;
    initials: string;
    title: string;
    contact: Contact;
    profil: string;
  };
  formations: Formation[];
  competences: Competence[];
  experiences: Experience[];
  langues: Langue[];
  centresInteret: string[];
}

