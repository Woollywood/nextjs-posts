'use client';

import React, { createContext, useActionState, useContext, useMemo } from 'react';
import { once } from 'lodash-es';

type Props<T> = {
	action: (prevState: T | undefined, formData: FormData) => Promise<T>;
} & React.PropsWithChildren;

interface FormContextState<T> {
	state: Awaited<T> | undefined;
	formAction: (payload: FormData) => void;
	isPending: boolean;
}

const createFormContext = once(<T,>() => createContext({} as FormContextState<T>));
export const useFormContext = <T,>() => useContext(createFormContext<T>());

export const FormProvider = <T,>({ children, action }: Props<T>) => {
	const FormContext = createFormContext<T>();
	const [state, formAction, isPending] = useActionState(action, undefined);
	const value = useMemo<FormContextState<T>>(
		() => ({ state, formAction, isPending }),
		[state, formAction, isPending],
	);

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
