'use client'

import { type SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import type { IAuthForm } from '../auth-form.types'

import { AuthToggle } from './AuthToggle'

interface Props {
	isLogin: boolean
}

export function AuthForm({ isLogin }: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		if (isLogin) {
		} else {
		}
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex w-full flex-col gap-3'
		>
			<>
				<Field
					type='email'
					registration={register('email', { required: 'Email is required!' })}
					error={errors.email?.message}
					placeholder='Email address'
				/>
				<Field
					type='password'
					registration={register('password', { required: 'Password is required!' })}
					error={errors.password?.message}
					placeholder='Password'
				/>
				{!isLogin && (
					<Field
						type='password'
						registration={register('confirmPassword', {
							required: 'Password confirmation is required!',
							validate: value => value === watch('password') || 'Password`s don`t match!'
						})}
						error={errors.confirmPassword?.message}
						placeholder='Enter password again:'
					/>
				)}
			</>

			{isLogin ? (
				<Button type='submit'>Send Magic Link</Button>
			) : (
				<Button type='submit'>Create account</Button>
			)}

			<AuthToggle isLogin={isLogin} />
		</form>
	)
}
