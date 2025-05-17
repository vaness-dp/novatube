import Cookies from 'js-cookie'
import { create } from 'zustand'

import { EnumTokens } from '@/types/auth.types'
import type { IUser } from '@/types/user.types'

interface IAuthState {
	user: IUser | null
	isLoggedIn: boolean
	accessToken: string | null

	setAuthData: (user: IUser, accessToken: string) => void
	clearAuthData: () => void
}

export const useAuthStore = create<IAuthState>(set => ({
	user: null,
	isLoggedIn: !!Cookies.get(EnumTokens.ACCESS_TOKEN),
	accessToken: Cookies.get(EnumTokens.ACCESS_TOKEN) || null,

	setAuthData: (user, accessToken) => {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken)
		set(() => ({
			user,
			isLoggedIn: true,
			accessToken
		}))
	},

	clearAuthData: () => {
		Cookies.remove(EnumTokens.ACCESS_TOKEN)
		set(() => ({
			user: null,
			isLoggedIn: false,
			accessToken: null
		}))
	}
}))
