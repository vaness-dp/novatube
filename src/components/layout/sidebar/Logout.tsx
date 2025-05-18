import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import { PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page'

import { useAuthStore } from '@/store/useAuthStore'

import { authService } from '@/services/auth.service'

export function Logout() {
	const router = useRouter()
	const pathname = usePathname()

	const { mutate, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			if (pathname.includes(STUDIO_PAGE.HOME) || pathname.includes(STUDIO_PAGE.SETTINGS)) {
				router.push(PAGE.HOME)
			}
		}
	})

	const isLoggedIn = useAuthStore(state => state.isLoggedIn)

	if (!isLoggedIn) return null

	return (
		<button
			onClick={() => mutate()}
			className={'group flex items-center gap-5 py-3'}
			title='Logout'
		>
			<LogOut className={'group-hover:text-primary min-w-6 transition group-hover:rotate-6'} />
			<span>{isPending ? 'Please wait...' : 'Logout'}</span>
		</button>
	)
}
