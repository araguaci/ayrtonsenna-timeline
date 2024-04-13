/** @type {import('tailwindcss').Config} */

/*
#0BAC5E, #246249, #FDDE2E, #FACD34, #2A3179, #1C2C54
'candlelight': {
        '50': '#fefce8',
        '100': '#fefac3',
        '200': '#fef18a',
        '300': '#fdde2e',
        '400': '#face15',
        '500': '#eab508',
        '600': '#ca8c04',
        '700': '#a16307',
        '800': '#854e0e',
        '900': '#714012',
        '950': '#422106',
    },
    'bay-of-many': {
        '50': '#eef4ff',
        '100': '#e0ebff',
        '200': '#c6d9ff',
        '300': '#a4befd',
        '400': '#809af9',
        '500': '#6177f3',
        '600': '#444fe7',
        '700': '#363dcc',
        '800': '#2f37a4',
        '900': '#2a3179',
        '950': '#1a1c4c',
    },
    
*/
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [],
	},
	theme: {
		"colors": 
			defaultColors + {
            "custom-yellow": {
                "500": "#FDDE2E",
            },
			'main': '#e002a2',
			'second': '#47019d',
			'three': '#e00256',
			'black': '#212121',
			'white': '#fefefe',
			'gray': '#808080e2',
			senna: {
				50: '#fefce8',
				100: '#fefac3',
				200: '#fef18a',
				300: '#fdde2e',
				400: '#face15',
				500: '#eab508',
				600: '#ca8c04',
				700: '#a16307',
				800: '#854e0e',
				900: '#714012',
				950: '#422106',
			},	
			secondary: {
				100: "#ff9c3c",
				200: "#ff9022",
				300: "#ff8308",
				400: "#ee7600",
				500: "#d56900",
				600: "#bb5d00",
				700: "#a25000",
				800: "#5f2f00",
				900: "#472300",
			},
        },
		fontSize: {
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
		  },
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "cupcake"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		//lightTheme: "senna",
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
