import type { IUser } from '@/types'

export interface IAuthState {
	user: IUser | null
	isLoggedIn: boolean
	accessToken: string | null
}
