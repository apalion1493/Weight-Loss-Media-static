const options = require('./config') //options from config.js

const allPlugins = {
	typography: require('@tailwindcss/typography'),
	forms: require('@tailwindcss/forms'),
	containerQueries: require('@tailwindcss/container-queries'),
}

const plugins = Object.keys(allPlugins)
	.filter(k => options.plugins[k])
	.map(k => {
		if (k in options.plugins && options.plugins[k]) {
			return allPlugins[k]
		}
	})

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,php}'],
	darkMode: 'class',
	theme: {
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
			'100%': '100%',
			'100-auto': '100% auto',
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		fontSize: {
			none: ['0px', '0px'],
			base: '1rem', //16px
			body7: ['14px', '140%'],
			body6: ['14px', '120%'],
			body5: ['16px', '120%'],
			body3: ['16px', '140%'],
			overline: ['16px', '120%'],
			body2: ['18px', '140%'], //18px
			body: ['18px', '150%'], //20px
			button: ['18px', '120%'], //24px
			t2: ['20px', '120%'], //32px
			tt: ['22px', '150%'], //32px
			h3: ['38px', '120%'],
			h1: ['64px', '120%'],
		},
		screens: {
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },

			minsm: { min: '640px' },
			minmd: { min: '768px' },
			minlg: { min: '1024px' },
			minxl: { min: '1280px' },
		},
		container: {
			center: true,
			padding: {
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			boxShadow: {
				'shadow-1': '0px 0px 18px -1px rgba(86, 85, 92, 0.15)',
				'shadow-2':
					'0px 1px 4px 0px rgba(25, 24, 27, 0.08), 0px 5px 10px 0px rgba(25, 24, 27, 0.05)',
				'shadow-3': '0px 4px 14px 0px rgba(25, 24, 27, 0.05);',
			},
			colors: {
				transparent: 'transparent',
				primary: '#19181B',
				secondary: 'rgba(25, 24, 27, 0.05)',
				'grey-1': 'rgba(25, 24, 27, 0.60)',
				white: '#ffffff',
				purple: '#3f3cbb',
				midnight: '#121063',
				metal: '#565584',
				tahiti: '#3ab7bf',
				silver: '#ecebff',
				'bubble-gum': '#ff77e9',
				danger: '#FF3F56',
				bermuda: '#78dcca',
			},
		},
	},
	plugins: plugins,
}
