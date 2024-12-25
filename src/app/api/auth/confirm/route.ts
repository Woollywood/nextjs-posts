import { type NextRequest, NextResponse } from 'next/server';

import { createClient } from '@/libs/supabase/server';
import { MobileOtpType } from '@supabase/supabase-js';

// Creating a handler to a GET request to route /auth/confirm
export async function GET(request: NextRequest) {
	console.log('confirm');

	const { searchParams } = new URL(request.url);
	const token_hash = searchParams.get('token_hash');
	const type = searchParams.get('type') as MobileOtpType;
	const next = '/';

	// Create redirect link without the secret token
	const redirectTo = request.nextUrl.clone();
	redirectTo.pathname = next;
	redirectTo.searchParams.delete('token_hash');
	redirectTo.searchParams.delete('type');

	if (token_hash && type) {
		const supabase = await createClient();

		const { error } = await supabase.auth.verifyOtp({
			type,
			// @ts-expect-error ignore
			token_hash,
		});
		if (!error) {
			redirectTo.searchParams.delete('next');
			return NextResponse.redirect(redirectTo);
		}
	}

	// return the user to an error page with some instructions
	redirectTo.pathname = '/error';
	return NextResponse.redirect(redirectTo);
}
