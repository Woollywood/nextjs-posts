'use client';

import { useActionState } from 'react';
import { NextPage } from 'next';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { signup } from '../actions';

const Page: NextPage = () => {
	const [state, formAction, isPending] = useActionState(signup, undefined);

	return (
		<div className='flex h-full items-center justify-center'>
			<form className='space-y-4' action={formAction}>
				<Input
					label='First name'
					placeholder='Type your first name'
					name='firstName'
					defaultValue={state?.state.firstName}
				/>
				<Input
					label='Last name'
					placeholder='Type your last name'
					name='lastName'
					defaultValue={state?.state.lastName}
				/>
				<Input
					label='Email'
					placeholder='Type your email'
					name='email'
					type='email'
					defaultValue={state?.state.email}
				/>
				<Input
					label='Password'
					placeholder='Type your password'
					name='password'
					type='password'
					defaultValue={state?.state.password}
				/>
				<div className='flex items-center justify-center py-4'>
					<Button disabled={isPending}>Sign in</Button>
				</div>
			</form>
		</div>
	);
};

export default Page;
