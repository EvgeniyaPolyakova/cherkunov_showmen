import React, { ChangeEvent } from 'react';
import s from './textarea.module.scss';

interface TextareaProps {
	name: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder: string;
}

export const Textarea = ({ value, onChange, placeholder, name }: TextareaProps) => {
	return (
		<textarea name={name} value={value} rows={7} onChange={onChange} className={s.textarea} placeholder={placeholder} />
	);
};
