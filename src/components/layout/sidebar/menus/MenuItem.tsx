import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
	item: ISidebarItem
}

export function MenuItem({ item }: Props) {
	return (
		<li>
			<Link
				href={item.link}
				className='group flex items-center gap-5 py-3'
			>
				<item.icon className='group-hover:text-primary min-w-6 transition group-hover:rotate-6' />
				<span>{item.label}</span>
			</Link>
			{item.isBottomBorder && <span className='bg-border my-5 block h-0.25 w-full' />}
		</li>
	)
}
