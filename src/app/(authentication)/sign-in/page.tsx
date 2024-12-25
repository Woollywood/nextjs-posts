'use client';

import React, { useActionState } from 'react';
import { signin } from '../actions';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const Page: React.FC = () => {
	const [state, formAction, isPending] = useActionState(signin, undefined);

	return (
		<div className='flex h-full items-center justify-center'>
			<form className='space-y-4' action={formAction}>
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
