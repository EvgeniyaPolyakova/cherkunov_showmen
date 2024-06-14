import React from 'react';
import cn from 'classnames';
import utils from '@/styles/utils.module.scss';
import s from './services.module.scss';
import { LinkComponent } from '../link';

export const Services = () => {
	return (
		<div id="services" className={cn(utils.block, utils.container)}>
			<p className={cn(utils.title, s.title)}>Услуги ведущего</p>

			<div className={s.privateService}>
				<div className={s.info}>
					<div className={s.label}>Частные праздники и торжества</div>
					<p className={s.description}>
						Легко, непринужденно и точно про вас и ваших гостей! Меня выбирают за профессионализм, а в процессе
						подготовки доверяют как близкому другу. Именно по этой причине чаще всего я становлюсь «семейным» ведущим,
						которого приглашают на свадьбы, дни рождения и другие важные события одного круга гостей.
					</p>
					<LinkComponent
						classname={s.link}
						href="https://vk.com/showmencherkunov?z=photo139008289_457259599%2Falbum139008289_00%2Frev"
					>
						Посмотреть все фотографии
					</LinkComponent>
				</div>

				<div className={s.privatePhoto}>
					<img src="/img/services/services-1.png" />
					<img src="/img/services/services-2.png" />
					<img src="/img/services/services-3.png" />
				</div>
			</div>

			<div className={s.corporateService}>
				<div className={s.corporatePhoto}>
					<img src="/img/services/services-4.png" />
					<img src="/img/services/services-5.png" />
					<img src="/img/services/services-6.png" />
				</div>

				<div className={s.info}>
					<div className={s.label}>Корпоративные и деловые мероприятия</div>
					<p className={s.description}>
						Легко нахожу общий язык с маркетологами, HR'ами и event-продюсерами. Не пугаюсь первых лиц, протокольных
						служб и голосов в голове, потому что знаю, что это режиссер в in-ear. Решаю задачи, а не устраиваю бенефис.
					</p>
					<LinkComponent
						classname={s.link}
						href="https://vk.com/showmencherkunov?z=photo139008289_457259599%2Falbum139008289_00%2Frev"
					>
						Посмотреть все фотографии
					</LinkComponent>
				</div>
			</div>
		</div>
	);
};
