import React from 'react';
import { AppProps } from 'next/app';
import '@/styles/global.scss';
import { SnackbarProvider } from 'notistack';
import utils from '@/styles/utils.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SnackbarProvider classes={{ containerRoot: utils.notification }}>
			<Component {...pageProps} />
		</SnackbarProvider>
	);
}

export default MyApp;
