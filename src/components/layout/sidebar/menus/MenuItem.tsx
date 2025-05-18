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
				className={'group flex items-center gap-5 py-3'}
			>
				<item.icon
					className={cn('min-w-6', {
						'group-hover:text-primary transition group-hover:rotate-6': !isActive,
						'text-primary': isActive
					})}
				/>
				<span>{item.label}</span>
			</Link>
			{item.isBottomBorder && <span className='bg-border my-5 block h-0.25 w-full' />}
		</li>
	)
}
