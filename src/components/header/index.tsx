import React from 'react';
import s from './header.module.scss';
import utils from '@/styles/utils.module.scss';
import Logo from '@/assets/logo.svg';
import { LinkComponent } from '../link';
import cn from 'classnames';
import { NavDesktop } from '../nav-desktop';
import { NavMobile } from '../nav-mobile';

export const Header = () => {
	return (
		<header className={s.header}>
			<nav className={cn(utils.container, s.navigation)}>
				<ul className={s.headerList}>
					<li>
						<LinkComponent href="/" classname={s.logo}>
							<Logo />
						</LinkComponent>
					</li>
					<NavDesktop classname={s.navDesktop} />
					<NavMobile classname={s.navMobile} />
				</ul>
			</nav>
		</header>
	);
};
