<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 noracares-gradient opacity-10"></div>
      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in-up">
          <div class="mb-8">
            <div class="mb-12 text-center -mt-16">
              <h3 class="text-2xl md:text-4xl font-bold text-purple-600 uppercase tracking-wider transform transition-all duration-300 hover:scale-110 hover:text-purple-700 hover:tracking-widest cursor-default animate-pulse">
                🎯 Hello Noracares Team! 
              </h3>
            </div>
            <div class="w-32 h-32 mx-auto rounded-full noracares-gradient flex items-center justify-center mb-6 shadow-2xl">
              <span class="text-white font-bold text-4xl">EK</span>
            </div>
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-shadow">
            Eren Batıkan Kamer
          </h1>
          <h2 class="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
            Full Stack Software Developer
          </h2>
          <div class="max-w-3xl mx-auto">
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 class="text-2xl font-bold text-purple-800 mb-4">
                🎯 Noracares Job Application
              </h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                Hello Noracares team! This website was specially designed for you using <strong>Vue.js 3, Nuxt.js, TypeScript and GraphQL</strong>. 
                I wanted to demonstrate my compatibility with your tech stack and modern web development skills.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a @click.prevent="scrollToSection('noracares')" href="#noracares" class="btn-primary text-lg px-8 py-4">
                  🚀 My Noracares Answers
                </a>
                <a @click.prevent="scrollToSection('about')" href="#about" class="btn-secondary text-lg px-8 py-4">
                  👨‍💻 CV & Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            As a Full Stack Developer, I develop scalable solutions with modern technologies
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="card">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">🎓 Educational Background</h3>
              <div class="space-y-4">
                <div v-for="edu in education" :key="edu.id" class="border-l-4 border-blue-500 pl-4">
                  <h4 class="font-semibold text-gray-900">{{ edu.degree }}</h4>
                  <p class="text-blue-600 font-medium">{{ edu.institution }}</p>
                  <p class="text-sm text-gray-600">{{ edu.location }} • {{ edu.startDate }} - {{ edu.endDate }}</p>
                </div>
              </div>
            </div>
            
            <div class="card">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">🌍 Language Skills</h3>
              <div class="space-y-4">
                <div v-for="lang in languages" :key="lang.name" class="flex justify-between items-center">
                  <span class="font-medium text-gray-900">{{ lang.name }}</span>
                  <div class="text-right">
                    <span class="text-sm font-medium text-blue-600">{{ lang.level }}</span>
                    <p class="text-xs text-gray-500">{{ lang.proficiency.spokenInteraction }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="card">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">📍 Contact Information</h3>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="w-5 h-5 text-blue-600">📧</span>
                  <a :href="`mailto:${personalInfo.email}`" class="text-gray-700 hover:text-blue-600 transition-colors">
                    {{ personalInfo.email }}
                  </a>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="w-5 h-5 text-blue-600">📞</span>
                  <a :href="`tel:${personalInfo.phone}`" class="text-gray-700 hover:text-blue-600 transition-colors">
                    {{ personalInfo.phone }}
                  </a>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="w-5 h-5 text-blue-600">📍</span>
                  <span class="text-gray-700">{{ personalInfo.location }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="w-5 h-5 text-blue-600">🎂</span>
                  <span class="text-gray-700">{{ personalInfo.birthDate }} • {{ personalInfo.nationality }}</span>
                </div>
              </div>
            </div>
            
            <div class="card">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">🎯 Life in Austria</h3>
              <div class="space-y-3 text-gray-700">
                <p class="flex items-start space-x-2">
                  <span class="text-green-600 mt-1">✅</span>
                  <span>Accepted for Master's at Johannes Kepler University (September 2025)</span>
                </p>
                <p class="flex items-start space-x-2">
                  <span class="text-green-600 mt-1">✅</span>
                  <span>Living and working permit in Austria</span>
                </p>
                <p class="flex items-start space-x-2">
                  <span class="text-green-600 mt-1">✅</span>
                  <span>Currently working remotely for an Austrian company</span>
                </p>
                <p class="flex items-start space-x-2">
                  <span class="text-green-600 mt-1">✅</span>
                  <span>Hybrid/Remote work experience</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">My Experience</h2>
          <p class="text-xl text-gray-600">My professional development journey</p>
        </div>
        
        <div class="space-y-8">
          <div v-for="exp in experiences" :key="exp.id" class="card hover:scale-105 transition-transform duration-300">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ exp.title }}</h3>
                <p class="text-xl text-blue-600 font-semibold">{{ exp.company }}</p>
                <p class="text-gray-600">{{ exp.location }}</p>
              </div>
              <div class="mt-2 md:mt-0 text-right">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                      :class="exp.current ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'">
                  {{ exp.current ? 'Current' : 'Past' }}
                </span>
                <p class="text-sm text-gray-600 mt-1">
                  {{ exp.startDate }} - {{ exp.current ? 'Ongoing' : exp.endDate }}
                </p>
              </div>
            </div>
            
            <div class="mb-6">
              <ul class="space-y-2">
                <li v-for="desc in exp.description" :key="desc" 
                    class="flex items-start space-x-2 text-gray-700">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>{{ desc }}</span>
                </li>
              </ul>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in exp.technologies" :key="tech"
                    class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">My Technical Skills</h2>
          <p class="text-xl text-gray-600">Modern technologies and tools</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="skillGroup in skills" :key="skillGroup.category" 
               class="card hover:shadow-2xl transition-shadow duration-300">
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ skillGroup.category }}</h3>
            <div class="space-y-2">
              <p class="text-gray-700 text-sm leading-relaxed">
                {{ skillGroup.items.join(', ') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Noracares Section -->
    <section id="noracares" class="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 text-white">My Special Answers for Noracares</h2>
          <p class="text-xl text-white/90 max-w-3xl mx-auto">
            My detailed answers to your questions and why I am a perfect candidate for this position
          </p>
        </div>
        
        <div class="grid gap-8">
          <div v-for="(answer, key) in noracareAnswers" :key="key" 
               class="bg-white/95 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg"
               :class="answer.highlighted ? 'ring-2 ring-yellow-400' : ''">
            <div v-if="answer.highlighted" class="flex items-center mb-3 bg-yellow-100 p-2 rounded">
              <span class="text-red-600 mr-2 text-lg">⭐</span>
              <span class="text-sm font-bold text-red-600">FEATURED ANSWER</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900">{{ answer.question }}</h3>
            <p class="text-gray-700 leading-relaxed">{{ answer.answer }}</p>
          </div>
        </div>
        
        <div class="text-center mt-16">
          <div class="bg-white/95 backdrop-blur-md rounded-xl p-8 border border-white/30 shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">How Was This Site Developed?</h3>
            <div class="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 class="font-semibold mb-2 text-blue-600">🛠️ Technologies Used:</h4>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Vue.js 3 (Composition API)</li>
                  <li>• Nuxt.js (SSR/SSG)</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Pinia (State Management)</li>
                  <li>• Apollo Client (GraphQL Ready)</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold mb-2 text-blue-600">✨ Features:</h4>
                <ul class="space-y-1 text-sm text-gray-700">
                  <li>• Responsive Design</li>
                  <li>• Modern Component Architecture</li>
                  <li>• Type Safety</li>
                  <li>• Performance Optimized</li>
                  <li>• SEO Friendly</li>
                  <li>• Accessible UI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GraphQL Demo Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">GraphQL Integration</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            I prepared GraphQL Apollo Client integration to adapt to your Noracares backend
          </p>
        </div>
        
        <GraphQLDemo />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import GraphQLDemo from '../components/GraphQLDemo.vue'

// Page meta
useHead({
  title: 'Home | Eren Kamer - Noracares Job Application',
  meta: [
    { name: 'description', content: 'Eren Kamer - Full Stack Developer. Vue.js portfolio website specially prepared for Noracares company application.' }
  ]
})

// Smooth scroll function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Simple reactive data
const personalInfo = {
  name: 'Eren Batıkan Kamer',
  title: 'Full Stack Software Developer',
  email: 'erenkamer28@gmail.com',
  phone: '+90 501 107 2223',
  location: 'Linz, 4040, Austria',
  website: 'https://github.com/erenkamer1',
  linkedin: 'https://www.linkedin.com/in/eren-kamer-b82875171/',
  github: 'https://github.com/erenkamer1',
  birthDate: '28/08/1999',
  nationality: 'Turkish'
}

const experiences = [
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

const education = [
  {
    id: '1',
    degree: 'Master\'s Degree in Artificial Intelligence',
    institution: 'Johannes Kepler University',
    location: 'Linz, Austria',
    startDate: '09/2025',
    endDate: '09/2027',
    level: 'EQF level 7'
  },
  {
    id: '2',
    degree: 'Full Stack Software Developer Bootcamp',
    institution: 'Barcelona Code School',
    location: 'Barcelona, Spain',
    startDate: '07/01/2023',
    endDate: '17/05/2023',
    level: 'EQF level 6'
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

const skills = [
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

const languages = [
  {
    name: 'Turkish',
    level: 'Native',
    proficiency: {
      spokenInteraction: 'C2'
    }
  },
  {
    name: 'English',
    level: 'Proficient User',
    proficiency: {
      spokenInteraction: 'C1'
    }
  },
  {
    name: 'German',
    level: 'Beginner (Improving)',
    proficiency: {
      spokenInteraction: 'A1'
    }
  }
]

const noracareAnswers = [
  {
    question: '1. Have you worked with Vue.js/Nuxt.js, and how would you get up to speed with our stack?',
    answer: 'I\'ve had a brief encounter with Vue.js during a small project, where I built a simplified version of an existing React project using Vue. Although it was a limited experience, it gave me a general sense of Vue\'s structure and reactivity system. Given my solid foundation in TypeScript and modern frontend principles through Angular, I\'m confident I can ramp up quickly with Nuxt 3 and Pinia. I enjoy learning new frameworks and usually approach transitions by dissecting well-structured repos, reading official documentation, and building small test apps to solidify my understanding.',
    highlighted: true
  },
  {
    question: '2. Your background is in C#/.NET Core. Why the interest in switching to Node.js/TypeScript?',
    answer: 'My initial training and personal projects were primarily built with Node.js and TypeScript. Later in professional settings, particularly at Narpos (as listed on my CV), I had the opportunity to work extensively with C# and ASP.NET Core. While I appreciate the power of the .NET ecosystem, my natural strengths and preferences lie in Node.js and TypeScript. These technologies enable me to move faster, write more expressive code, and stay in sync with the modern JavaScript ecosystem, especially when working fullstack. I\'m excited to return to this stack and apply my experience with renewed enthusiasm.',
    highlighted: true
  },
  {
    question: '3. Can you tell us about your experience with cloud platforms, particularly AWS?',
    answer: 'At Narpos, AWS was part of our infrastructure, and I had the chance to explore and use various AWS services during my time there. While I wasn\'t in a DevOps role, I worked alongside our cloud team and became familiar with services such as API Gateway, Lambda, and S3. This experience gave me a solid understanding of AWS workflows and how they integrate into fullstack applications.',
    highlighted: false
  },
  {
    question: '4. Do you have experience working with GraphQL APIs?',
    answer: 'Yes, I do. In one of my earlier projects, called Budget App, I integrated a GraphQL API for fetching and managing financial data across multiple components. This involved writing queries, mutations, and working with Apollo Client on the frontend. The project gave me a good grasp of the benefits of GraphQL, especially in terms of efficient data fetching and schema design.',
    highlighted: true
  },
  {
    question: '5. How do you plan to balance your Master\'s studies with a part-time position?',
    answer: 'Although I will begin my Master\'s program in Artificial Intelligence in September 2025, the university provides strong support for distance learning. This flexibility allows me to fully commit to a full-time role at noracares. Currently, I\'m already working full-time for an Austrian company remotely, which proves that I can balance my responsibilities effectively. My lectures are online, and aside from a few exam weeks when I may need to be on campus, I am available to work normal hours. If hybrid settings are possible, that would be ideal (since I\'ve mostly worked in hybrid or remote setups), but I am fully open to your preferences.',
    highlighted: false
  },
  {
    question: '6. What is your proficiency in German and how do you handle communication?',
    answer: 'In my current company, all internal communication – including daily standups – is in English, and I\'ve never faced any issues. While my German is currently at a beginner level, I am actively working to improve it. I\'m confident that I will be able to bridge the gap in the near future and become more fluent in a short time.',
    highlighted: false
  },
  {
    question: '7. How do you approach unfamiliar technical challenges?',
    answer: 'I enjoy solving problems and learning through them. When facing an unexpected technical issue outside my known stack, I break it down into small, understandable parts, search documentation and GitHub issues, and if necessary, reach out to communities or colleagues for insight. For example, when I had to implement a legacy payment integration in an older project, I had no prior experience with that specific provider. I read through outdated docs, tested via sandbox, and eventually implemented a working module – while documenting everything for the next developer.',
    highlighted: false
  },
  {
    question: '8. How do you share knowledge and best practices with your team?',
    answer: 'I believe in documenting as I go – whether it\'s via Notion pages, markdown docs in repos, or sharing snippets in Slack. I also appreciate pair programming sessions and internal demos to showcase new solutions or tools. At my current company, I regularly update onboarding docs and run short knowledge-sharing calls to make sure that what I learn is accessible to others.',
    highlighted: false
  },
  {
    question: '9. What motivates you to work in the healthcare/care sector?',
    answer: 'For me, working as a developer isn\'t just about building features – it\'s about contributing to something meaningful. The healthcare and care sectors directly impact people\'s lives, and I\'m driven by the opportunity to make digital tools more accessible, reliable, and efficient in such a sensitive and essential area. Knowing that my work helps people – even indirectly – is a strong motivator.',
    highlighted: true
  },
  {
    question: '10. How do you evaluate mission-driven work compared to salary or company size?',
    answer: 'Meaning and impact are incredibly important to me. Of course, salary and job security matter, but being part of a company that\'s truly trying to solve real-world problems – especially in healthcare – gives my work a greater purpose. I want to grow in an environment where I can make a difference, learn continuously, and contribute to something that has lasting value for society.',
    highlighted: true
  }
]
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}
</style> 
