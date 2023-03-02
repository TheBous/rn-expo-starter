module.exports = {
	extends: [
		"universe",
		"universe/shared/typescript-analysis",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
	],
	plugins: ["react"],
	rules: {
		// indent: [2, 2, {
		//   SwitchCase: 1,
		//   offsetTernaryExpressions: true,
		// }],
		indent: [
			"error",
			"tab",
			{
				ignoredNodes: ["TemplateLiteral"],
				SwitchCase: 1,
			},
		],
		"max-lines": ["error", { max: 180, skipBlankLines: true, skipComments: true }],
		"no-debugger": 0,
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"import/no-unresolved": 0,
		"import/no-named-as-default": 0,
		"react/require-default-props": 0,
		"import/no-extraneous-dependencies": 0,
		"no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: false }],
		"react/prop-types": [0],
		"import/extensions": 0,
		"react/display-name": [0],
		"eol-last": 0,
		"import/prefer-default-export": 0,
		"comma-spacing": 0,
		"default-param-last": 0,
		"no-plusplus": 0,
		"max-len": ["error", { comments: 400, code: 200 }],
		"react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
		"react/destructuring-assignment": 0,
		"react/jsx-sort-props": [
			2,
			{
				callbacksLast: true,
				shorthandFirst: false,
				shorthandLast: true,
				ignoreCase: true,
				noSortAlphabetically: false,
			},
		],
		"react/react-in-jsx-scope": "off",
		"react/jsx-indent-props": 0,
		"react/jsx-indent": 0,
		"operator-linebreak": 0,
		"react/function-component-definition": 0,
		"max-classes-per-file": 0,
		"no-underscore-dangle": 0,
		"no-tabs": 0,
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": ["error"],
		"react/jsx-one-expression-per-line": 0,
		"linebreak-style": ["error", "unix"],
		"implicit-arrow-linebreak": 0,
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-empty": [
			"error",
			{
				allowEmptyCatch: true,
			},
		],
		"react/jsx-no-target-blank": [
			1,
			{
				allowReferrer: true,
			},
		],
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.d.ts"],
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
	],
	settings: {
		"import/resolver": {
			typescript: {}, // this loads <rootdir>/tsconfig.json to ESLint
		},
		react: {
			version: "detect",
		},
	},
	/* for lint-staged */
	globals: {
		__dirname: true,
	},
};
