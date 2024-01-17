/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-with-alpha":
					"linear-gradient(90deg, rgba(249, 118, 157, 1), rgba(249, 118, 157, 0.5))",
			},
		},
		linearGradientColors: {},
		colors: {
			color: {
				pinkOpacity: "rgba(249, 118, 157, 0.2)",
				grayOpacity: "rgba(255, 255, 255, .1)",
				primary: "#171821",
				dark: "#21222d",
				secondary: "#f9769d",
				tersier: "#96a7ff",
				accent: "#a07bc8",
				white: "#ffffff",
				gray: "#9CA3AF",
				red: "#f00607",
				green: "#00ff00",
			},
		},
	},
	plugins: [],
};
