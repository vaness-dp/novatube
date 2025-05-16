'use client'

import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import { AuthToggle } from './AuthToggle'
import type { IAuthForm } from './auth-form.types'
import { useAuthForm } from './useAuthForm'

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

	const { isLoading, onSubmit, recaptchaRef } = useAuthForm(isLogin ? 'login' : 'register', reset)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex w-full flex-col gap-3'
		>
			{isLoading ? (
				<SkeletonLoader count={3} />
			) : (
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

					<ReCAPTCHA
						ref={recaptchaRef}
						size='normal'
						sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
						theme='light'
						className='recaptcha'
					/>
				</>
			)}

			{isLogin ? (
				<Button
					type='submit'
					isLoading={isLoading}
				>
					Send Magic Link
				</Button>
			) : (
				<Button
					type='submit'
					isLoading={isLoading}
				>
					Create account
				</Button>
			)}

			<AuthToggle isLogin={isLogin} />
		</form>
	)
}
