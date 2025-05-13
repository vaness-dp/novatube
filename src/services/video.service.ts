import { axiosClassic } from '@/api/axios'

import type { IVideo } from '@/types/video.types'

class VideoService {
	private _VIDEOS = '/videos'

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
	}
}

export const videoService = new VideoService()
