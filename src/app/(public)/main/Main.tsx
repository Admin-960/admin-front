'use client'

import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import type { IUser } from '@/types'

export function Main() {
	const [users, setUsers] = useState<IUser[]>([])
	const GET_USERS = gql`
		query GetAllUsers {
			users {
				id
				email
				username
				isVerified
				role
			}
		}
	`

	const { loading, error, data } = useQuery(GET_USERS, {})

	useEffect(() => {
		console.log(data)
		if (data) {
			setUsers(data.users)
		}
	}, [data])

	return (
		<div>
			{loading ? (
				'Loading...'
			) : (
				<ul>
					{users.map(user => (
						<li key={user.id}>{user.email}</li>
					))}
				</ul>
			)}
		</div>
	)
}
