'use client';

import React from 'react';
import { useFormContext } from '@/components/shared/forms/FormProvider';
import { Button } from '@/components/ui/Button';

export const SubmitForm: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { isPending } = useFormContext();

	return (
		<div className='flex items-center justify-center py-4'>
			<Button disabled={isPending}>{children}</Button>
		</div>
	);
};
