import { instance } from '@/api/axios'

import type { ISettingsData } from '@/app/studio/settings/settings.types'
import type { IProfileResponse } from '@/types/user.types'

class UserService {
	private _USERS = '/users'

	getProfile() {
		return instance.get<IProfileResponse>(`${this._USERS}/profile`)
	}

	updateProfile(data: ISettingsData) {
		return instance.put<boolean>(`${this._USERS}/profile`, data)
	}
}

export const userService = new UserService()
