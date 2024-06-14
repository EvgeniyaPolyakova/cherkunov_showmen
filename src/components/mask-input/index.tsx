import React from 'react';
import { IMaskInput } from 'react-imask';
import cn from 'classnames';
import s from './mask-input.module.scss';

type TMask = ({ mask: string } | { mask: RegExp })[] | string | RegExp;

interface InputMaskProps {
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	mask: TMask;
	isInvalid?: boolean;
	classname?: string;
	labelClassname?: string;
	label?: string;
	containerClassname?: string;
	errorMessage?: string;
	errorMessageWithBg?: boolean;
}

export const InputMask = ({
	value,
	onChange,
	name,
	mask,
	isInvalid,
	classname,
	labelClassname,
	errorMessage,
	containerClassname,
	errorMessageWithBg,
	label,
	...props
}: InputMaskProps) => {
	return (
		<div className={cn(s.group, classname)}>
			{
				// @ts-ignore
				<IMaskInput
					name={name}
					mask={mask}
					value={value}
					required
					// onAccept={(val, mask) => console.log(val, mask)}
					// placeholder={placeholder}
					className={cn(s.input, { [s.error]: isInvalid }, classname)}
					onChange={onChange}
					autoComplete="off"
					{...props}
				/>
			}
			<span className={s.bar} />
			<span className={s.label}>{label}</span>
			{errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
		</div>
	);
};
