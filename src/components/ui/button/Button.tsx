import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	children: ReactNode
}

export function Button({ isLoading, children, ...props }: Props) {
	return (
		<button
			className='h-10.5 w-full rounded-[8px] bg-white px-5 py-2 font-normal text-black transition-colors hover:bg-white/70 disabled:bg-gray-400'
			disabled={isLoading || props.disabled}
			{...props}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	)
}
