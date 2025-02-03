import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	sassOptions: {
		silenceDeprecations: ['legacy-js-api']
	}
}
export default nextConfig
