import type { Config } from 'tailwindcss'

import { COLORS } from './src/constants/colors'

export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: COLORS,

			padding: {
				layout: '1.4rem'
			},

			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem'
			},
			fontSize: {
				'2lg': '1.38rem'
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '200ms'
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: '0.3'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			}
		}
	},
	plugins: []
} satisfies Config
