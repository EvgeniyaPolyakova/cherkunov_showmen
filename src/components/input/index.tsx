import React from 'react';
import cn from 'classnames';
import s from './input.module.scss';

interface InputProps {
	label: string;
	value: string;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	// eslint-disable-next-line react/require-default-props
	className?: string;
	// eslint-disable-next-line react/require-default-props
	errorMessage?: string;
}

export const Input = ({ label, value, onChange, className, errorMessage, name }: InputProps) => {
	return (
		<div className={cn(s.group, className)}>
			<input name={name} type="text" className={s.input} value={value} onChange={onChange} required />
			<span className={s.bar} />
			<span className={s.label}>{label}</span>
			{errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
		</div>
	);
};
