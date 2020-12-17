/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Tuesday 07 January 2020 - 12:19:28
** @Filename:				_document.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Saturday 22 February 2020 - 19:52:52
*******************************************************************************/

import	React								from	'react';
import	Document, {Html, Head, Main, NextScript}	from	'next/document';
import	{ServerStyleSheet}					from	'styled-components';

export default class MyDocument extends Document
{
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
					enhanceComponent: Component => Component,
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render()
	{
		return (
			<Html lang={'fr'}>
				<title>{'Panghostlin'}</title>
				<Head>
					<link rel={'shortcut icon'} type={'image/x-icon'} href={'/images/favicon.ico'} />
					<meta property='og:title' content='Panghostlin' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
