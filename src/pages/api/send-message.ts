import axios from 'axios';

const TELEGRAM_BOT_KEY = '7246557830:AAHlTjrsZYldk4k_z-brKHi09MI3tz8JvLo';
const TELEGRAM_CHAT_ID = -4265392774;

export default async function SendMessageTg(req: any, res: any) {
	const body = { ...req.body };
	try {
		await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_KEY}/sendMessage`, {
			text: [
				`${body.values.date}`,
				`${body.values.name}`,
				`${body.values.phone}`,
				`${body.values.event === 'Другой вариант' ? `Другой вариант: ${body.values.otherEvent}` : `${body.values.event}`}`,
				`${body.values.comment}`,
			].join('\n\n'),
			chat_id: TELEGRAM_CHAT_ID,
		});

		res.status(200).json({ result: 'success' });
	} catch (e: any) {
		if (e.response) {
			res.status(e.response.status).json({ ...e.response.data });
		}
	}
}
