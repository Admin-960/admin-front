import type { Metadata } from 'next'

import { PAGE } from '@/config'

export const metadata: Metadata = {
	title: 'Home',
	description: 'The best video platform',
	alternates: {
		canonical: PAGE.HOME
	},
	openGraph: {
		type: 'website',
		url: PAGE.HOME,
		title: 'App Video'
	}
}

export default async function Home() {
	return <section>Home</section>
}
