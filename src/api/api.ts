import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

import { API_URL } from '@/constants'

const httpLink = new HttpLink({
	uri: `${API_URL}/graphql`
})

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
})
