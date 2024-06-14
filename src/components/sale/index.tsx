import React from 'react';
import s from './sale.module.scss';
import utils from '@/styles/utils.module.scss';
import { Contacs } from '../contacts';

export const Sale = () => {
	return (
		<div className={s.wrap}>
			<div className={utils.container}>
				<div className={s.content}>
					<p className={s.text}>Свяжитесь со мной и получите бесплатную консультацию по вашему мероприятию</p>

					<Contacs size="big" />
				</div>
			</div>
		</div>
	);
};
