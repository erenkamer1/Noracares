<template>
  <div class="card max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-2xl font-bold text-gray-900">🚀 GraphQL Apollo Client Demo</h3>
      <div class="flex items-center space-x-2">
        <div class="w-3 h-3 rounded-full"
             :class="isConnected ? 'bg-green-500' : 'bg-red-500'"></div>
        <span class="text-sm text-gray-600">
          {{ isConnected ? 'Connected' : 'Disconnected' }}
        </span>
      </div>
    </div>
    
    <div class="space-y-4">
      <div class="bg-gray-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-900 mb-2">📍 GraphQL Endpoint:</h4>
        <code class="text-sm text-blue-600 bg-white px-2 py-1 rounded">
          {{ graphqlEndpoint }}
        </code>
      </div>
      
      <div class="bg-gray-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-900 mb-2">🔧 Apollo Client Konfigürasyonu:</h4>
        <div class="text-sm text-gray-700 space-y-1">
          <p>✅ InMemoryCache aktif</p>
          <p>✅ HttpLink konfigüre edildi</p>
          <p>✅ SSR desteği</p>
          <p>✅ DevTools entegrasyonu</p>
        </div>
      </div>
      
      <div class="bg-gray-50 rounded-lg p-4">
        <h4 class="font-semibold text-gray-900 mb-2">📝 Örnek GraphQL Query:</h4>
        <pre class="text-sm bg-gray-900 text-green-400 p-3 rounded overflow-x-auto"><code>query GetUserInfo {
  user(id: "eren-kamer") {
    name
    email
    skills {
      category
      technologies
    }
    experience {
      company
      position
      duration
    }
  }
}</code></pre>
      </div>
      
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 class="font-semibold text-blue-900 mb-2">💡 Noracares için GraphQL Deneyimim:</h4>
        <div class="text-sm text-blue-800 space-y-2">
          <p>• <strong>Budget App Projesi:</strong> GraphQL API entegrasyonu ile financial data yönetimi</p>
          <p>• <strong>Apollo Client:</strong> Query, Mutation ve Subscription operasyonları</p>
          <p>• <strong>Cache Management:</strong> Optimistic updates ve cache invalidation</p>
          <p>• <strong>Type Safety:</strong> GraphQL Code Generator ile TypeScript entegrasyonu</p>
        </div>
      </div>
      
      <button @click="simulateQuery" 
              :disabled="isLoading"
              class="w-full btn-primary">
        <span v-if="isLoading">⏳ Simulating GraphQL Query...</span>
        <span v-else>🚀 GraphQL Query Simülasyonu Çalıştır</span>
      </button>
      
      <div v-if="queryResult" class="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 class="font-semibold text-green-900 mb-2">✅ Query Sonucu (Mock Data):</h4>
        <pre class="text-sm text-green-800 overflow-x-auto">{{ JSON.stringify(queryResult, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive state
const isLoading = ref(false)
const queryResult = ref(null)

// Runtime config
const config = useRuntimeConfig()
const graphqlEndpoint = computed(() => config.public.graphqlEndpoint)

// Simulated connection status
const isConnected = computed(() => !!graphqlEndpoint.value)

// Mock GraphQL query simulation
const simulateQuery = async () => {
  isLoading.value = true
  queryResult.value = null
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Mock successful response
  queryResult.value = {
    data: {
      user: {
        name: "Eren Batıkan Kamer",
        email: "erenkamer28@gmail.com",
        skills: [
          {
            category: "Frontend",
            technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS"]
          },
          {
            category: "Backend", 
            technologies: ["Node.js", "GraphQL", "Apollo Server", "C#"]
          }
        ],
        experience: [
          {
            company: "UNI SOFTWARE PLUS GMBH",
            position: "Full Stack Developer",
            duration: "2025 - Present"
          },
          {
            company: "NARPOS",
            position: "Full Stack Developer", 
            duration: "2023 - 2025"
          }
        ]
      }
    },
    loading: false,
    error: null
  }
  
  isLoading.value = false
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style> 
