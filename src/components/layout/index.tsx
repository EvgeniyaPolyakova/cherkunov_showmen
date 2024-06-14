import React, { ReactNode } from 'react';
import utils from '@/styles/utils.module.scss';
import { Header } from '../header';

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={utils.wrap}>
			<Header />
			{/* className={classname} */}
			<main>{children}</main>
			{/* <Footer className={footerClassName} /> */}
		</div>
	);
};
