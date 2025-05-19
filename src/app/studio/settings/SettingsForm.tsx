'use client'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import { Textarea } from '@/ui/field/Textarea'

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
		isProfileLoading,
		onSubmit
	} = useSettings()

	if (isProfileLoading) return <div>Loading...</div>

	return (
		<div className='w-2/5'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-1 gap-5'>
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
					<Textarea
						label='Description'
						registration={register('channel.description')}
						error={errors.channel?.description?.message}
						placeholder='Enter description:'
						rows={4}
					/>
				</div>
				<div className='mt-10'>
					<Button
						type='submit'
						isLoading={isLoading}
					>
						Update
					</Button>
				</div>
			</form>
		</div>
	)
}
