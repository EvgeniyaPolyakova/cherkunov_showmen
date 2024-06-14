import React from 'react';
import EnvelopeFrontIcon from '@/assets/letter/envelope-front.svg';
import EnvelopeBackIcon from '@/assets/letter/envelope-back.svg';
import LetterIcon from '@/assets/letter/letter.svg';
import s from './success-modal.module.scss';
import { Contacs } from '../contacts';
import CrossIcon from '@/assets/cross.svg';
import { Button } from '../button';
import { toggleBodyScroll } from '@/helpers/document';

interface SuccessModalProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SuccessModal = ({ isOpen, setIsOpen }: SuccessModalProps) => {
	const handleCloseModal = () => {
		toggleBodyScroll();
		setIsOpen(false);
	};
	return (
		<div className={s.modalBg}>
			<div className={s.modalBody}>
				<Button variant="primary" type="button" classname={s.closeBtn} onClick={handleCloseModal}>
					<CrossIcon />
				</Button>
				<div className={s.wrapper}>
					<EnvelopeFrontIcon className={s.front} />
					<EnvelopeBackIcon className={s.back} />
					{/* <EnvelopeIcon /> */}
					<LetterIcon className={s.letter} />
				</div>
				<div className={s.text}>
					<p className={s.modalTitle}>Спасибо!</p>
					<p className={s.modalTitle}>Ваша заявка принята, скоро я свяжусь с вами!</p>
					<p className={s.subTitle}>А пока подпишитесь на меня в социальных сетях</p>
				</div>
				<Contacs color="green" />
			</div>
		</div>
	);
};
