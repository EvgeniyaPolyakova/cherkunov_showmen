import { useSnackbar, VariantType } from 'notistack';
import { useCallback } from 'react';

interface useNotificationProps {
	message: string;
	variant: VariantType;
	duration?: number;
}

export const useNotification = () => {
	const { enqueueSnackbar } = useSnackbar();

	const notify = useCallback(
		({ message, variant, duration = 2000 }: useNotificationProps) => {
			enqueueSnackbar(message, {
				variant,
				anchorOrigin: { horizontal: 'right', vertical: 'top' },
				autoHideDuration: duration,
			});
		},
		[enqueueSnackbar]
	);

	return notify;
};
