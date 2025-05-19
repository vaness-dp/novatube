'use client'

import dynamic from 'next/dynamic'
import { forwardRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import { AuthToggle } from './AuthToggle'
import type { IAuthForm } from './auth-form.types'
import { useAuthForm } from './useAuthForm'

const DynamicRecaptcha = dynamic(() => import('./Recaptcha').then(mod => mod.Recaptcha))
const ForwardedRefRecaptcha = forwardRef<ReCAPTCHA>((props, ref) => (
	<DynamicRecaptcha
		{...props}
		forwardedRef={ref}
	/>
))
ForwardedRefRecaptcha.displayName = 'ForwardedRefRecaptcha'

export function AuthForm({ isLogin }: { isLogin: boolean }) {
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

					<ForwardedRefRecaptcha ref={recaptchaRef} />
				</>
			)}

			<Button
				type='submit'
				isLoading={isLoading}
			>
				Continue
			</Button>

			<AuthToggle isLogin={isLogin} />
		</form>
	)
}
