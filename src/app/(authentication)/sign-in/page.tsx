import { NextPage } from 'next';
import { Form } from '@/components/shared/forms/Form';
import { SignInForm } from '../components/forms/SignInForm';
import { signin } from '../actions';

const Page: NextPage = () => {
	return (
		<div className='flex h-full items-center justify-center'>
			<Form action={signin}>
				<SignInForm />
			</Form>
		</div>
	);
};

export default Page;
