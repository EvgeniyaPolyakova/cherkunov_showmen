import React from 'react';
import cn from 'classnames';
import PrevBtn from '@/assets/left-arrow.svg';
import NextBtn from '@/assets/right-arrow.svg';
import s from './swiper-navigation.module.scss';

interface SwiperNavigationProps {
	navigationPrevRef: React.MutableRefObject<any>;
	navigationNextRef: React.MutableRefObject<any>;
	prevBtnClassname?: string;
	nextBtnClassname?: string;
}

export const SwiperNavigation = ({
	navigationPrevRef,
	navigationNextRef,
	prevBtnClassname,
	nextBtnClassname,
}: SwiperNavigationProps) => {
	return (
		<div className={s.buttonsWrap}>
			<button
				type="button"
				ref={navigationPrevRef}
				aria-label="Назад"
				className={cn(prevBtnClassname, s.navigationBtn)}
			>
				<PrevBtn />
			</button>
			<button
				type="button"
				ref={navigationNextRef}
				aria-label="Вперед"
				className={cn(nextBtnClassname, s.navigationBtn)}
			>
				<NextBtn />
			</button>
		</div>
	);
};
