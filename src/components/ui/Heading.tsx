import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
	isH1?: boolean
}

export function Heading({ children, Icon, isH1 = false }: Props) {
	return (
		<span className='mb-4 flex items-center gap-1.5 opacity-90'>
			{Icon && <Icon className='text-primary' />}
			{isH1 ? (
				<h1 className='text-lg font-semibold'>{children}</h1>
			) : (
				<h2 className='text-lg font-semibold'>{children}</h2>
			)}
		</span>
	)
}
