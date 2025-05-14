import Image from 'next/image'
import Link from 'next/link'

import { STUDIO_PAGE } from '@/config/studio-page'

export function HeaderAvatar() {
	return (
		<div className='relative'>
			<Link
				href={STUDIO_PAGE.SETTINGS}
				className='shrink-0'
				aria-label='Open settings'
			>
				<Image
					src='/images/avatar.png'
					alt='profile avatar'
					width={35}
					height={35}
					className='rounded-lg'
				/>
			</Link>
		</div>
	)
}
