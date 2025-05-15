'use client'

import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { PAGE } from '@/config/public-page.config'

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
	const router = useRouter()

	return (
		<div className='mt-7.5'>
			{isLogin ? (
				<button
					type='button'
					className='border-border flex h-11 w-full items-center justify-center rounded-[8px] border bg-transparent px-4 py-3 text-[14px] text-white/50 transition-colors hover:text-white'
					onClick={() => router.push(PAGE.REGISTER)}
				>
					Don’t have an account? Sign up <ArrowRight size={14} />
				</button>
			) : (
				<button
					type='button'
					className='flex h-11 w-full items-center justify-center rounded-[8px] border border-[#ffffff0D] bg-transparent px-4 py-3 text-[14px] text-white/50 transition-colors hover:text-white'
					onClick={() => router.push(PAGE.LOGIN)}
				>
					I already have an account <ArrowRight size={14} />
				</button>
			)}
		</div>
	)
}
