'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/libs/supabase/server';
import { z } from 'zod';

const signinSchema = z.object({
	email: z.string().email({ message: 'Invalid email' }),
	password: z.string().min(5, { message: 'Password must contain at least 5 characters' }),
});

interface SigninFields {
	email: string;
	password: string;
}
export type SigninFormState = {
	errors?: {
		email?: string[];
		password?: string[];
	};
	state: SigninFields;
	message?: string;
};

export async function signin(prevState: SigninFormState | undefined, formData: FormData): Promise<SigninFormState> {
	const supabase = await createClient();

	const formFields = {
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};
	const validatedFields = signinSchema.safeParse(formFields);
	const { success, data, error: validationError } = validatedFields;

	if (!success) {
		return { state: formFields, errors: validationError.flatten().fieldErrors };
	}

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		redirect('/error');
	}

	revalidatePath('/', 'layout');
	redirect('/');
}

const signupSchema = z.object({
	firstName: z.string().min(3, { message: 'First name must contain at least 3 characters' }),
	lastName: z.string().min(3, { message: 'Last name must contain at least 3 characters' }),
	email: z.string().email({ message: 'Invalid email' }),
	password: z.string().min(5, { message: 'Password must contain at least 5 characters' }),
});

interface SignupFields {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
export type SignupFormState = {
	errors?: {
		firstName?: string[];
		lastName?: string[];
		email?: string[];
		password?: string[];
	};
	state: SignupFields;
	message?: string;
};

export async function signup(prevState: SignupFormState | undefined, formData: FormData): Promise<SignupFormState> {
	const supabase = await createClient();

	const formFields = {
		firstName: formData.get('firstName') as string,
		lastName: formData.get('lastName') as string,
		email: formData.get('email') as string,
		password: formData.get('password') as string,
	};
	const validatedFields = signupSchema.safeParse(formFields);
	const { success, data, error: validationError } = validatedFields;

	if (!success) {
		return { state: formFields, errors: validationError.flatten().fieldErrors };
	}

	const { error } = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
		options: { data: { full_name: `${data.firstName} ${data.lastName}` } },
	});

	if (error) {
		redirect('/error');
	}

	revalidatePath('/', 'layout');
	redirect('/confirm');
}
