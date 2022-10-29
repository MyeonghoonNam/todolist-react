const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-create-react-app',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config) => {
		const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
		const babelRule = oneOfRule.oneOf.find((rule) =>
			rule.loader?.includes('babel-loader'),
		);

		babelRule.options.presets.push('@emotion/babel-preset-css-prop');

		config.resolve.alias = {
			...config.resolve.alias,
			'@api': path.resolve(__dirname, '../src/api'),
			'@assets': path.resolve(__dirname, '../src/assets'),
			'@components': path.resolve(__dirname, '../src/components'),
			'@contexts': path.resolve(__dirname, '../src/contexts'),
			'@hooks': path.resolve(__dirname, '../src/hooks'),
			'@interfaces': path.resolve(__dirname, '../src/interfaces'),
			'@styles': path.resolve(__dirname, '../src/styles'),
		};

		return config;
	},
};
