import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: 'https://localhost:4200/graphql',
	documents: ['src/**/*.tsx', '!src/gql/**/*'],
	generates: {
		'./src/gql/': {
			preset: 'client',
			plugins: []
		}
	}
}
export default config
