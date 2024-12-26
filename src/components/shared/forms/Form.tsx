'use client';

import React from 'react';
import { FormProvider } from './FormProvider';

type Props<T> = {
	action: (prevState: T | undefined, formData: FormData) => Promise<T>;
} & React.PropsWithChildren;

export const Form = <T,>({ children, action }: Props<T>) => {
	return <FormProvider action={action}>{children}</FormProvider>;
};
