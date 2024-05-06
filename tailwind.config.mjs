/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"darkColor": "#30313b",
				"MoradoPastel": "#b19cd9",
				"RosaSuave": "#f4bfbf",
				"Turquesa": "#47d1d1"
			},
			boxShadowColor: {
				"moradaSuave": "0 30px 50px #b19cd977"
			},
			fontFamily: {
				"Flower": "",
				"Anta": ["Anta","sans-serif"]
			}
		},
	},
	plugins: [],
}
