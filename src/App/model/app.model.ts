export interface ResumeInt {
  heading: HeadingInt;
  contact: ContactInt;
  experiences: ExperiencesInt[];
  degrees: DegreeInt[];
  assests: AssetInt[];
  skills: SkillInt[];
}

interface HeadingInt {
  fullName: string;
  job: string;
  description: string;
}

interface ContactInt {
  socialMedias: SocialMediasInt[];
  email: string;
  phoneNumber: string;
  localisation: string;
}

interface SocialMediasInt {
  logo: string;
  label: string;
  url?: string;
  username: string;
}

interface ExperiencesInt {
  company: {
    name: string;
    logo: string;
    localisation: string;
    url?: string;
  };
  date: {
    start: Date;
    end: Date;
  };
  work: {
    job: string;
    activities: string[];
  };
}

interface DegreeInt {
  school: {
    name: string;
    logo: string;
    localisation: string;
    url?: string;
  };
  obtained: Date;
  type: string;
  label: string;
}

interface AssetInt {
  name: string;
  logo: string;
  text: string[];
}

interface SkillInt {
  [label: string]: {
    logo: string;
    logos: string[];
  };
}
