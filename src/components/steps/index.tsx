import React from 'react';
import utils from '@/styles/utils.module.scss';
import s from './steps.module.scss';
import cn from 'classnames';
import { SuccessSteps } from '@/helpers/steps';

export const Steps = () => {
	return (
		<div className={cn(utils.block, utils.container)}>
			<p className={cn(utils.title, s.title)}>Простые шаги для создания праздника</p>
			<p className={s.subtitle}>Сделайте его идеальным!</p>
			<div className={s.stepsList}>
				{SuccessSteps.map(step => (
					<div key={step.id} className={step.id % 2 !== 0 ? s.rightSide : s.leftSide}>
						<div className={s.titleWrap}>
							<div className={s.numberCircle}>{React.createElement(step.icon)}</div>
							<p className={s.title}>{step.title}</p>
						</div>
						<div className={s.descriptionContainer}>
							<p className={s.description}>{step.description}</p>
							<div className={s.verticalLine} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
