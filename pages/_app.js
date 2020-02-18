/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Sunday 12 January 2020 - 14:39:16
** @Filename:				_app.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Monday 17 February 2020 - 11:31:46
*******************************************************************************/

import	React, {useState, useEffect}	from	'react';
import	App								from	'next/app';
import	styled, {createGlobalStyle}		from	'styled-components';
import	Footer							from	'../components/Footer';
import	Header							from	'../components/Header';

const GlobalStyle = createGlobalStyle`
	*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:Roboto,Helvetica,Arial,sans-serif;padding-inline-start: 0;font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; scroll-behavior: smooth;}
	::-webkit-scrollbar {width: 0 !important;}
	body{background-color: #1e2331;box-sizing: content-box;height:100%;padding:0;margin:0;}
	#__next{height:100%;width:100%;overflow-y: auto;padding:0;margin:0;};
	#__next{ overflow: -moz-scrollbars-none; }
	#__next { -ms-overflow-style: none; }

	h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}
	a{text-decoration:none;color:#000}
	a:hover{text-decoration:none;cursor:pointer}
	button{background:0 0;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}
	nav{margin:0;padding:0}
	::placeholder{color:#000;opacity:.3}
	:-ms-input-placeholder{color:#000}
	::-ms-input-placeholder{color:#000}
`;


function	MyApp(props) {
	const	{Component, pageProps} = props;

	return (
		<div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
			<GlobalStyle />
			<Header />
			<div style={{display: 'flex', flex: 1}}>
				<Component
					element={props.element}
					router={props.router}
					{...pageProps} />
			</div>
			<Footer />
		</div>
	);
}


export default MyApp;