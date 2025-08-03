import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  const httpLink = createHttpLink({
    uri: config.public.graphqlEndpoint,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const cache = new InMemoryCache()

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
    ssrMode: typeof window === 'undefined',
    connectToDevTools: true,
  })

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
}) 