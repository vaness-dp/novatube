import { BadgeCheck, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PAGE } from '@/config/public-page.config'

import { transformCount } from '@/utils/transform-count'
import { transformDate } from '@/utils/transform-date'

import type { IVideo } from '@/types/video.types'

interface Props {
	video: IVideo
	Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<div>
			<div>
				<div>
					<Link href={PAGE.VIDEO(video.slug)}>
						<Image
							src={video.thumbnailUrl}
							width={250}
							height={140}
							alt={video.title}
						/>
					</Link>
					<Link href={PAGE.CHANNEL(video.channel.slug)}>
						<Image
							src={video.channel.avatarUrl}
							width={30}
							height={30}
							alt={video.channel.description}
						/>
					</Link>
				</div>
				<div>
					{Icon && <Icon />}
					<span>{transformCount(video.viewsCount)}</span>
				</div>
				<div>
					<span>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div>{video.title}</div>
			<div>
				<span>{video.channel.description}</span>
				<span>
					<BadgeCheck className='text-green-500' />
				</span>
			</div>
		</div>
	)
}
