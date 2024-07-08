import React, { ReactNode } from 'react';
import cn from 'classnames';
import s from './button.module.scss';

type TButtonType = 'button' | 'submit';
type TButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
	children: ReactNode;
	type: TButtonType;
	variant: TButtonVariant;
	classname?: string;
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = ({ children, type, variant, classname, disabled, onClick, ...props }: ButtonProps) => {
	return (
		<button
			type={type}
			className={cn(s.button, variant === 'primary' ? s.primary : s.secondary, classname, { [s.disabled]: disabled })}
			disabled={disabled}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};
