import { Flame } from 'lucide-react'

import { VideoItem } from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export const revalidate = 100

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data.slice(0, 6)

	return (
		<section>
			{!!trendingVideos.length && (
				<section className='mb-10'>
					<h1>Trending</h1>
					<div className='grid-6-cols'>
						{trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
								isImagePriority
							/>
						))}
					</div>
				</section>
			)}
		</section>
	)
}
