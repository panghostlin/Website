/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Monday 17 February 2020 - 11:28:40
** @Filename:				Header.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Monday 17 February 2020 - 13:44:12
*******************************************************************************/

import	React					from	'react';
import	Link					from	'next/link'
import	styled					from	'styled-components';

const	backgroundAccentColor = '#242a3b';

const	HomeHeader = styled.header`
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0 auto;
    display: flex;
	align-items: center;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    background: ${backgroundAccentColor};
    position: relative;
	padding-left: 8.33%;
	padding-right: 16.66%;
	z-index: 100;
`;
const	LogoCol = styled.div`
	width: 20%;
	cursor: pointer;
	& > img {width: 60px;}
`;
const	MenuCols = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`
const	HeaderCol = styled.a`
	color: #FFFFFF;
	font-size: 16px;
	padding: 16px;
	margin-right: 32px;
	transition: 0.2s;
	cursor: pointer;
	&:last-child {margin-right: 0;}
	&:hover {color: #FFFFFFAA;}
`;

function	Header() {
	return (
		<HomeHeader>
			<Link href="/">
				<LogoCol>
					<img src={'/images/logo.svg'} />
				</LogoCol>
			</Link>
			<MenuCols>
				<Link href="/about"><HeaderCol>{'About'}</HeaderCol></Link>
				<Link href="/pricing"><HeaderCol>{'Pricing & sponsorship'}</HeaderCol></Link>
				<Link href="/security"><HeaderCol>{'Security'}</HeaderCol></Link>
				<Link href="/support"><HeaderCol>{'Support'}</HeaderCol></Link>
				<Link href="/"><HeaderCol>{'App'}</HeaderCol></Link>
			</MenuCols>
		</HomeHeader>
	);
}

export default Header;
