export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  github: string
  whatsapp: string
  birthDate: string
  nationality: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
  technologies: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  level: string
  website?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  url?: string
  github?: string
}

export interface Language {
  name: string
  level: string
  proficiency: {
    listening: string
    reading: string
    spokenProduction: string
    spokenInteraction: string
    writing: string
  }
}

export interface NoracareAnswer {
  question: string
  answer: string
  highlighted?: boolean
} 