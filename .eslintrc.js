module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
	],
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'prettier/prettier': 2, // This will cause Prettier problems to error
        'no-unused-vars': [
            'error',
            {
                'varsIgnorePattern': 'React'
            }
        ]
	},
    settings: {
        react: {
            version: 'detect',
        },
    },
};