'use client'

import cn from 'clsx'
import { type PropsWithChildren, useEffect, useState } from 'react'

import { Content } from './content/Content'
import { Sidebar } from './sidebar/Sidebar'
import { authService } from '@/services/auth.service'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSidebar] = useState(true)

	const toggleSidebar = () => {
		setIsShowedSidebar(!isShowedSidebar)
	}

	useEffect(() => {
		authService.initializeAuth()
	}, [])

	return (
		<main
			className={cn(
				'flex min-h-screen',
				'initialSidebar',
				isShowedSidebar ? 'showedSidebar' : 'hidedSidebar'
			)}
		>
			<Sidebar
				isShowedSidebar={isShowedSidebar}
				toggleSidebar={toggleSidebar}
			/>
			<Content>{children}</Content>
		</main>
	)
}
