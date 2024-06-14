import React from 'react';
import { LinkComponent } from '../link';
import { Contacts } from '@/helpers/contacts';
import s from './contacs.module.scss';
import cn from 'classnames';

interface ContactsProps {
	size?: 'big' | 'standart';
	color?: 'white' | 'green';
}

export const Contacs = ({ size, color }: ContactsProps) => {
	return (
		<ul className={cn(s.contactList, { [s.bigList]: size === 'big' }, { [s.green]: color === 'green' })}>
			{Contacts.map(contact => (
				<li key={contact.href} className={s.listItem}>
					<LinkComponent classname={s.contactItem} href={contact.href} target="_blank">
						{React.createElement(contact.icon)}
					</LinkComponent>
				</li>
			))}
		</ul>
	);
};
