import React from 'react';
import { NextPage } from 'next';
import { cn } from '@/utils/classNames';

const Footer: NextPage<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
	return <footer className={cn('', className)} {...props}></footer>;
};

export default Footer;
