import { Play } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { COLORS } from '@/constants/colors.constants'

import { PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page'

export function Logo() {
	const pathname = usePathname()

	return (
		<Link
			href={PAGE.HOME}
			className='inline-flex items-center gap-1.5'
		>
			<Play
				color={COLORS.primary}
				size={25}
			/>
			<span className='text-xl font-medium'>
				{!!pathname.includes(STUDIO_PAGE.HOME) ? 'Studio' : 'NTube'}
			</span>
		</Link>
	)
}
