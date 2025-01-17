import React from 'react';
import { NextPage } from 'next';
import Form from 'next/form';
import { cn } from '@/utils/classNames';
import Link from 'next/link';
import { createClient } from '@/libs/supabase/server';
import { Button } from '../ui/Button';
import { signout } from '@/app/(authentication)/actions';

const Header: NextPage<React.HTMLAttributes<HTMLHeadElement>> = async ({ className, ...props }) => {
	const session = await createClient();
	const {
		data: { user },
	} = await session.auth.getUser();

	return (
		<header className={cn('h-header-height border-b border-gray-600', className)} {...props}>
			<div className='container flex h-full items-center justify-between'>
				<Link href='/' className='text-4xl font-medium'>
					Logo
				</Link>
				{user ? (
					<Form action={signout}>
						<Button>Sign out</Button>
					</Form>
				) : (
					<div className='flex items-center gap-2'>
						<Link href='/sign-in'>
							<Button>Sign in</Button>
						</Link>
						<Link href='/sign-up'>
							<Button>Sign up</Button>
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
