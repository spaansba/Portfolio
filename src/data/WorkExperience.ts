export type WorkPositions = {
  jobTitle: string
  startYear: number
  endYear: number | string
  extraInfo: string
}

type WorkLocation = {
  countryCode: string
  city: string
}

export type WorkExperience = {
  employer: string
  icon: string
  location: WorkLocation
  positions: WorkPositions[]
}

export const workExperience: WorkExperience[] = [
  {
    employer: "Amazon",
    icon: "amazon_logo", // Placeholder for the actual icon
    location: {
      countryCode: "NL",
      city: "Den Haag",
    },
    positions: [
      {
        jobTitle: "Subject Matter Expert",
        startYear: 2023,
        endYear: "present",
        extraInfo:
          "Created, developed and maintained multiple big VBA projects serving over 600 internal clients from 12 different countries. Also served as the main contact point between the NL Flex team and the retail department.",
      },
      {
        jobTitle: "Senior Catalog Associate",
        startYear: 2022,
        endYear: 2023,
        extraInfo:
          "Gathered and analyzed sales data to identify growth opportunities across multiple marketplaces. Implemented solutions that enhanced product visibility and improve customer experience.",
      },
      {
        jobTitle: "Catalog Associate",
        startYear: 2021,
        endYear: 2022,
        extraInfo:
          "Managed catalog operations including product page updates, content creation, and data maintenance for multiple Amazon marketplaces.",
      },
    ],
  },
  {
    employer: "Hilti Nederland BV",
    icon: "hilti_logo", // Placeholder for the actual icon
    location: {
      countryCode: "NL",
      city: "Berkel en Rodenrijs",
    },
    positions: [
      {
        jobTitle: "Afstuderen",
        startYear: 2018,
        endYear: 2020,
        extraInfo:
          "Researched what self-employed builders need and how they prefer to be contacted by companies like Hilti. Created suggestions that helped Hilti talk to these customers better. Used the research to help the company connect with more builders.",
      },
    ],
  },
]
