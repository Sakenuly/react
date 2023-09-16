module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['airbnb', 'airbnb-typescript', 'prettier'],
	ignorePatterns: [
		'dist',
		'.eslintrc.cjs',
		'vite.config.ts',
		'jest.config.cjs',
		'babel.config.cjs',
	],
	"excludes": ["/babel.config"],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: '**/tsconfig.json',
	},
	plugins: ['react-refresh'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-no-bind': 'off',
		'func-names': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
};
