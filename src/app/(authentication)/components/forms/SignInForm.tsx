'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { FormField } from '@/components/shared/forms/FormField';
import { useFormContext } from '@/components/shared/forms/FormProvider';
import { SignupFormState } from '../../actions';
import { SubmitForm } from '../SubmitForm';

export const SignInForm = () => {
	const { state, formAction } = useFormContext<SignupFormState>();

	return (
		<form className='w-80 space-y-4' action={formAction}>
			<FormField
				fieldName='email'
				render={() => (
					<Input
						label='Email'
						placeholder='Type your email'
						name='email'
						type='email'
						defaultValue={state?.state.email}
					/>
				)}
			/>
			<FormField
				fieldName='password'
				render={() => (
					<Input
						label='Password'
						placeholder='Type your password'
						name='password'
						type='password'
						defaultValue={state?.state.password}
					/>
				)}
			/>
			<SubmitForm>Sign in</SubmitForm>
		</form>
	);
};
