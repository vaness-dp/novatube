import cn from 'clsx'
import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	label?: string
	error?: string
	registration: UseFormRegisterReturn
}

export function Field({ placeholder, error, registration, label, ...props }: Props) {
	return (
		<div>
			<label>
				{label && <span className='mb-2 block font-semibold text-gray-400'>{label}</span>}
				<input
					placeholder={placeholder}
					className={cn(
						'border-border relative h-10.5 w-full rounded-[8px] border px-3 py-2 text-sm transition-colors hover:border-white/30 focus:outline-none',
						error && 'border-red-500'
					)}
					{...registration}
					{...props}
				/>
			</label>
			{error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
		</div>
	)
}
