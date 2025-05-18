import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,

	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${process.env.SERVER_URL}/uploads/:path*`
			}
		]
	},

	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: [
							"script-src 'self' https://www.gstatic.com https://www.google.com 'unsafe-inline';",
							"style-src 'self' 'unsafe-inline';", // если нужны стили inline
							"img-src 'self' data: https://www.google.com https://www.gstatic.com;"
						].join(' ')
					}
				]
			}
		]
	}
}

export default nextConfig
