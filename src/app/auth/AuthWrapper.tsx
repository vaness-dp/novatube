import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	heading: string
}

export function AuthWrapper({ children, heading }: Props) {
	return (
		<div className='flex h-full min-h-screen w-full items-center justify-center'>
			<div className='m-[0_auto] w-70.5'>
				<h1 className='mb-10 text-center text-2xl leading-7 font-semibold'>{heading}</h1>
				{children}
			</div>
		</div>
	)
}
