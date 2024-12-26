'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { FormField } from '@/components/shared/forms/FormField';
import { useFormContext } from '@/components/shared/forms/FormProvider';
import { SignupFormState } from '../../actions';
import { SubmitForm } from '../SubmitForm';

export const SignUpForm = () => {
	const { state, formAction } = useFormContext<SignupFormState>();

	return (
		<form className='w-80 space-y-4' action={formAction}>
			<FormField
				fieldName='firstName'
				render={() => (
					<Input
						label='First name'
						placeholder='Type your first name'
						name='firstName'
						defaultValue={state?.state.firstName}
					/>
				)}
			/>
			<FormField
				fieldName='lastName'
				render={() => (
					<Input
						label='Last name'
						placeholder='Type your last name'
						name='lastName'
						defaultValue={state?.state.lastName}
					/>
				)}
			/>
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
			<SubmitForm>Sign up</SubmitForm>
		</form>
	);
};
