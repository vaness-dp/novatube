import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { PAGE } from '@/config/public-page.config'

import { Explore } from './explore/Explore'
import { videoService } from '@/services/video.service'

export const revalidate = 100

export const metadata: Metadata = {
	title: 'Home',
	description: 'Best video platform',
	alternates: {
		canonical: PAGE.HOME
	},
	openGraph: {
		type: 'website',
		url: PAGE.HOME,
		title: 'Novatube'
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data.slice(0, 6)

	return (
		<section>
			<Heading Icon={Flame}>Trending</Heading>
			<div className='mb-10 grid grid-cols-6 gap-6'>
				{trendingVideos.length &&
					trendingVideos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
							isImagePriority
						/>
					))}
			</div>
			<Explore />
		</section>
	)
}
