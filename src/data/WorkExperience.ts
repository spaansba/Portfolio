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
        extraInfo: "Subject matter expert responsibilities",
      },
      {
        jobTitle: "Senior Catalog Associate",
        startYear: 2022,
        endYear: 2023,
        extraInfo: "Senior catalog management responsibilities",
      },
      {
        jobTitle: "Catalog Associate",
        startYear: 2021,
        endYear: 2022,
        extraInfo: "Catalog management and maintenance responsibilities",
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
          "Onderzoek verrichtingen naar de behoeftes en de manier van aanspreken van zzp'ers in de bouw.",
      },
    ],
  },
]
