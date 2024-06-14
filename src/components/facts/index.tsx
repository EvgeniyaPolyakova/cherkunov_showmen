import React from 'react';
import s from './facts.module.scss';

export const Facts = () => {
	return (
		<ul className={s.list}>
			<li className={s.listItem}>Родился в городе невест и не остался в стороне</li>
			<li className={s.listItem}>Опыт работы ведущим более 7 лет</li>
			<li className={s.listItem}>
				Являюсь чемпионом России по спортивно-бальным танцам, преподаю любые танцы мира: от сальсы до вальса
			</li>
			<li className={s.listItem}>Помогаю молодоженам поставить танец мечты</li>
			<li className={s.listItem}>Имеется классный диджей, а также много мощного оборудования на ваше мероприятие.</li>
			<li className={s.listItem}>
				Люблю детей не меньше взрослых, поэтому на ваших праздниках я не оставлю их без внимания
			</li>
		</ul>
	);
};
