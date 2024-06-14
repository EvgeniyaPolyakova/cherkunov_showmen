import React from 'react';
import { Contacs } from '../contacts';
import s from './footer.module.scss';
import utils from '@/styles/utils.module.scss';
import cn from 'classnames';
import { LinkComponent } from '../link';

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={cn(utils.container, s.footerWrap)}>
				<Contacs />
				<p className={s.text}>&copy; Юрий Черкунов, {new Date().getFullYear()}</p>
				<LinkComponent href="/privacy" classname={s.link}>
					Политика конфиденциальности
				</LinkComponent>
			</div>
		</footer>
	);
};
