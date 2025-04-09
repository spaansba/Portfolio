export type WorkPositions = {
  jobTitle: string
  startYear: number
  endYear: number | string
  extraInfo: string[]
}

type WorkLocation = {
  countryCode: string
  city: string
}

export type WorkExperience = {
  employer: string
  url: string
  location: WorkLocation
  positions: WorkPositions[]
}

export const workExperience: WorkExperience[] = [
  {
    employer: "Amazon",
    url: "https://www.amazon.nl/",
    location: {
      countryCode: "NL",
      city: "Den Haag",
    },
    positions: [
      {
        jobTitle: "Subject Matter Expert",
        startYear: 2023,
        endYear: "present",
        extraInfo: [
          "Created, developed and maintained multiple big VBA projects serving over 600 internal clients from 12 different countries. Also served as the main contact point between the NL Flex team and the retail department.",
          "asdasdasd",
        ],
      },
      {
        jobTitle: "Senior Catalog Associate",
        startYear: 2022,
        endYear: 2023,
        extraInfo: [
          "Gathered and analyzed sales data to identify growth opportunities across multiple marketplaces. Implemented solutions that enhanced product visibility and improve customer experience.",
        ],
      },
      {
        jobTitle: "Catalog Associate",
        startYear: 2021,
        endYear: 2022,
        extraInfo: [
          "Managed catalog operations including product page updates, content creation, and data maintenance for multiple Amazon marketplaces.",
        ],
      },
    ],
  },
  {
    employer: "Hilti",
    url: "https://www.hilti.nl/",
    location: {
      countryCode: "NL",
      city: "Berkel en Rodenrijs",
    },
    positions: [
      {
        jobTitle: "Master Thesis ",
        startYear: 2019,
        endYear: 2020,
        extraInfo: [
          "Successfully completed my master's thesis on why existing clients prefer to buy through traditional offline channels rather than more modern online channels.",
        ],
      },
      {
        jobTitle: "Bachelor Thesis",
        startYear: 2018,
        endYear: 2019,
        extraInfo: [
          "Successfully finished my bachelor thesis about innovative ways to connect digitally with the growing market of independent builders",
        ],
      },
    ],
  },
]
