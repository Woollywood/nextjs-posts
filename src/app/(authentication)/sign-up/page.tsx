import { NextPage } from 'next';
import { Form } from '@/components/shared/forms/Form';
import { SignUpForm } from '../components/forms/SignUpForm';
import { signup } from '../actions';

const Page: NextPage = () => {
	return (
		<div className='flex h-full items-center justify-center'>
			<Form action={signup}>
				<SignUpForm />
			</Form>
		</div>
	);
};

export default Page;
