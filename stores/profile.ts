import { defineStore } from 'pinia'
import type { PersonalInfo, Experience, Education, Skill, Language, NoracareAnswer } from '../types'

export const useProfileStore = defineStore('profile', () => {
  const personalInfo: PersonalInfo = {
    name: 'Eren Batıkan Kamer',
    title: 'Full Stack Software Developer',
    email: 'erenkamer28@gmail.com',
    phone: '+90 501 107 2223',
    location: 'Linz, 4040, Austria',
    website: 'https://github.com/erenkamer1',
    linkedin: 'https://www.linkedin.com/in/eren-kamer-b82875171/',
    github: 'https://github.com/erenkamer1',
    whatsapp: '+90 501 107 2223',
    birthDate: '28/08/1999',
    nationality: 'Turkish'
  }

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Full Stack Software Developer',
      company: 'UNI SOFTWARE PLUS GMBH',
      location: 'Perg, Austria',
      startDate: '12/02/2025',
      endDate: '',
      current: true,
      description: [
        'Building a comprehensive electronic checklist system for quality control in production processes',
        'Developing enterprise-level web applications using ASP.NET Core MVC (.NET 8) with focus on performance and security',
        'Working with C# and ASP.NET Core Web API to build RESTful services following SOLID principles',
        'Integrating with external systems such as SAP and machine interfaces (EMI)',
        'Creating background services to improve automation and efficiency'
      ],
      technologies: ['ASP.NET Core MVC', '.NET 8', 'C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'Microsoft SQL Server', 'SAP Integration', 'Machine Interface (EMI)', 'Git', 'GitHub', 'Visual Studio 2022']
    },
    {
      id: '2',
      title: 'Full Stack Software Developer',
      company: 'NARPOS',
      location: 'Istanbul, Turkey',
      startDate: '02/06/2023',
      endDate: '10/02/2025',
      current: false,
      description: [
        'Developed enterprise-scale web applications using C# and ASP.NET Core Web API',
        'Built modern web applications using TypeScript and JavaScript',
        'Implemented REST API integrations with third-party services',
        'Designed dynamic and user-friendly interfaces using Angular framework (25% improvement in UX)',
        'Managed MSSQL databases with complex stored procedures (30% efficiency increase)',
        'Led team development processes using Git and Agile/Scrum methodologies'
      ],
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'C#', 'ASP.NET Core Web API', 'MSSQL', 'HTML5', 'CSS3', 'SCSS', 'Git', 'Agile/Scrum']
    }
  ]

  const education: Education[] = [
    {
      id: '1',
      degree: 'Master\'s Degree in Artificial Intelligence',
      institution: 'Johannes Kepler University',
      location: 'Linz, Austria',
      startDate: '09/2025',
      endDate: '09/2027',
      level: 'EQF level 7',
      website: 'https://www.jku.at'
    },
    {
      id: '2',
      degree: 'Full Stack Software Developer Bootcamp',
      institution: 'Barcelona Code School',
      location: 'Barcelona, Spain',
      startDate: '07/01/2023',
      endDate: '17/05/2023',
      level: 'EQF level 6',
      website: 'https://barcelonacodeschool.com'
    },
    {
      id: '3',
      degree: 'Bachelor\'s Degree in Aviation Management',
      institution: 'Istanbul Commerce University',
      location: 'Istanbul, Turkey',
      startDate: '08/09/2018',
      endDate: '08/09/2022',
      level: 'EQF level 6'
    }
  ]

  const skills: Skill[] = [
    {
      category: 'Frontend Development',
      items: ['Vue.js', 'Nuxt.js', 'Angular', 'React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3/SCSS', 'Tailwind CSS', 'Responsive Design']
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express.js', 'C#', 'ASP.NET Core', 'ASP.NET Core Web API', '.NET 8', 'RESTful API Design', 'GraphQL', 'Entity Framework Core']
    },
    {
      category: 'Database Management',
      items: ['Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Complex Query Optimization', 'Stored Procedures']
    },
    {
      category: 'DevOps & Cloud',
      items: ['AWS', 'API Gateway', 'Lambda', 'S3', 'Git', 'GitHub', 'Docker', 'CI/CD']
    },
    {
      category: 'Integrations & Tools',
      items: ['SAP Integration', 'Machine Interface (EMI)', 'Visual Studio', 'VS Code', 'Postman', 'Azure DevOps']
    },
    {
      category: 'Methodologies',
      items: ['Agile Development', 'Scrum Framework', 'SOLID Principles', 'Test-Driven Development', 'Code Review']
    }
  ]

  const languages: Language[] = [
    {
      name: 'Turkish',
      level: 'Native',
      proficiency: {
        listening: 'C2',
        reading: 'C2',
        spokenProduction: 'C2',
        spokenInteraction: 'C2',
        writing: 'C2'
      }
    },
    {
      name: 'English',
      level: 'Proficient User',
      proficiency: {
        listening: 'C1',
        reading: 'C1',
        spokenProduction: 'C1',
        spokenInteraction: 'C1',
        writing: 'C1'
      }
    },
    {
      name: 'German',
      level: 'Beginner (Improving)',
      proficiency: {
        listening: 'A2',
        reading: 'A2',
        spokenProduction: 'A1',
        spokenInteraction: 'A1',
        writing: 'A1'
      }
    }
  ]

  const noracareAnswers: NoracareAnswer[] = [
    {
      question: 'Vue.js/Nuxt.js deneyimi ve bu stack\'e nasıl hızla adapte olacağınız?',
      answer: 'Vue.js ile küçük bir proje deneyimim var ve TypeScript ile modern frontend prensiplerinde güçlü bir temelim bulunuyor. Nuxt 3 ve Pinia\'ya hızla adapte olabilirim.',
      highlighted: true
    },
    {
      question: 'Node.js/TypeScript stack\'ine geçiş motivasyonunuz?',
      answer: 'İlk eğitimim ve kişisel projelerim Node.js ve TypeScript ile başladı. Bu teknolojiler beni daha hızlı ve etkin çalışmaya yönlendiriyor. Fullstack çalışırken özellikle JavaScript ekosistemi ile senkronize kalabiliyorum.',
      highlighted: true
    },
    {
      question: 'AWS deneyiminiz?',
      answer: 'Narpos\'ta AWS altyapısı parçasıydı ve cloud ekibimizle çalışarak API Gateway, Lambda ve S3 gibi servisleri kullanma fırsatım oldu.',
      highlighted: false
    },
    {
      question: 'GraphQL deneyiminiz?',
      answer: 'Budget App projesinde GraphQL API entegrasyonu yaptım. Query\'ler, mutation\'lar yazarak Apollo Client ile frontend tarafında çalıştım.',
      highlighted: true
    },
    {
      question: 'Master eğitimi ile çalışma dengesi?',
      answer: 'Üniversite uzaktan eğitim desteği sunuyor ve şu anda Avusturyalı bir şirket için remote tam zamanlı çalışıyorum. Dersler online ve sadece sınav haftalarında kampüste olmam gerekiyor.',
      highlighted: false
    },
    {
      question: 'Almanca yetkinliğiniz?',
      answer: 'Şu anda başlangıç seviyesinde Almanca bilgim var ve aktif olarak geliştirmeye çalışıyorum. Mevcut şirketimde tüm iç iletişim İngilizce ve hiç sorun yaşamadım.',
      highlighted: false
    },
    {
      question: 'Beklenmedik teknik problemlere yaklaşımınız?',
      answer: 'Problemi küçük parçalara ayırır, dokümantasyon ve GitHub issue\'larını araştırır, gerekirse topluluk veya meslektaşlarıma danışırım. Eski bir payment integration projesinde böyle yaklaşarak başarılı bir çözüm ürettim.',
      highlighted: false
    },
    {
      question: 'Takımla bilgi paylaşımı yaklaşımınız?',
      answer: 'Çalışırken dokümante ederim - Notion sayfaları, repo\'larda markdown dokümanları veya Slack\'te snippet paylaşımı yaparak. Pair programming ve internal demo\'lar ile yeni çözümleri paylaşırım.',
      highlighted: false
    },
    {
      question: 'Sağlık/bakım sektöründe çalışma motivasyonunuz?',
      answer: 'Developer olarak sadece özellik geliştirmek değil, anlamlı bir şeye katkıda bulunmak istiyorum. Sağlık sektörü doğrudan insanların hayatlarını etkiler ve dijital araçları daha erişilebilir hale getirmek güçlü bir motivasyon.',
      highlighted: true
    },
    {
      question: 'Misyon odaklı çalışmayı diğer faktörlerle nasıl karşılaştırıyorsunuz?',
      answer: 'Anlam ve etki benim için çok önemli. Tabii ki maaş ve iş güvenliği önemli, ama gerçekten sorunları çözmeye çalışan bir şirketin parçası olmak işime daha büyük bir amaç veriyor.',
      highlighted: true
    }
  ]

  return {
    personalInfo,
    experiences,
    education,
    skills,
    languages,
    noracareAnswers
  }
}) 