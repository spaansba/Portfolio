export type Project = {
  title: string;
  isFinished: boolean;
  description: string[];
  technologies: string[];
  link?: string;
  downloadLink?: string;
  gitHubLink?: string;
  images: ProjectImages[];
  index: number;
};

export type ProjectImages = {
  index: number;
  image: string;
  description: string;
  isGif?: boolean;
};

type ImageWithoutIndex = Omit<ProjectImages, "index">;
type ProjectWithoutIndex = Omit<Project, "index" | "images"> & {
  images: ImageWithoutIndex[];
};

function addIndexToImages(images: ImageWithoutIndex[]): ProjectImages[] {
  return images.map((image, index) => ({
    ...image,
    index,
  }));
}

function addIndexToProject(projects: ProjectWithoutIndex[]): Project[] {
  return projects.map((project, index) => ({
    ...project,
    index,
    images: addIndexToImages(project.images),
  }));
}

export const BigProjects: Project[] = addIndexToProject([
  {
    title: "ForesightJS",
    isFinished: false,
    description: [
      "ForesightJS is a lightweight JavaScript library that predicts user intent based on mouse movements. By analyzing cursor trajectory in real-time, it anticipates which elements a user is likely to interact with, allowing developers to trigger actions before the actual hover or click occurs (for example prefetching).",
    ],
    technologies: ["TypeScript"],
    link: "https://foresightJS.com/",
    gitHubLink: "https://github.com/spaansba/ForesightJS",
    images: [
      {
        image: "/",
        description: "Toast Texter thermal printer prototype",
      },
    ],
  },
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
    images: [
      {
        image: "/images/ToastTexter.jpg",
        description: "Toast Texter thermal printer prototype",
      },
    ],
  },
  {
    title: "Majas Portfolio",
    isFinished: true,
    description: [
      "Portfolio I made for my friend who is a photographer. It's an SPA with a simple and clean layout to ensure the photography remains the focal point.",
    ],
    technologies: ["React", "TypeScript", "Tailwind", "Next.js", "CSS"],
    link: "https://majaportfolio.vercel.app/",
    gitHubLink: "https://github.com/spaansba/majaportfolio",
    images: [
      {
        image: "/images/MajasPortfolio.jpg",
        description: "Maja's photography portfolio website",
      },
    ],
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
    images: [
      {
        image: "/images/Filmiliar.jpg",
        description: "Filmiliar movie recommendation interface",
      },
    ],
  },
]);

export const SmallProjects: Project[] = addIndexToProject([
  {
    title: "Search Sanitizer",
    isFinished: true,
    description: [
      "An Google Chrome Extension that blocks sites/images/videos/ads from showing up on your Google Search Results page. Never want to see temu again? Block it.",
    ],
    technologies: ["Chrome Extension", "React", "TypeScript", "Tailwind"],
    link: "https://chromewebstore.google.com/detail/search-sanitizer/cojacdikohpefnppeaaehbkonbhenhgb",
    images: [
      {
        image: "/images/SearchSanitizer/SearchSanitizer.gif",
        description: "Maja's photography portfolio website",
        isGif: true,
      },
      {
        image: "/images/SearchSanitizer/Dashboard.png",
        description:
          "Dashboard showing the currently blocked URL's and their blocked stats. This is one of the places where you can configure new URL's to block",
      },
    ],
  },
  {
    title: "PowerTree",
    isFinished: true,
    description: [
      "Open-source PowerShell module that allows users to visualize an directory recursively with advanced features like: Excluding folders, displaying extra info like size, modification date, sorting and filtering",
    ],
    technologies: ["PowerShell"],
    gitHubLink: "https://github.com/spaansba/PowerTree",
    link: "https://www.powershellgallery.com/packages/PowerTree",
    images: [
      {
        image: "/images/Filmiliar.jpg",
        description: "Maestro Excel add-in interface",
      },
    ],
  },
  {
    title: "Maestro",
    isFinished: true,
    description: [
      "Combination of all productivity related Excel macros I created for myself in VBA neatly packaged into an easely installable Excel Add-in. The Add-in houses 50+ macros ranging from instant mass lookups to sampling tools and data cleaning",
    ],
    technologies: ["VBA", "XML"],
    downloadLink:
      "https://h0oyl2bore.ufs.sh/f/s1SwIVgQ9NPAYuNKQxmjCTBq1z8oihFNPltdrf2v763WDnyG",
    images: [
      {
        image: "/images/Filmiliar.jpg",
        description: "Maestro Excel add-in interface",
      },
    ],
  },
  {
    title: "React hover slob",
    isFinished: true,
    description: [
      "A React hook that expands the area of the mouseOver, mouseLeave and mouseEnter events for React components. Usefull for if you want to prefetch earlier than regular hover",
    ],
    technologies: ["React"],
    gitHubLink: "https://github.com/spaansba/react-hover-slop",
    link: "https://react-hover-slop-example-page.vercel.app/",
    images: [
      {
        image: "/images/Filmiliar.jpg",
        description: "Maestro Excel add-in interface",
      },
    ],
  },
  {
    title: "SVGL-PowerShell",
    isFinished: true,
    description: [
      "Open-source PowerShell module for interacting with the open-source SVGL library",
    ],
    technologies: ["PowerShell"],
    gitHubLink: "https://github.com/spaansba/SVGL-PowerShell",
    link: "https://www.powershellgallery.com/packages/Get-SVGL",
    images: [
      {
        image: "/images/Filmiliar.jpg",
        description: "Maestro Excel add-in interface",
      },
    ],
  },
]);
