import type { IChannel } from './channel.types'
import type { IComment } from './comment.types'
import type { IPagination } from './pagination.types'

export interface IVideo {
	id: string
	publicId: string
	title: string
	description: string
	slug: string
	thumbnailUrl: string
	videoFileName: string
	viewsCount: number
	isPublic: boolean
	channel: IChannel
	createdAt: string
}

export interface IFullVideo extends IVideo {
	likes: []
	comments: IComment[]
}

export interface ISingleVideoResponse extends IFullVideo {
	similarVideos: IVideo[]
}

export interface IStudioVideoResponse extends IFullVideo {
	tags: {
		id: string
		name: string
	}[]
}

export interface IVideosPagination extends IPagination {
	videos: IFullVideo[]
}
