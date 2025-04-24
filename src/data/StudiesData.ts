type StudyLocation = {
  countryCode: string;
  city: string;
};

type StudyDegree = {
  fullName: string; // e.g Bachelor of Science
  baseTitle: string; // e.g Bachelor
  shortName?: string; // e.g Bachelor of Science = BSc
};

export type Study = {
  institution: string;
  url: string;
  language: string;
  location: StudyLocation;
  degree: StudyDegree;
  field: string;
  startYear: number;
  endYear: number | string;
  description: string;
  skills?: string[];
};

export const studies: Study[] = [
  {
    institution: "Rotterdam Business School",
    url: "https://www.rotterdamuas.com/programmes/master/master-in-consultancy-and-entrepreneurship-fulltime/",
    language: "English",
    location: {
      countryCode: "NL",
      city: "Rotterdam",
    },
    degree: {
      fullName: "Master of Science",
      baseTitle: "Master",
      shortName: "MSc",
    },
    field: "Consultancy and Entrepreneurship",
    startYear: 2019,
    endYear: 2020,
    description:
      "Specialized in business consultancy with a focus on digital transformation and entrepreneurial innovation. Completed thesis on consumer channel preferences in modern retail environments.",
    skills: [
      "Business Strategy",
      "Market Research",
      "Digital Transformation",
      "Entrepreneurship",
      "Project Management",
    ],
  },
  {
    institution: "Hogeschool Rotterdam",
    url: "https://www.hogeschoolrotterdam.nl/opleidingen/bachelor/commerciele-economie/voltijd/",
    language: "Dutch",
    location: {
      countryCode: "NL",
      city: "Rotterdam",
    },
    degree: {
      fullName: "Bachelor of Science",
      baseTitle: "Bachelor",
      shortName: "BSc",
    },
    field: "Commercial Economics with a specialisation in marketing management",
    startYear: 2016,
    endYear: 2019,
    description:
      "Focused on commercial economics and business development. Completed major projects on digital marketing strategies and market analysis for emerging technologies.",
    skills: [
      "Marketing",
      "Business Development",
      "Market Analysis",
      "Digital Marketing",
      "Communication",
    ],
  },
];
