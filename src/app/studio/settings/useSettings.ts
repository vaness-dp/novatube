import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useProfile } from '@/hooks/useProfile'

import type { ISettingsData } from './settings.types'
import { userService } from '@/services/studio/user.service'

export function useSettings() {
	const form = useForm<ISettingsData>({
		mode: 'onChange'
	})

	const { profile, isSuccess, isLoading } = useProfile()

	useEffect(() => {
		if (!isSuccess) return
		form.reset(profile)
	}, [form, profile, isSuccess])

	const { mutate, isPending } = useMutation({
		mutationKey: ['update-settings'],
		mutationFn: (data: ISettingsData) => userService.updateProfile(data)
	})

	const onSubmit: SubmitHandler<ISettingsData> = data => {
		mutate(data)
	}

	return { formObject: form, onSubmit, isLoading: isPending, isProfileLoading: isLoading }
}
