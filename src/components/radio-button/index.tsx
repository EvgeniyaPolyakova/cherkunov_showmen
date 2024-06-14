import React from 'react';
import cn from 'classnames';
import utils from '@/styles/utils.module.scss';
import s from './radio-button.module.scss';

interface RadioButtonProps {
	name: string;
	id: string;
	value: string;
	label: string;
	isSelected: boolean;
	onChange: (e: React.ChangeEvent<any>) => void;
	withInput?: boolean;
	placeholder?: string;
	inputValue?: string;
	inputName?: string;
}

export const RadioButton = ({
	name,
	id,
	value,
	label,
	isSelected,
	onChange,
	withInput,
	inputValue,
	inputName,
}: RadioButtonProps) => {
	return (
		<>
			<input
				id={id}
				name={name}
				value={value}
				checked={isSelected}
				type="radio"
				className={cn(utils.visuallyHidden, s.input)}
				onChange={onChange}
			/>
			{withInput && isSelected ? (
				<label htmlFor={id} className={s.label}>
					<input
						name={inputName}
						type="text"
						className={s.inputText}
						value={inputValue}
						onChange={onChange}
						required
						placeholder={value}
					/>
					<span className={s.bar} />
				</label>
			) : (
				<label htmlFor={id} className={s.label}>
					{label}
				</label>
			)}
		</>
	);
};
