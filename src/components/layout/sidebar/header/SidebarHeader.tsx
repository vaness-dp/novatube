import { Menu, SquarePlay } from 'lucide-react'

export function SidebarHeader() {
	return (
		<div>
			<button>
				<Menu />
			</button>
			<span>
				<SquarePlay />
				<span>Novatube</span>
			</span>
		</div>
	)
}
