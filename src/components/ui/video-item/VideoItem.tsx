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
	isImagePriority?: boolean
}

export function VideoItem({ video, Icon, isImagePriority }: Props) {
	return (
		<div>
			<div className='relative mb-1.5'>
				<Link href={PAGE.VIDEO(video.slug)}>
					<Image
						src={video.thumbnailUrl}
						width={250}
						height={140}
						alt={video.title}
						className='w-full rounded-md'
						priority={isImagePriority}
					/>
				</Link>
				<Link
					href={PAGE.CHANNEL(video?.channel?.slug || '')}
					className='absolute bottom-2 left-1.5'
				>
					<Image
						src={video.channel?.avatarUrl || ''}
						width={35}
						height={35}
						alt={video?.channel?.name || ''}
						className='rounded-full shadow'
						priority={isImagePriority}
					/>
				</Link>
			</div>
			<div className='mb-1.5 flex items-center justify-between'>
				<div className='flex items-center gap-0.5'>
					{Icon && (
						<Icon
							className='text-red-600'
							size={20}
						/>
					)}
					<span className='text-sm text-gray-400'>{transformCount(video.viewsCount)}</span>
				</div>
				<div>
					<span className='text-xs text-gray-400'>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div className='mb-1'>
				<Link
					href={PAGE.VIDEO(video.slug)}
					className='line-clamp-2 leading-[1.3]'
				>
					{video.title}
				</Link>
			</div>
			<div>
				<Link
					href={PAGE.CHANNEL(video.channel.slug)}
					className='flex items-center gap-1'
				>
					<span className='text-sm text-gray-400'>{video.channel.name}</span>
					{video.channel.isVerified && (
						<span>
							<BadgeCheck
								className='text-green-500'
								size={15}
							/>
						</span>
					)}
				</Link>
			</div>
		</div>
	)
}
