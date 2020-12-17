/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Tuesday 07 January 2020 - 12:21:12
** @Filename:				next.config.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Tuesday 18 February 2020 - 14:09:10
*******************************************************************************/

const withCSS = require('@zeit/next-css');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
module.exports = withBundleAnalyzer(withCSS({
	optimization: {
		minimizer: [new UglifyJsPlugin()]
	},
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		}
		return config
	},
	webpack(config, options) {
		return config;
	}
}));
