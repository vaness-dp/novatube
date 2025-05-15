import { AuthWrapper } from './AuthWrapper'
import { AuthForm } from './form/AuthForm'

interface Props {
	isLogin: boolean
}

export function Auth({ isLogin }: Props) {
	return (
		<AuthWrapper heading={isLogin ? 'Log in to NTube' : 'Create your account'}>
			<AuthForm isLogin={isLogin} />
		</AuthWrapper>
	)
}
