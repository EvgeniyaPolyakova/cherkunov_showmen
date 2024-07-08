import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { formatJSON, manifest } from '@/helpers/manifest';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="ru">
				<Head>
					<meta
						name="description"
						content="Официальный сайт ведущего Юрия Черкунова. Организация и проведение свадеб, корпоративных вечеринок, праздников и других мероприятий в Иваново и ивановской области."
					/>
					<meta
						name="keywords"
						content="Юрий Черкунов, ведущий, ведущий мероприятий, ведущий на свадьбу, ведущий на день рождения, ведущий на корпоратив, ведущий на юбилей, ведущий на выпускной"
					/>
					<meta name="author" content="Юрий Черкунов" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link rel="canonical" href="https://cherkunov37.ru" />

					<meta property="og:title" content="Юрий Черкунов - ведущий мероприятий" />
					<meta
						property="og:description"
						content="Официальный сайт ведущего Юрия Черкунова. Организация и проведение свадеб, корпоративных вечеринок, праздников и других мероприятий в Иваново и ивановской области."
					/>
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://cherkunov37.ru" />
					<meta property="og:image" content="https://cherkunov37.ru/img/intro.jpg" />
					<meta property="og:site_name" content="Юрий Черкунов" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:domain" content="cherkunov37.ru" />
					<meta name="twitter:site" content="Юрий Черкунов" />
					<meta name="twitter:title" content="Юрий Черкунов - ведущий мероприятий" />
					<meta
						name="twitter:description"
						content="Официальный сайт ведущего Юрия Черкунова. Организация и проведение свадеб, корпоративных вечеринок, праздников и других мероприятий в Иваново и ивановской области."
					/>
					<meta name="twitter:image" content="https://cherkunov37.ru/img/intro.jpg" />
					<meta name="twitter:url" content="https://cherkunov37.ru" />

					{/* <link rel="icon" href="/favicon.ico" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}

					<link rel="icon" type="image/svg+xml" sizes="any" href="https://cherkunov37.ru/favicon/favicon.svg" />
					{/* <link rel="icon" type="image/x-icon" sizes="128x128" href="https://cherkunov37.ru/favicon/favicon-128x128.ico" /> */}
					<link rel="icon" type="image/x-icon" sizes="16x16" href="https://cherkunov37.ru/favicon/favicon.ico" />
					<link rel="apple-touch-icon" sizes="57x57" href="https://cherkunov37.ru/favicon/apple-touch-icon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="https://cherkunov37.ru/favicon/apple-touch-icon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="https://cherkunov37.ru/favicon/apple-touch-icon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="https://cherkunov37.ru/favicon/apple-touch-icon-76x76.png" />
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href="https://cherkunov37.ru/favicon/apple-touch-icon-114x114.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href="https://cherkunov37.ru/favicon/apple-touch-icon-120x120.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href="https://cherkunov37.ru/favicon/apple-touch-icon-144x144.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="https://cherkunov37.ru/favicon/apple-touch-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="https://cherkunov37.ru/favicon/apple-touch-icon-180x180.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="https://cherkunov37.ru/favicon/android-chrome-192x192.png"
					/>
					{/* <link rel="icon" type="image/png" sizes="512x512" href="<%= siteUrl %>static/icons/favicon/android-icon-512x512.png"> */}
					<link rel="icon" type="image/png" sizes="32x32" href="https://cherkunov37.ru/favicon/favicon-32x32.png" />
					{/* <link rel="icon" type="image/png" sizes="96x96" href="<%= siteUrl %>static/icons/favicon/favicon-96x96.png"> */}
					<link rel="icon" type="image/png" sizes="16x16" href="https://cherkunov37.ru/favicon/favicon-16x16.png" />
					<link rel="mask-icon" href="https://cherkunov37.ru/favicon/safari-pinned-tab.svg" />
					<link rel="manifest" href={`data:application/manifest+json,${encodeURIComponent(formatJSON(manifest))}`} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
