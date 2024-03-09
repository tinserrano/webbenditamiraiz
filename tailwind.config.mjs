/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'tango': {
				'50': '#fdf7ef',
				'100': '#fbecd9',
				'200': '#f5d7b3',
				'300': '#efbb82',
				'400': '#e8964f',
				'500': '#e37e35',
				'600': '#d36123',
				'700': '#af4a1f',
				'800': '#8c3c20',
				'900': '#71331d',
				'950': '#3d170d',
			},
		},
		
		extend: {},
	},
	variants: {
		fill: ['hover', 'focus'], // this line does the trick
	  },
	plugins: [],
}
