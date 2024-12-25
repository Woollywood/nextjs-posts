import { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const Page: NextPage = () => {
	return (
		<div className='flex h-full flex-col items-center justify-center gap-12'>
			<p className='text-4xl'>Check your email for confirm link</p>
			<Link href='/'>
				<Button>Back home</Button>
			</Link>
		</div>
	);
};

export default Page;
