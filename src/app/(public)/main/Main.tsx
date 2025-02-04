'use client'

import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

// import { gql } from '../src/__generated__/gql';

import type { IUser } from '@/types'

const GET_USERS = gql(`
	query GetAllUsers {
		users {
			id
			email
			username
			isVerified
			role
		}
	}
`)

export function Main() {
	const [users, setUsers] = useState<IUser[]>([])

	// our query's result, data, is typed!
	const { loading, data } = useQuery(GET_USERS, {})

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
