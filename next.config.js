/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = {

	images: {
		domains: [
			"openweathermap.org",
		],
	},
};

// module.exports = nextConfig;
