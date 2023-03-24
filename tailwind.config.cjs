/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        primary: '#FC0000',
        secondary: '#1C1917',
        ternary: '#57534E',
			},
		},
	},
	plugins: [],
}
