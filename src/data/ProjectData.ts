export type Project = {
  title: string
  description: string[]
  technologies: string[]
  link: string
}

export const Projects: Project[] = [
  {
    title: "Toast Texter",
    description: [
      "What started as an idea to refurbish my thermal printer evolved into a way for my family and I to connect through thermal prints (aka Toasts). With Toaster, we can send each other text, images, and QR codes from anywhere in the world via an webapp or PWA.",
      "Toaster also features a built-in subscription capability that allows users to receive daily prints like weather reports. Currently, Toasters are not for sale as the prototypes use expensive and inefficient components. I'm developing a newer version with a custom PCB that connects directly to the printhead. This updated version will also have its own dedicated React Native app.",
    ],
    technologies: ["React", "Thermal Printing", "IoT", "React Native", "Hardware"],
    link: "https://toasttexter.com/",
  },
]
