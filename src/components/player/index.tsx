import React, { useEffect, useState } from 'react';
import s from './player.module.scss';
import LikeIcon from '@/assets/player/like.svg';
import CommentIcon from '@/assets/player/comment.svg';
import TelegramIcon from '@/assets/player/telegram.svg';
import SaveIcon from '@/assets/player/save.svg';
import { Button } from '../button';
import cn from 'classnames';
import { LinkComponent } from '../link';

export const VkPlayer = () => {
	const [isLike, setIsLike] = useState<boolean>(true);
	const [isComment, setIsComment] = useState<boolean>(false);
	const [isSave, setIsSave] = useState<boolean>(true);
	const [pageUrl, setPageUrl] = useState<string>('');

	useEffect(() => {
		setPageUrl(window.location.href.split('#')[0]);
	}, []);

	const handleClickLikeBtn = () => {
		setIsLike(prev => !prev);
	};

	const handleClickCommentBtn = () => {
		setIsComment(prev => !prev);
	};

	const handleClickSaveBtn = () => {
		setIsSave(prev => !prev);
	};

	// const handleTgShareBtn = () => {
	// 	router.push()
	// }

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
					<Button type="button" variant="secondary" classname={s.likeBtn} onClick={handleClickLikeBtn}>
						<LikeIcon className={cn(s.like, { [s.activeLike]: isLike })} />
					</Button>

					<Button type="button" variant="secondary" classname={s.commentBtn} onClick={handleClickCommentBtn}>
						<CommentIcon className={cn(s.comment, { [s.activeComment]: isComment })} />
					</Button>

					<LinkComponent
						href={`https://telegram.me/share/url?url=${pageUrl}&text=${'Ведущий Юрий Черкунов'}`}
						classname={s.tgBtn}
						target="_blank"
					>
						<TelegramIcon className={s.tgIcon} />
					</LinkComponent>
				</div>
				<Button type="button" variant="secondary" classname={s.saveBtn} onClick={handleClickSaveBtn}>
					<SaveIcon className={cn(s.saveIcon, { [s.activeSave]: isSave })} />
				</Button>
			</div>
		</div>
	);
};
