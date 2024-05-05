import defaultTheme from "tailwindcss/defaultTheme"
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			
		},
		colors: {
			primary: 'var(--color-primary)',
			secondary: 'var(--color-secondary)',
			accent: 'var(--color-accent)',
			complementaryI: 'var(--color-complementaryI)',
			complementaryII: 'var(--color-complementaryII)',
			white: '#FFFFFF',
			...defaultTheme.colors,
		},
		screens: {
			xs: "360px",
			...defaultTheme.screens,
			"3xl": "1650px",
		},
		fontFamily: {
			'hind': 'var(--font-family-Hind)',
		},

	},
	plugins: [],
}
