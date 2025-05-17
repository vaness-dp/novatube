import type { LinkProps } from 'next/link'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TLink = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

interface Props extends TLink {
	isLoading?: boolean
	children: ReactNode
}

export function LinkButton({ children, isLoading, ...props }: Props) {
	return (
		<Link
			className='bg-primary flex items-center gap-2 rounded px-4 py-2 font-semibold text-white transition-colors hover:bg-red-400 disabled:bg-gray-400'
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</Link>
	)
}
