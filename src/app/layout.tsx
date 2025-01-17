import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { cn } from '@/utils/classNames';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const roboto = Roboto({
	variable: '--font-primary',
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(roboto.variable, 'grid min-h-screen grid-rows-[auto_1fr_auto] gap-12')}>
				<Header className='' />
				<main className='container'>{children}</main>
				<Footer className='container' />
			</body>
		</html>
	);
}
