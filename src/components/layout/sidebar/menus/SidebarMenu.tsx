import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
	title?: string
	menu: ISidebarItem[]
}

export function SidebarMenu({ menu, title }: Props) {
	return (
		<nav>
			{title && <div>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.label}
						item={menuItem}
					/>
				))}
			</ul>
		</nav>
	)
}
