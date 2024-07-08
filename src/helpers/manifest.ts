export const manifest = {
	name: 'https://cherkunov37.ru',
	short_name: 'https://cherkunov37.ru',
	theme_color: '#000000',
	background_color: '#ffffff',
	display: 'standalone',
	start_url: 'https://cherkunov37.ru',
	icons: [
		// {
		// 	src: 'static/icons/favicon/android-icon-512x512.png',
		// 	sizes: '512x512',
		// 	type: 'image/png',
		// },
		{
			src: 'https://cherkunov37.ru/favicon/android-chrome-192x192.png',
			sizes: '192x192',
			type: 'image/png',
		},
		{
			src: 'https://cherkunov37.ru/favicon/android-chrome-192x192.png',
			sizes: '192x192',
			type: 'image/png',
			purpose: 'maskable',
		},
	],
};

export const formatJSON = (jsonObject: any) => {
	// if (process.env.NODE_ENV === 'development') {
	// 	return JSON.stringify(jsonObject, null, 2);
	// }
	return JSON.stringify(jsonObject);
};
