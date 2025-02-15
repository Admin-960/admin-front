'use client'

import { ApolloProvider } from '@apollo/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import { client } from '@/api'
import { store } from '@/store'

export function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 1,
						refetchOnWindowFocus: false
					},
					mutations: {
						retry: 1
					}
				}
			})
	)

	return (
		<QueryClientProvider client={queryClient}>
			<ApolloProvider client={client}>
				<Provider store={store}>
					{children}
					<Toaster toastOptions={{ style: { backgroundColor: '#202937', color: 'white' } }} />
				</Provider>
			</ApolloProvider>
		</QueryClientProvider>
	)
}
