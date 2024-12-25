import React from 'react';
import { cn } from '@/utils/classNames';

export const Button = (
	{ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>,
	ref?: React.Ref<HTMLButtonElement>,
) => {
	return (
		<button
			className={cn(
				'flex items-center justify-center rounded-md bg-gray-300 px-3 py-2 font-medium text-black transition-colors hover:bg-gray-400 disabled:bg-gray-600',
				className,
			)}
			{...props}
			ref={ref}
		/>
	);
};
