import React from 'react';
import { VkPlayer } from '../player';
import utils from '@/styles/utils.module.scss';
import cn from 'classnames';
import s from './about-me.module.scss';
import { Facts } from '../facts';

export const AboutMe = () => {
	return (
		<div id="about" className={cn(utils.block, utils.container)}>
			<p className={cn(utils.title, s.title)}>Обо мне</p>
			<div className={s.wrap}>
				<VkPlayer />
				<Facts />
			</div>
		</div>
	);
};
