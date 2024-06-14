import { HeaderMenu } from '@/helpers/header-menu';
import Hamburger from 'hamburger-react';
import React, { useRef, useState } from 'react';
import s from './nav-mobile.module.scss';
import { Contacs } from '../contacts';
import { useOnClickOutside } from 'usehooks-ts';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

interface NavMobileProps {
	classname: string;
}

export const NavMobile = ({ classname }: NavMobileProps) => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const ref = useRef(null);

	const handleClickOutside = () => {
		setOpen(false);
	};

	const handleOpenMenu = () => {
		setOpen(prev => !prev);
	};

	const handleClickLink = () => {
		setOpen(false);
	};

	useOnClickOutside(ref, handleClickOutside);

	return (
		<div className={classname} ref={ref}>
			<Hamburger toggled={isOpen} size={20} toggle={handleOpenMenu} />
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className={s.menu}
					>
						<ul className={s.list}>
							{HeaderMenu.map((route, idx) => (
								<motion.li
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
										delay: 0.1 + idx / 10,
									}}
									key={route.href}
								>
									<a className={s.link} href={route.href} onClick={handleClickLink}>
										{route.title}
									</a>
								</motion.li>
							))}
						</ul>
						<Contacs />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
