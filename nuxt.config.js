const baseURL = process.env.HOSTNAME
	? `http://${process.env.HOSTNAME}`
	: "https://api.premid.app";

module.exports = {
	rootDir: "./",
	srcDir: "src",
	buildModules: [
		"@nuxt/typescript-build",
		["@nuxtjs/google-analytics", { id: "UA-129058596-1" }]
	],
	plugins: [
		"~/plugins/graphqlBase.js",
		"~/plugins/I18n.js",
		"~/plugins/Languages.js",
		{ src: "~/plugins/Anime.js", mode: "client" },
		{ src: "~/plugins/Axios.js", mode: "client" },
		{ src: "~/plugins/Tippy.js", mode: "client" },
		{ src: "~/plugins/Noty.js", mode: "client" },
		{ src: "~/plugins/Pagination.js", mode: "client" },
		{ src: "~/plugins/Carousel.js", mode: "client" },
		{ src: "~/plugins/Scrollmagic.js", mode: "client" },
		{ src: "~/plugins/Modal.js", mode: "client" }
	],
	modules: [
		"@nuxt/components",
		[
			"nuxt-lazy-load",
			{
				observerConfig: {
					rootMargin: "50px 0px 50px 0px",
					threshold: 0
					// See IntersectionObserver documentation
				}
			}
		],
		[
			"@nuxtjs/google-adsense",
			{
				id: "ca-pub-1575460061917202",
				tag: "adsense"
			}
		],
		"@nuxtjs/axios",
		"@nuxtjs/auth"
	],
	components: true,
	axios: {
		baseURL: baseURL,
		proxy: true,
		retry: { retries: 3 },
		credentials: false
	},
	proxy: {
		"/v2": baseURL,
		"/v3": baseURL
	},
	//! Helmet removed for now as it doesn't work...
	helmet: {
		frameguard: false,
		xssFilter: true,
		hsts: true
	},
	auth: {
		redirect: {
			login: "/login",
			logout: "/",
			callback: "/callback",
			home: "/"
		},
		strategies: {
			local: false,
			discord: {
				_scheme: "oauth2",
				authorization_endpoint: "https://discordapp.com/api/oauth2/authorize",
				userinfo_endpoint: "https://discordapp.com/api/users/@me",
				scope: ["identify"],
				client_id: "503557087041683458"
			}
		}
	},
	env: {
		apiBase: process.env.HOSTNAME
			? `http://${process.env.HOSTNAME}/v2`
			: false || "https://api.premid.app/v2",
		graphQLapiBase: process.env.HOSTNAME
			? `http://${process.env.HOSTNAME}/v3`
			: false || "https://api.premid.app/v3"
	},
	loading: "~/components/Loader.vue",
	head: {
		titleTemplate: "%s - PreMiD",
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/assets/meta/favicon.ico"
			},
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/assets/meta/favicon-32x32.png"
			},
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/assets/meta/favicon-32x32.png"
			},
			{
				rel: "stylesheet",
				type: "text/css",
				href: "/assets/fonts/FontAwesome/all.css"
			},
			{
				rel: "stylesheet",
				type: "text/css",
				href: "https://cdn.jsdelivr.net/npm/inter-ui@3.11.0/inter.min.css"
			},
			{
				rel: "stylesheet",
				type: "text/css",
				href: "/assets/fonts/Discord/font.css"
			}
		],
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "PreMiD_Presence", content: "PreMiD" },
			{
				hid: "twitter:card",
				property: "twitter:card",
				content: "summary"
			},
			{
				hid: "twitter:url",
				property: "twitter:url",
				content: "https://premid.app"
			},
			{
				hid: "twitter:description",
				property: "twitter:description",
				content:
					"PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status."
			},
			{
				hid: "twitter:image",
				property: "twitter:image",
				content: "https://premid.app/assets/images/logo.png"
			},
			{
				hid: "theme-color",
				name: "theme-color",
				content: "#7289DA"
			},
			{
				hid: "og:site_name",
				property: "og:site_name",
				content: "PreMiD"
			},
			{
				hid: "og:title",
				property: "og:title",
				content: "PreMiD"
			},
			{
				hid: "og:description",
				property: "og:description",
				content:
					"PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status."
			},
			{
				hid: "og:image",
				property: "og:image",
				content: "https://premid.app/assets/images/logo.png"
			}
		],
		script: [
			{
				hid: "stripe",
				src: "https://t8yhzkqt8q6g.statuspage.io/embed/script.js",
				defer: true
			}
		]
	},
	css: ["~stylesheets/root.scss"],
	build: {
		cache: true,
		ssr: true,
		friendlyErrors: true,
		hotMiddleware: {
			client: {
				// turn off client overlay when errors are present
				overlay: false
			}
		}
		// publicPath: "https://cdn.premid.app"
	}
};
