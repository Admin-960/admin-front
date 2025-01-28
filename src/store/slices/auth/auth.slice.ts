import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import type { IAuthState } from '@/store/types'

import { EnumTokens, type IUser } from '@/types'

const initialState: IAuthState = {
	user: null,
	isLoggedIn: !!Cookies.get(EnumTokens.ACCESS_TOKEN),
	accessToken: Cookies.get(EnumTokens.ACCESS_TOKEN) || null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthData(state: IAuthState, action: PayloadAction<{ user: IUser; accessToken: string }>) {
			state.user = action.payload.user
			state.isLoggedIn = true
			state.accessToken = action.payload.accessToken
		},
		clearAuthData(state: IAuthState) {
			state.user = null
			state.isLoggedIn = false
			state.accessToken = null
		}
	}
})

export const { setAuthData, clearAuthData } = authSlice.actions
