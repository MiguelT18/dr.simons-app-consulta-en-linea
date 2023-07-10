/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'blue-light': '#015BCC',
				'blue-dark': '#003369',
				'main-red': '#FE2828',
				'soft-white': '#E9E9E9',
				dark: '#222',
			},
			fontFamily: {
				sans: "'Open Sans', sans-serif",
				montserrat: "'Montserrat', sans-serif",
			},
			fontSize: {
				sm: 'clamp(0.75rem, 4.2vw, 1rem)',
				md: 'clamp(1rem, 6vw, 1.3rem)',
				lg: 'clamp(1.2rem, 7.5vw, 1.6rem)',
				xl: 'clamp(1.6rem, 9vw, 2.2rem)',
			},
			width: {
				'header-img': 'clamp(80px, 23vw, 100px)',
				'header-drname': 'clamp(180px, 52vw, 250px)',
			},
		},
	},
	plugins: [],
};
