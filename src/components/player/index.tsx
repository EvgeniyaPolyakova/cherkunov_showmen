import React from 'react';
import s from './player.module.scss';
import LikeIcon from '@/assets/player/like.svg';
import CommentIcon from '@/assets/player/comment.svg';
import TelegramIcon from '@/assets/player/telegram.svg';
import SaveIcon from '@/assets/player/save.svg';

export const VkPlayer = () => {
	// return <script src="https://vk.com/js/api/videoplayer.js" />;
	return (
		<div className={s.playerWrapper}>
			<iframe
				src="https://vk.com/video_ext.php?oid=139008289&id=456241606&hd=2"
				width="853"
				height="480"
				allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
				className={s.player}
				// frameborder="0"
				// allowfullscreen
			></iframe>
			<div className={s.icons}>
				<div className={s.rightIcons}>
					<LikeIcon />
					<CommentIcon />
					<TelegramIcon />
				</div>
				<SaveIcon />
			</div>
		</div>
	);
};
