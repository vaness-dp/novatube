import { Menu, Play } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PAGE } from '@/config/public-page.config'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='mb-12 flex items-center gap-6'>
			<button
				className='opacity-80 transition-opacity hover:opacity-100'
				onClick={toggleSidebar}
				title='Toggle sidebar'
			>
				<Menu size={28} />
			</button>
			<Link
				href={PAGE.HOME}
				className='flex items-center gap-1'
			>
				<Play
					color={COLORS.primary}
					size={25}
				/>
				<span className='text-2xl font-bold'>NTube</span>
			</Link>
		</div>
	)
}
