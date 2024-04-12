// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["~/assets/css/tailwind.css"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "Ui",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},

	modules: [
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"nuxt-icon",
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Lato: {
						wght: [100, 400, 700],
						ital: [300],
					},
				},
			},
		],
	],
});
