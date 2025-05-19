import type { Metadata } from 'next'
import { SUSE } from 'next/font/google'

import { Providers } from '@/providers/Providers'

import './globals.css'

const suse = SUSE({
	variable: '--font-suse',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		absolute: 'Novatube',
		template: `%s | Novatube`
	},
	description: 'Best app for video watching'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={suse.variable}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
