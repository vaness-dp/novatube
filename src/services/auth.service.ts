import Cookies from 'js-cookie'

import { useAuthStore } from '@/store/useAuthStore'

import { axiosClassic } from '@/api/axios'

import type { IAuthData } from '@/app/auth/form/auth-form.types'
import { EnumTokens } from '@/types/auth.types'
import type { IUser } from '@/types/user.types'

interface IAuthResponse {
	user: IUser
	accessToken: string
}

class AuthService {
	private _AUTH = '/auth'

	async main(type: 'login' | 'register', data: IAuthData, recaptchaToken?: string | null) {
		console.log(`[authService] ${type} called with email:`, data.email)
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/${type}`, data, {
			headers: {
				recaptcha: recaptchaToken
			}
		})

		console.log('Response from server:', response.data)

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken)
			useAuthStore.getState().setAuthData(response.data.user, response.data.accessToken)
		}

		return response
	}

	// CLIENT
	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`)

		if (response.data.accessToken) {
			this._saveTokenStorage(response.data.accessToken)
			useAuthStore.getState().setAuthData(response.data.user, response.data.accessToken)
		}

		return response
	}

	// SERVER
	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this._AUTH}/access-token`,
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`
				}
			}
		)

		return response.data
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`)

		if (response.data) {
			this._removeFromStorage()
			useAuthStore.getState().clearAuthData()
		}

		return response
	}

	private _saveTokenStorage(accessToken: string) {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
			domain: 'localhost',
			sameSite: 'strict',
			expires: 1
		})
	}

	private _removeFromStorage() {
		Cookies.remove(EnumTokens.ACCESS_TOKEN)
	}
}

export const authService = new AuthService()
