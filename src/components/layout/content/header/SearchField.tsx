'use client'

import { useRouter } from 'next/navigation'
import { type KeyboardEvent, useState } from 'react'

import { PAGE } from '@/config/public-page.config'

export function SearchField() {
	const [searchTerm, setSearchTerm] = useState('')
	const router = useRouter()

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return
		e.preventDefault()
		if (searchTerm.trim() !== '') {
			router.push(PAGE.SEARCH(searchTerm))
		}
	}

	return (
		<div className='w-3/12'>
			<input
				type='search'
				placeholder='Type to search'
				className='w-full border-none bg-transparent px-4 py-2 text-sm font-normal opacity-50 shadow-none outline-none'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	)
}
