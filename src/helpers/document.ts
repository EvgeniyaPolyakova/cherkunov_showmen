export const toggleBodyScroll = () => {
	const body = document.querySelector('body');
	if (body) {
		if (body.style.overflow === 'hidden') {
			body.style.overflow = 'auto';
		} else {
			body.style.overflow = 'hidden';
		}
	}
};
