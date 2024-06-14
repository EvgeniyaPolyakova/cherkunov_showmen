import { HeaderMenu } from '@/helpers/header-menu';
import React from 'react';
import s from './nav-desktop.module.scss';
import cn from 'classnames';
import { Contacs } from '../contacts';

interface NavDesktopProps {
	classname?: string;
}

export const NavDesktop = ({ classname }: NavDesktopProps) => {
	return (
		<div className={classname}>
			<div className={s.menu}>
				{HeaderMenu.map(route => (
					<li key={route.href}>
						<a className={s.link} href={route.href}>
							{route.title}
						</a>
					</li>
				))}
			</div>
			<Contacs />
		</div>
	);
};
