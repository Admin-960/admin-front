import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { Providers } from '@/providers/Providers'

import { SITE_NAME } from '@/constants'

import './globals.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const fetchCache = 'default-cache'

export const metadata: Metadata = {
	icons: {
		// favicon
		icon: '/favicons/favicon.ico',
		shortcut: '/favicons/favicon.ico',
		// iOS
		apple: '/favicons/apple-touch-icon-180x180.png',
		// Android
		other: {
			rel: 'touch-icons',
			url: '/favicons/logo-120x120.png',
			sizes: '120x120',
			type: 'image/png'
		}
	},

	title: {
		absolute: `${SITE_NAME}`,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Best app for watching films'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${notoSans.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
