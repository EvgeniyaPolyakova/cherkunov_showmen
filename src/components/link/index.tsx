import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LinkProps {
	href: string;
	children: ReactNode;
	classname?: string;
	target?: string;
}

export const LinkComponent = ({ href, children, classname, target, ...props }: LinkProps) => {
	return (
		<Link href={href} className={classname} target={target} {...props}>
			{children}
		</Link>
	);
};
