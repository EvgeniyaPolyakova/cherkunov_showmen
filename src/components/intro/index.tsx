import React from 'react';
import s from './intro.module.scss';
import utils from '@/styles/utils.module.scss';
import { Button } from '../button';
import cn from 'classnames';
import { LinkComponent } from '../link';

export const Intro = () => {
	return (
		<div className={s.introWrapper}>
			<div className={cn(utils.container, s.intro)}>
				<div className={s.introName}>
					<div>
						<p className={s.name}>Юрий</p>
						<p className={s.name}>Черкунов</p>
						<p className={s.description}>Ведущий и организатор вашего мероприятия</p>
					</div>
					<LinkComponent href="/#book" classname={s.orderBtn}>
						Заказать праздник
					</LinkComponent>
				</div>
				<div className={s.introPhotoBg}>
					{/* <div className={s.introPhotoBg} /> */}
					<img src="/img/intro.jpg" width={420} height={550} alt="Ведущий Юрий Черкунов" className={s.introPhoto} />
				</div>
			</div>
		</div>
	);
};
