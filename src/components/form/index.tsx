import React, { useState } from 'react';
import utils from '@/styles/utils.module.scss';
import cn from 'classnames';
import s from './form.module.scss';
import { Input } from '../input';
import { useFormik } from 'formik';
import { Button } from '../button';
import DatePicker from 'react-multi-date-picker';
import { ruCalendar } from '@/helpers/calendar';
import { InputMask } from '../mask-input';
import { RadioButton } from '../radio-button';
import { Textarea } from '../textarea';
import * as yup from 'yup';
import { phoneRegex } from '@/helpers/regex';
import axios, { AxiosError } from 'axios';
import { useNotification } from '@/hooks/useNotification';
import { SuccessModal } from '../success-modal';
import { toggleBodyScroll } from '@/helpers/document';

const TELEGRAM_BOT_KEY = '7246557830:AAHlTjrsZYldk4k_z-brKHi09MI3tz8JvLo';
const TELEGRAM_CHAT_ID = -4265392774;

// const TELEGRAM_BOT_KEY = process.env.NEXT_PUBLIC_TELEGRAM_BOT_KEY;
// const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

const validationSchema = yup.object().shape({
	name: yup
		.string()
		.required('Напишите ваше имя')
		.min(2, 'Длина имени должна составлять не менее 2-х символов')
		.max(30, 'Длина имени не должна быть больше 30 символов'),
	date: yup.string().required('Выберите дату мероприятия'),
	phone: yup.string().test('test-phone', 'Введите ваш номер телефона', (value: any) => {
		const isValidPhone = phoneRegex.test(value);
		console.log(isValidPhone);

		if (!isValidPhone) {
			return false;
		}
		return true;
	}),
	event: yup.string().required('Выберите формат мероприятия'),
	comment: yup.string().max(300, 'Длина комментария не должна быть больше 300 символов'),
});

export const PhoneMask = '+{7} (000) 000-00-00';

export const Form = () => {
	const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
	const [isSending, setIsSending] = useState<boolean>(false);
	const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
	const notify = useNotification();

	const formik = useFormik({
		initialValues: {
			name: '',
			date: '',
			phone: '',
			event: '',
			otherEvent: '',
			comment: '',
		},
		validationSchema,
		validateOnChange: false,
		onSubmit: async values => {
			try {
				setIsSending(true);
				await axios.post('/api/send-message', { values });
				// await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_KEY}/sendMessage`, {
				// 	text: [
				// 		`${values.date}`,
				// 		`${values.name}`,
				// 		`${values.phone}`,
				// 		`${values.event === 'Другой вариант' ? `Другой вариант: ${values.otherEvent}` : `${values.event}`}`,
				// 		`${values.comment}`,
				// 	].join('\n\n'),
				// 	chat_id: TELEGRAM_CHAT_ID,
				// });
				formik.resetForm();
				setIsSuccessModalOpen(true);
				toggleBodyScroll();
				setIsSending(false);
			} catch (error: any) {
				notify({ message: 'Произошла ошибка, повторите попытку позже', variant: 'error' });
			}
		},
	});

	const handleOpenCalendar = () => {
		setIsCalendarOpen(true);
	};

	const handleCloseCalendar = () => {
		setIsCalendarOpen(false);
	};

	return (
		<div id="book" className={cn(utils.block, utils.container, s.formWrapper)}>
			<p className={cn(utils.title, s.title)}>Успей забронировать дату</p>
			<form onSubmit={formik.handleSubmit} className={s.form}>
				<div className={s.inputs}>
					<div className={s.leftInputs}>
						<Input
							label="Имя"
							name="name"
							onChange={formik.handleChange}
							value={formik.values.name}
							errorMessage={formik.errors.name}
						/>
						<InputMask
							// placeholder="Введите телефон"
							name="phone"
							value={formik.values.phone}
							label="Телефон"
							classname={s.profileInput}
							onChange={formik.handleChange}
							mask={PhoneMask}
							// isInvalid={!!formik.errors.phone}
							errorMessage={formik.errors.phone}
							containerClassname={s.phoneInput}
						/>
						<div>
							<DatePicker
								value={formik.values.date || null}
								//@ts-ignore
								onChange={date => formik.setFieldValue('date', date)}
								locale={ruCalendar}
								minDate={new Date()}
								calendarPosition="bottom-center"
								format="DD.MM.YYYY"
								onOpen={handleOpenCalendar}
								onClose={handleCloseCalendar}
								weekStartDayIndex={1}
								render={(value: string, openCalendar: any) => {
									return (
										<button
											type="button"
											onClick={openCalendar}
											className={cn(s.eventDate, { [s.open]: isCalendarOpen })}
										>
											{value ? (
												<span className={s.eventDateButtonValue}>{value}</span>
											) : (
												<span className={s.eventDatePlaceholder}>Дата события</span>
											)}
										</button>
									);
								}}
							/>
							{formik.errors.date && <span className={s.errorMessage}>{formik.errors.date}</span>}
						</div>
					</div>
					<div className={s.eventsList}>
						<p className={s.eventsListTitle}>Формат мероприятия</p>
						<RadioButton
							name="event"
							id="wedding"
							label="Свадьба"
							value="Свадьба"
							isSelected={formik.values.event === 'Свадьба'}
							onChange={formik.handleChange}
						/>
						<RadioButton
							name="event"
							id="anniversary"
							label="Юбилей"
							value="Юбилей"
							isSelected={formik.values.event === 'Юбилей'}
							onChange={formik.handleChange}
						/>
						<RadioButton
							name="event"
							id="corporate"
							label="Корпоратив"
							value="Корпоратив"
							isSelected={formik.values.event === 'Корпоратив'}
							onChange={formik.handleChange}
						/>
						<RadioButton
							name="event"
							id="final"
							label="Выпускной"
							value="Выпускной"
							isSelected={formik.values.event === 'Выпускной'}
							onChange={formik.handleChange}
						/>
						<RadioButton
							name="event"
							id="other"
							label="Другой вариант"
							value="Другой вариант"
							isSelected={formik.values.event === 'Другой вариант'}
							withInput
							inputValue={formik.values.otherEvent}
							inputName="otherEvent"
							onChange={formik.handleChange}
						/>
						{formik.errors.event && <span className={s.errorMessageDate}>{formik.errors.event}</span>}
					</div>
				</div>
				<div className={s.commentWrap}>
					<p className={s.commentTitle}>Ваш комметарий</p>
					<Textarea
						name="comment"
						value={formik.values.comment}
						onChange={formik.handleChange}
						placeholder="Напишите свои пожелания"
					/>
				</div>

				{/* disabled пока отправляется форма
					обработка успешной отправки формы
					обработка ошибок */}
				<Button variant="primary" type="submit" classname={s.submitBtn} disabled={isSending}>
					Отправить
				</Button>
				{/* {isSendingSuccess &&  */}
				{isSuccessModalOpen && <SuccessModal isOpen={isSuccessModalOpen} setIsOpen={setIsSuccessModalOpen} />}
				{/* } */}
			</form>
		</div>
	);
};
