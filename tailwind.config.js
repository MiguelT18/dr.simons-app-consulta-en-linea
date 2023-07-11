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
			backgroundImage: () => ({
				'gradient-linear-light':
					'linear-gradient(180deg, #479EF9 0%, #0779F1 100%)',
				'gradient-linear-dark':
					'linear-gradient(180deg, #003369 0%, #004B99 100%)',
				'gradient-linear-newsletter':
					'linear-gradient(to bottom, #a80606, #6b0000)',
				'gradient-linear-tiktok':
					'linear-gradient(to bottom left, #00f7ef, #000000, #050002, #ff004f)',
				'gradient-linear-instagram':
					'linear-gradient(to bottom, #711cbe, #c42b66, #e19449)',
				'gradient-linear-facebook':
					'linear-gradient(to bottom, #00affe, #006bf0)',
			}),
		},
	},
	plugins: [],
};
