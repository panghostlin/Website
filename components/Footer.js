/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Monday 17 February 2020 - 11:28:40
** @Filename:				Footer.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Monday 17 February 2020 - 14:24:52
*******************************************************************************/

import	React					from	'react';
import	Link					from	'next/link'
import	styled					from	'styled-components';

const	backgroundAccentColor = '#242a3b';

const	Footer = styled.footer`
    padding-top: 36px;
    padding-bottom: 64px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    background: ${backgroundAccentColor};
    position: relative;
    font-size: 1.4rem;
	padding-left: 16.66%;
	padding-right: 16.66%;
`;
const	FooterTitle = styled.a`
	color: #FFFFFF;
	font-size: 14px;
	padding-bottom: 8px;
`;
const	FooterLink = styled.a`
	color: #FFFFFFAA;
	font-size: 14px;
	padding: 6px 0;
	transition: 0.4s;
	border-bottom: 1px solid transparent;
	&:hover {color: #FFFFFF;}
`;
const	FooterCol = styled.div`
	display: flex;
	flex-direction: column;
	& > b {
		color: #FFFFFF;
		font-size: 14px;
		padding-bottom: 8px;
		cursor: pointer;
	}
	& > img {width: 100px;}
`;


function	FooterComp() {
	return (
		<Footer>
			<FooterCol>
				<img src={'/static/images/logo.svg'} />
			</FooterCol>
			<FooterCol>
				<Link href={'/'}><b>{'Panghostlin'}</b></Link>
				<FooterLink>{'Team'}</FooterLink>
				<Link href="/pricing"><FooterLink>{'Pricing'}</FooterLink></Link>
				<FooterLink>{'Security'}</FooterLink>
			</FooterCol>
			<FooterCol>
				<FooterTitle target={'_blank'} rel={'nofollow'} href={'https://github.com/panghostlin'}>
					{'Open Source'}
				</FooterTitle>
				<FooterLink target={'_blank'} rel={'nofollow'} href={'https://github.com/panghostlin/Launcher'}>
					{'Launcher'}
				</FooterLink>
				<FooterLink target={'_blank'} rel={'nofollow'} href={'https://github.com/panghostlin/Webapp'}>
					{'Webapp'}
				</FooterLink>
				<FooterLink target={'_blank'} rel={'nofollow'} href={'https://github.com/panghostlin/Proxy'}>
					{'Proxy'}
				</FooterLink>
			</FooterCol>
			<FooterCol>
				<b>{'Legal'}</b>
				<FooterLink>{'Licence'}</FooterLink>
				<Link href={'/credits'}><FooterLink>{'Credits'}</FooterLink></Link>
				<FooterLink>{'Privacy'}</FooterLink>
			</FooterCol>
			<FooterCol />
		</Footer>
	);
}

export default FooterComp;