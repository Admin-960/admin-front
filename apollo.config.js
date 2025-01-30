require('dotenv/config')

module.exports = {
	service: {
		endpoint: {
			url: process.env.GRAPHQL_SERVER_URL || 'http://localhost:4200/graphql',
			skipSSLValidation: true
		}
	}
}
