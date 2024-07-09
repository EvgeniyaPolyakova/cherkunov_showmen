const IS_PROD = process.env.NEXT_PUBLIC_IS_PROD;

declare global {
	interface Window {
		ym: any;
	}
}

export function ymSendStatistic(action = '', name = '', params = {}) {
	if (IS_PROD !== 'true') {
		return;
	}

	window.ym(process.env.NEXT_PUBLIC_YM_KEY, action, name, params);
}
