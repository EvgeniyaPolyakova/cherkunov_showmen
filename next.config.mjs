/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.(js|ts)x?$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgo: false,
					},
				},
			],
		});

		return config;
	},
};

export default nextConfig;
