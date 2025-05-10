import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA, STUDIO_SIDEBAR_DATA } from './sidebar.data'

export function Sidebar({
	toggleSidebar,
	isShowedSidebar
}: {
	toggleSidebar: () => void
	isShowedSidebar: boolean
}) {
	return (
		<aside className='p-layout border-border w-60 overflow-hidden border-r whitespace-nowrap'>
			<SidebarHeader toggleSidebar={toggleSidebar} />
			<SidebarMenu
				menu={SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
			<SidebarSubscriptions />

			<>
				<SidebarMenu
					title='Studio'
					menu={STUDIO_SIDEBAR_DATA}
					isShowedSidebar={isShowedSidebar}
				/>
				<span className='bg-border my-5 block h-0.25 w-full' />
			</>

			<SidebarMenu
				title='More from NovaTube'
				menu={MORE_SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
		</aside>
	)
}
