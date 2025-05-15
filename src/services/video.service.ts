import { axiosClassic } from '@/api/axios'

import type { IVideo, IVideosPagination } from '@/types/video.types'

class VideoService {
	private _VIDEOS = '/videos'

	getAll(searchTerm?: string | null) {
		return axiosClassic.get<IVideosPagination>(
			`${this._VIDEOS}`,
			searchTerm
				? {
						params: {
							searchTerm
						}
					}
				: {}
		)
	}

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
	}

	getVideoGames() {
		return axiosClassic.get<IVideosPagination>(`${this._VIDEOS}/games`)
	}

	getExploreVideos() {
		return axiosClassic.get<IVideosPagination>(`${this._VIDEOS}/explore`)
	}
}

export const videoService = new VideoService()
