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
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});
module.exports = withBundleAnalyzer(withCSS(withOptimizedImages({
	test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
	loader: 'file-loader',
	enableSvg: true,
	target: 'serverless',
	optimization: {
		minimizer: [new UglifyJsPlugin()]
	},
	optimizeImagesInDev: true,
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
})));
