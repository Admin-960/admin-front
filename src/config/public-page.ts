class PublicPage {
	AUTH = '/auth'
	HOME = '/'
	TRENDING = '/trending'
	VIDEO_GAMES = '/video-games'

	HISTORY = '/my/history'
	LIKED_VIDEOS = '/my/liked-videos'

	SETTINGS = '/settings'
	FEEDBACK = '/feedback'

	VIDEO(path: string) {
		return `/v/${path}`
	}

	PLAYLISTS(path?: string) {
		return `/my/playlists${path ? `/${path}` : ''}`
	}

	SEARCH(searchTerm: string) {
		return `/s?term=${searchTerm}`
	}
}

export const PAGE = new PublicPage()
