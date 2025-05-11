import cn from 'clsx'
import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
	isActive: boolean
}

export function MenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				href={item.link}
				className='flex items-center gap-5 py-3'
			>
				<item.icon
					className={cn('min-w-6', {
						'text-primary rotate-6 transition': isActive
					})}
				/>
				<span>{item.label}</span>
			</Link>
			{item.isBottomBorder && <span className='bg-border my-5 block h-0.25 w-full' />}
		</li>
	)
}
