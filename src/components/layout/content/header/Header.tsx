import dynamic from 'next/dynamic'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

import { HeaderLinks } from './HeaderLinks'
import { SearchField } from './SearchField'

const DynamicHeaderProfile = dynamic(
	() => import('./profile/HeaderProfile').then(mod => mod.HeaderProfile),
	{ ssr: false, loading: () => <SkeletonLoader className='mb-0 w-10 rounded-md' /> }
)

export function Header() {
	return (
		<header className='p-layout border-border flex items-center justify-between border-b'>
			<SearchField />
			<div className='flex items-center gap-8'>
				<HeaderLinks />
				<DynamicHeaderProfile />
			</div>
		</header>
	)
}
