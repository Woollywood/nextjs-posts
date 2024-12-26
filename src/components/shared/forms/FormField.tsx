import React from 'react';
import { isNil } from 'lodash-es';
import { useFormContext } from './FormProvider';
import { cn } from '@/utils/classNames';

interface Props {
	fieldName: string;
	render: () => React.ReactElement;
}

export const FormField = ({ fieldName, render }: Props) => {
	const { state } = useFormContext();

	const stateErrors = !isNil(state)
		? ((state as Record<'state' | 'errors' | 'message', unknown>).errors as Record<string, string[]>)
		: undefined;
	const isErrors = !isNil(state) && stateErrors?.[fieldName] && stateErrors[fieldName].length > 0;

	return (
		<div className={cn({ 'space-y-1': isErrors })}>
			{render()}
			{isErrors &&
				stateErrors[fieldName].map((error) => (
					<span key={error} className='block text-sm font-medium text-red-600'>
						{error}
					</span>
				))}
		</div>
	);
};
