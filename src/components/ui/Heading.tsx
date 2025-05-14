import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
}

export function Heading({ children, Icon }: Props) {
	return (
		<span className='mb-4 flex items-center gap-1.5 opacity-90'>
			{Icon && <Icon className='text-primary' />}
			<h2 className='text-lg font-semibold'>{children}</h2>
		</span>
	)
}
