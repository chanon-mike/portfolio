export type NavLink = {
  id: string;
  title: string;
};

export type Bio = {
  year: string;
  event: string;
};

export type Experience = {
  company: string;
  position: string;
  date: string;
  description: string[];
  imageSrc: string;
};

export type Skill = {
  name: string;
  icon: string;
};
