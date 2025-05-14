import { Bell, LayoutGrid, PlusSquare } from 'lucide-react'
import Link from 'next/link'

import { STUDIO_PAGE } from '@/config/studio-page'

export function HeaderLinks() {
	return (
		<div className='flex items-center gap-2'>
			<Link
				href={STUDIO_PAGE.UPLOAD_VIDEO}
				className='p-2 opacity-50 transition-opacity hover:opacity-100'
			>
				<PlusSquare size={20} />
			</Link>
			<Link
				href={STUDIO_PAGE.HOME}
				className='p-2 opacity-50 transition-opacity hover:opacity-100'
			>
				<LayoutGrid size={20} />
			</Link>
			<Link
				href={STUDIO_PAGE.HOME}
				className='p-2 opacity-50 transition-opacity hover:opacity-100'
			>
				<Bell size={20} />
			</Link>
		</div>
	)
}
