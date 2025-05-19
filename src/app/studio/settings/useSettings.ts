import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'

import type { ISettingsData } from './settings.types'
import { userService } from '@/services/studio/user.service'

export function useSettings() {
	const form = useForm<ISettingsData>({
		mode: 'onChange'
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['update-settings'],
		mutationFn: (data: ISettingsData) => userService.updateProfile(data)
	})

	const onSubmit: SubmitHandler<ISettingsData> = data => {
		mutate(data)
	}

	return { formObject: form, onSubmit, isLoading: isPending }
}
