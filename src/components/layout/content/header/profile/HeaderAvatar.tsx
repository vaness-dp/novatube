import Image from 'next/image'
import Link from 'next/link'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { STUDIO_PAGE } from '@/config/studio-page'

import { useProfile } from '@/hooks/useProfile'

export function HeaderAvatar() {
	const { profile, isLoading } = useProfile()

	if (isLoading) return <SkeletonLoader className='mb-0 w-10 rounded-md' />

	return (
		<div className='relative'>
			<Link
				href={STUDIO_PAGE.SETTINGS}
				className='shrink-0'
				aria-label='Open settings'
			>
				<Image
					src={profile?.channel?.avatarUrl || '/images/avatar.png'}
					alt='profile avatar'
					width={35}
					height={35}
					className='rounded-lg'
				/>
			</Link>
		</div>
	)
}
