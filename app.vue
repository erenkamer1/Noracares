<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full noracares-gradient flex items-center justify-center">
              <span class="text-white font-bold text-lg">EK</span>
            </div>
            <div>
              <h1 class="font-bold text-gray-900">Eren Kamer</h1>
              <p class="text-sm text-gray-600">Full Stack Developer</p>
            </div>
          </div>
          
                                     <div class="hidden md:flex items-center space-x-6">
            <a @click.prevent="scrollToSection('about')" href="#about" class="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">About</a>
            <a @click.prevent="scrollToSection('experience')" href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Experience</a>
            <a @click.prevent="scrollToSection('skills')" href="#skills" class="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Skills</a>
            <a @click.prevent="scrollToSection('noracares')" href="#noracares" class="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Noracares</a>
          </div>
          
          <div class="flex items-center space-x-3">
            <a :href="personalInfo.github" target="_blank" 
               class="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a :href="personalInfo.linkedin" target="_blank"
               class="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="relative min-h-screen">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">I Want to Join the Noracares Team!</h3>
          <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
            This site was specially designed for my Noracares job application using Vue.js 3, Nuxt.js, TypeScript and GraphQL. I wanted to demonstrate the power of these technologies and my modern web development approach.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button @click="openContactModal" class="btn-primary">
              📧 Get in Touch
            </button>
            <a :href="`tel:${personalInfo.phone}`" class="btn-secondary">
              📞 {{ personalInfo.phone }}
            </a>
          </div>
          <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© 2025 Eren Kamer - Prepared for Noracares Job Application</p>
            <p class="mt-2">Vue.js 3 • Nuxt.js • TypeScript • Tailwind CSS • Pinia • GraphQL</p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Contact Modal -->
    <div v-if="isContactModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click="closeContactModal">
      <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 transform transition-all" @click.stop>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full noracares-gradient flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a1 1 0 001.42 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
          <p class="text-gray-600 mb-6">You can copy my email address or open your default email application directly.</p>
          
          <div class="bg-gray-50 rounded-lg p-4 mb-6">
            <p class="text-sm text-gray-500 mb-2">Email Address</p>
            <p class="text-lg font-medium text-gray-900 select-all">{{ personalInfo.email }}</p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 mb-4">
            <button @click="copyToClipboard(personalInfo.email)" class="btn-primary flex-1 flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              Copy Email
            </button>
            <a :href="`mailto:${personalInfo.email}`" class="btn-secondary flex-1 flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a1 1 0 001.42 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Open Email
            </a>
          </div>

          <button @click="closeContactModal" class="btn-tertiary w-full flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Simple reactive data instead of Pinia store for now
const personalInfo = {
  name: 'Eren Batıkan Kamer',
  email: 'erenkamer28@gmail.com',
  phone: '+90 501 107 2223',
  github: 'https://github.com/erenkamer1',
  linkedin: 'https://www.linkedin.com/in/eren-kamer-b82875171/'
}

// Modal state
const isContactModalOpen = ref(false)

// Page meta
useHead({
  title: 'Eren Kamer - Noracares Job Application',
  htmlAttrs: {
    lang: 'en'
  }
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

// Contact modal functions
const openContactModal = () => {
  isContactModalOpen.value = true
}

const closeContactModal = () => {
  isContactModalOpen.value = false
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('Email address copied to clipboard!')
  } catch (err) {
    console.error('Copy failed:', err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('Email address copied to clipboard!')
  }
}
</script>

<style>
/* Global styles */
* {
  font-family: 'Inter', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background: rgb(249 250 251);
  color: rgb(39, 178, 159);
}

/* Component styles */
.btn-primary {
  background-color: rgb(37 99 235);
  color: white;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.2s;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background-color: rgb(29 78 216);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}

.btn-secondary {
  background-color: rgb(229 231 235);
  color: rgb(17 24 39);
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-secondary:hover {
  background-color: rgb(209 213 219);
}

.btn-tertiary {
  background-color: transparent;
  color: rgb(107 114 128);
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid rgb(229 231 235);
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-tertiary:hover {
  background-color: rgb(249 250 251);
  color: rgb(55 65 81);
  border-color: rgb(209 213 219);
}

.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  padding: 24px;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}

.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.noracares-gradient {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #059669 100%);
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

/* Layout classes */
.min-h-screen { min-height: 100vh; }
.sticky { position: sticky; }
.top-0 { top: 0; }
.z-50 { z-index: 50; }
.relative { position: relative; }

/* Container classes */
.max-w-6xl { max-width: 72rem; }
.max-w-3xl { max-width: 48rem; }
.max-w-2xl { max-width: 42rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Padding/Margin classes */
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.py-20 { padding-top: 5rem; padding-bottom: 5rem; }
.p-2 { padding: 0.5rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-16 { margin-bottom: 4rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-8 { margin-top: 2rem; }
.pt-8 { padding-top: 2rem; }

/* Flexbox classes */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.space-x-3 > :not([hidden]) ~ :not([hidden]) { margin-left: 0.75rem; }
.space-x-6 > :not([hidden]) ~ :not([hidden]) { margin-left: 1.5rem; }
.space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; }
.space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.75rem; }
.space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
.space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 1.5rem; }
.space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 2rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }
.gap-12 { gap: 3rem; }

/* Grid classes */
.grid { display: grid; }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

/* Size classes */
.w-5 { width: 1.25rem; }
.w-6 { width: 1.5rem; }
.w-10 { width: 2.5rem; }
.w-32 { width: 8rem; }
.w-full { width: 100%; }
.h-3 { height: 0.75rem; }
.h-5 { height: 1.25rem; }
.h-10 { height: 2.5rem; }
.h-32 { height: 8rem; }

/* Border/Border radius */
.border-b { border-bottom-width: 1px; }
.border-t { border-top-width: 1px; }
.border-l-4 { border-left-width: 4px; }
.border-gray-200 { border-color: rgb(229 231 235); }
.border-gray-700 { border-color: rgb(55 65 81); }
.border-blue-500 { border-color: rgb(59 130 246); }
.rounded-full { border-radius: 9999px; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-2xl { border-radius: 1rem; }

/* Background colors */
.bg-white { background-color: rgb(255 255 255); }
.bg-gray-50 { background-color: rgb(249 250 251); }
.bg-gray-100 { background-color: rgb(243 244 246); }
.bg-gray-900 { background-color: rgb(17 24 39); }
.bg-blue-50 { background-color: rgb(239 246 255); }
.bg-blue-100 { background-color: rgb(219 234 254); }
.bg-green-50 { background-color: rgb(240 253 244); }
.bg-green-100 { background-color: rgb(220 252 231); }
.bg-purple-50 { background-color: rgb(250 245 255); }
.bg-yellow-400 { background-color: rgb(250 204 21); }

/* Gradients */
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }

/* Text colors */

.text-gray-300 { color: rgb(209 213 219); }
.text-gray-400 { color: rgb(156 163 175); }
.text-gray-600 { color: rgb(107 114 128); }
.text-gray-700 { color: rgb(55 65 81); }
.text-gray-900 { color: rgb(17 24 39); }
.text-blue-600 { color: rgb(37 99 235); }
.text-blue-800 { color: rgb(30 64 175); }
.text-blue-900 { color: rgb(30 58 138); }
.text-green-600 { color: rgb(22 163 74); }
.text-green-800 { color: rgb(22 101 52); }
.text-green-900 { color: rgb(20 83 45); }
.text-purple-800 { color: rgb(107 33 168); }
.text-yellow-400 { color: rgb(250 204 21); }

/* Text sizes */
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.text-4xl { font-size: 2.25rem; }
.text-5xl { font-size: 3rem; }
.text-7xl { font-size: 4.5rem; }

/* Font weights */
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

/* Text alignment */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* Display */
.hidden { display: none; }
.inline-block { display: inline-block; }
.inline-flex { display: inline-flex; }
.block { display: block; }

/* Cursor */
.cursor-pointer { cursor: pointer; }

/* Responsive classes */
@media (min-width: 768px) {
  .md\:flex { display: flex; }
  .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\:text-3xl { font-size: 1.875rem; }
  .md\:text-7xl { font-size: 4.5rem; }
  .md\:flex-row { flex-direction: row; }
  .md\:items-start { align-items: flex-start; }
  .md\:justify-between { justify-content: space-between; }
  .md\:mt-0 { margin-top: 0; }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\:px-8 { padding-left: 2rem; padding-right: 2rem; }
}

@media (min-width: 640px) {
  .sm\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .sm\:flex-row { flex-direction: row; }
}

/* Hover states */
.hover\:text-blue-600:hover { color: rgb(37 99 235); }
.hover\:text-gray-900:hover { color: rgb(17 24 39); }
.hover\:bg-gray-300:hover { background-color: rgb(209 213 219); }
.hover\:scale-105:hover { transform: scale(1.05); }
.hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04); }
.hover\:shadow-2xl:hover { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }

/* Transitions */
.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.transition-shadow { transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }

/* Animations */
.animate-bounce { animation: bounce 1s infinite; }
.animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-fade-in-up { animation: fade-in-up 1s ease-out; }

@keyframes bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
}

@keyframes pulse {
  50% { opacity: .5; }
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Opacity */
.opacity-10 { opacity: 0.1; }
.opacity-90 { opacity: 0.9; }

/* Shadows */
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05); }
.shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04); }
.shadow-2xl { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }

/* Others */
.overflow-hidden { overflow: hidden; }
.overflow-x-auto { overflow-x: auto; }
.leading-relaxed { line-height: 1.625; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.inset-0 { inset: 0px; }
.bottom-8 { bottom: 2rem; }
.left-1\/2 { left: 50%; }
.transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
.-translate-x-1\/2 { --tw-translate-x: -50%; }

/* Modal styles */
.bg-black { background-color: rgb(0 0 0); }
.bg-opacity-50 { background-color: rgb(0 0 0 / 0.5); }
.max-w-md { max-width: 28rem; }
.w-16 { width: 4rem; }
.h-16 { height: 4rem; }
.w-8 { width: 2rem; }
.h-8 { height: 2rem; }
.w-4 { width: 1rem; }
.h-4 { height: 1rem; }
.select-all { user-select: all; }
.flex-1 { flex: 1 1 0%; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.mx-4 { margin-left: 1rem; margin-right: 1rem; }

/* Ring */
.ring-2 { box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); }
.ring-yellow-400 { --tw-ring-color: rgb(250 204 21); }

/* Custom backdrop */
.backdrop-blur-sm { backdrop-filter: blur(4px); }
.backdrop-blur-md { backdrop-filter: blur(12px); }

/* Special background combinations */
.bg-white\/80 { background-color: rgb(255 255 255 / 0.8); }
.bg-white\/90 { background-color: rgb(255 255 255 / 0.9); }
.bg-white\/10 { background-color: rgb(255 255 255 / 0.1); }
.border-white\/20 { border-color: rgb(255 255 255 / 0.2); }
</style>
