'use client'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import { useSettings } from './useSettings'

export function SettingsForm() {
	const {
		formObject: {
			handleSubmit,
			register,
			formState: { errors },
			control
		},
		isLoading,
		onSubmit
	} = useSettings()

	return (
		<div className='w-3/5'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-2 gap-10'>
					<div className='grid gap-4'>
						<Field
							label='Email'
							type='email'
							registration={register('email')}
							error={errors.email?.message}
							placeholder='Enter email:'
						/>
						<Field
							label='Password'
							type='password'
							registration={register('password')}
							error={errors.password?.message}
							placeholder='Enter password:'
						/>
						<Field
							label='Name'
							type='text'
							registration={register('name')}
							error={errors.name?.message}
							placeholder='Enter name:'
						/>
						<Field
							label='Slug (alias)'
							type='text'
							registration={register('channel.slug')}
							error={errors.channel?.message}
							placeholder='Enter slug:'
						/>
					</div>
				</div>
				<div className='mt-10'>
					<Button type='submit'>Update</Button>
				</div>
			</form>
		</div>
	)
}
