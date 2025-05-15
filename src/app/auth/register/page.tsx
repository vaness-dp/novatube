import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Auth } from '../Auth'

export const metadata: Metadata = {
	title: 'Sign up',
	...NO_INDEX_PAGE
}

export default function RegisterPage() {
	return <Auth isLogin={false} />
}
