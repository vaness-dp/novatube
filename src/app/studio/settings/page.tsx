import { Settings } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { SettingsForm } from './SettingsForm'

export const metadata: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE
}

export default function SettingsPage() {
	return (
		<div>
			<Heading
				Icon={Settings}
				isH1
			>
				Settings
			</Heading>

			<SettingsForm />
		</div>
	)
}
