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
						Легко, весело и точно про вас и ваших гостей! Меня выбирают за профессионализм, а в процессе подготовки
						доверяют как близкому другу. Я нахожусь на связи с вами 24/7, так что можете обращаться по любым возникающим
						вопросам.
					</p>
					<LinkComponent
						classname={s.link}
						href="https://vk.com/showmencherkunov?z=photo139008289_457259599%2Falbum139008289_00%2Frev"
						target="_blank"
					>
						Посмотреть все фотографии
					</LinkComponent>
				</div>

				<div className={s.privatePhoto}>
					<img src="/img/services/services-1.png" alt="Ведущий Юрий Черкунов" />
					<img src="/img/services/services-2.png" alt="Ведущий Юрий Черкунов" />
					<img src="/img/services/services-3.png" alt="Ведущий Юрий Черкунов" />
				</div>
			</div>

			<div className={s.corporateService}>
				<div className={s.corporatePhoto}>
					<img src="/img/services/services-4.png" alt="Ведущий Юрий Черкунов" />
					<img src="/img/services/services-5.png" alt="Ведущий Юрий Черкунов" />
					<img src="/img/services/services-6.png" alt="Ведущий Юрий Черкунов" />
				</div>

				<div className={s.info}>
					<div className={s.label}>Корпоративные и деловые мероприятия</div>
					<p className={s.description}>
						Легко найду общий язык с директором вашей компании, порадую всех, хоть и не работаю бухгалтером. За спиной
						огромное количество корпоративов у крупных фирм, таких как: ПАО «Газпром», Egger, ООО «Профессионал», МТС,
						банк «ВТБ», ГК «Альтаир», Департамент Энергетики и другие.
					</p>
					<LinkComponent
						classname={s.link}
						href="https://vk.com/showmencherkunov?z=photo139008289_457259599%2Falbum139008289_00%2Frev"
						target="_blank"
					>
						Посмотреть все фотографии
					</LinkComponent>
				</div>
			</div>
		</div>
	);
};
