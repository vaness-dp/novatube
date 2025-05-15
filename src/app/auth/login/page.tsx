import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Auth } from '../Auth'

export const metadata: Metadata = {
	title: 'Sign in',
	...NO_INDEX_PAGE
}

export default function LoginPage() {
	return <Auth isLogin />
}
