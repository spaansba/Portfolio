export type Project = {
  title: string;
  isFinished: boolean;
  description: string[];
  technologies: string[];
  link?: string;
  downloadLink?: string;
  gitHubLink?: string;
  image?: string;
};

export const BigProjects: Project[] = [
  {
    title: "Toast Texter",
    isFinished: false,
    description: [
      "What started as an idea to refurbish my thermal printer evolved into a way for my family and I to connect through thermal prints (aka Toasts). With Toaster, we can send each other text, images, and QR codes from anywhere in the world via an webapp or PWA.",
      "Toaster also features a built-in subscription capability that allows users to receive daily prints like weather reports. Currently, Toasters are not for sale as the prototypes use expensive and inefficient components. I'm developing a newer version with a custom PCB that connects directly to the printhead. This updated version will also have its own dedicated React Native app.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Next.js",
      "React Native",
      "PWA",
      "Hardware",
      "FreeCAD",
      "Cloudflare Tunnels",
    ],
    link: "https://toasttexter.com/",
    gitHubLink: "https://github.com/spaansba/PrinterPage",
    image: "/images/ToastTexter.jpg",
  },
  {
    title: "Majas Portfolio",
    isFinished: true,
    description: [
      "Portfolio I made for my friend who is a hobby photographer. It's an SPA with a simple and clean layout to ensure the photography remains the focal point.",
    ],
    technologies: ["React", "TypeScript", "Tailwind", "Next.js", "CSS"],
    link: "https://majaportfolio.vercel.app/",
    gitHubLink: "https://github.com/spaansba/majaportfolio",
    image: "/images/MajasPortfolio.jpg",
  },
  {
    title: "Filmiliar",
    isFinished: true,
    description: [
      "Filmiliar is a hobby project I developed to learn how to work with the ChatGPT API and implement streaming responses. The application helps users discover new movies based on their selection of previously enjoyed films.",
      "Each recommendation displays a popularity rating, main cast members, thematic elements, a brief description, and convenient links to streaming or purchase options. Filmiliar used to work with music as well with the Spotify API but sadly Spotify deprecated it.",
    ],
    technologies: ["React", "TypeScript", "Tailwind", "Next.js", "ChatGPT API"],
    link: "https://www.filmiliar.nl/",
    image: "/images/Filmiliar.jpg",
  },
];

export const SmallProjects: Project[] = [
  {
    title: "Search Sanitizer",
    isFinished: true,
    description: [
      "An Google Chrome Extension that blocks sites/images/videos/ads from showing up on your Google Search Results page. Never want to see temu again? Block it.",
    ],
    technologies: ["Chrome Extension", "React", "TypeScript", "Tailwind"],
    link: "https://chromewebstore.google.com/detail/search-sanitizer/cojacdikohpefnppeaaehbkonbhenhgb",
  },
  {
    title: "PowerTree",
    isFinished: true,
    description: [
      "Open-source PowerTree cmdlet that allows users to visualize an directory recursively with advanced features like: Excluding folders, displaying extra info like size, modification date, sorting and filtering",
    ],
    technologies: ["PowerShell"],
    gitHubLink: "https://github.com/spaansba/PowerTree",
    link: "https://www.powershellgallery.com/packages/PowerTree",
  },
  {
    title: "Maestro",
    isFinished: true,
    description: [
      "Combination of all productivity related Excel macros I created for myself in VBA neatly packaged into an easely installable Excel Add-in. The Add-in houses 50+ macros ranging from instant mass lookups to ",
    ],
    technologies: ["VBA", "XML"],
    downloadLink:
      "https://h0oyl2bore.ufs.sh/f/s1SwIVgQ9NPAYuNKQxmjCTBq1z8oihFNPltdrf2v763WDnyG",
    image: "/images/Filmiliar.jpg",
  },
];
