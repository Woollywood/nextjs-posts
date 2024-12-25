import React, { useId } from 'react';
import { cn } from '@/utils/classNames';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Input = ({ className, label, ...props }: Props, ref?: React.Ref<HTMLInputElement> | undefined) => {
	const hasLabel = label && label.length > 0;
	const id = useId();
	const _className = cn(
		'px-3 py-2 ring-1 ring-white bg-transparent rounded-md placeholder:text-gray-600 hover:ring-gray-400 transition-shadow focus:ring-gray-400 outline-none text-sm',
		className,
	);

	return hasLabel ? (
		<div>
			<label htmlFor={id} className='mb-1 block text-sm font-medium text-white'>
				{label}
			</label>
			<input className={_className} {...props} ref={ref} />
		</div>
	) : (
		<input className={_className} {...props} ref={ref} />
	);
};
