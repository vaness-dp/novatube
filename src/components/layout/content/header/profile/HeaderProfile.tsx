import { LogIn } from 'lucide-react'

import { LinkButton } from '@/ui/button/LinkButton'

import { PAGE } from '@/config/public-page.config'

import { useAuthStore } from '@/store/useAuthStore'

import { HeaderAvatar } from './HeaderAvatar'

export function HeaderProfile() {
	const isLoggedIn = useAuthStore(state => state.isLoggedIn)

	return isLoggedIn ? (
		<HeaderAvatar />
	) : (
		<LinkButton href={PAGE.LOGIN}>
			<LogIn size={28} /> Auth
		</LinkButton>
	)
}
