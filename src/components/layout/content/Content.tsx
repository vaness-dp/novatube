import type { PropsWithChildren } from 'react'

import { Header } from './header/Header'

export function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex-[1_1_0%]'>
			<Header />
			<section className='p-layout'>{children}</section>
		</div>
	)
}
