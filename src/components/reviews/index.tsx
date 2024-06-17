import React, { useEffect, useRef } from 'react';
import utils from '@/styles/utils.module.scss';
import SwiperCore from 'swiper';
import cn from 'classnames';
import s from './review.module.scss';
import StarIcon from '@/assets/star.svg';
import { SwiperNavigation } from '../swiper-navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { reviewList } from '@/helpers/review-list';
import { Button } from '../button';
import { LinkComponent } from '../link';
// import axios from 'axios';

SwiperCore.use([Navigation]);

export const Reviews = () => {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<div id="comment" className={s.reviewsContainer}>
			<div className={s.firstRing} />
			<div className={s.secondRing} />
			<div className={s.thirdRing} />
			<div className={s.fourthRing} />
			<div className={utils.container}>
				<div className={s.titleWrap}>
					<p className={cn(utils.title, s.title)}>Доверие клиентов - мое главное достижение</p>
				</div>

				<Swiper
					slidesPerView={1}
					loop
					spaceBetween={20}
					mousewheel={{ forceToAxis: true }}
					allowTouchMove
					autoHeight
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					onBeforeInit={swiper => {
						// @ts-ignore
						// eslint-disable-next-line no-param-reassign
						swiper.params.navigation.prevEl = navigationPrevRef.current;
						// @ts-ignore
						// eslint-disable-next-line no-param-reassign
						swiper.params.navigation.nextEl = navigationNextRef.current;
					}}
					breakpoints={{
						1000: { slidesPerView: 2 },
					}}
					className={s.swiper}
				>
					{reviewList.map(review => (
						<SwiperSlide key={review.id}>
							<div className={s.review}>
								<div className={s.photoWrapper}>
									{review.avatarType === 'svg' ? (
										<div className={s.avatarSvg}>{React.createElement(review.avatar)}</div>
									) : (
										<img src={review.avatar} width={120} height={120} className={s.avatar} />
									)}

									<div className={s.stars}>
										<StarIcon />
										<StarIcon />
										<StarIcon />
										<StarIcon />
										<StarIcon />
									</div>
								</div>
								<div className={s.commentWrapper}>
									<p className={s.name}>{review.name}</p>
									<p className={s.comment}>{review.comment}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				{/* </div> */}

				<SwiperNavigation navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef} />
				<LinkComponent
					href="https://ivanovo.gorko.ru/%D1%82%D0%B0%D0%BC%D0%B0%D0%B4%D0%B0/838431/rating/"
					classname={s.link}
				>
					Посмотреть все
				</LinkComponent>
			</div>
		</div>
	);
};
