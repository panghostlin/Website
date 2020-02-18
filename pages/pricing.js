/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Friday 03 January 2020 - 16:49:43
** @Filename:				index.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Tuesday 18 February 2020 - 11:13:26
*******************************************************************************/

import	React					from	'react';
import	styled					from	'styled-components';

const	backgroundColor = '#191c28';
const	backgroundAccentColor = '#242a3b';

const	Page = styled.main`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	width: 100%;
    min-height: 100vh;
	min-width: 100vw;
`;


const	PagePricing = styled.section`
	background-image: radial-gradient(rgba(255,255,255,.05) 1px,transparent 0),radial-gradient(rgba(255,255,255,.05) 1px,transparent 0);
    background: radial-gradient(${backgroundAccentColor} 1px,transparent 0),radial-gradient(${backgroundAccentColor} 1px,transparent 0),linear-gradient(180deg,${backgroundAccentColor} 0%,${backgroundColor} 100%);
    background-size: 40px 40px,40px 40px,100%,100%;
    background-position: 0 0,20px 20px,center;
	width: 100%;
    padding-bottom: 10vh;
    display: flex;
    flex-direction: column;
	flex-grow: 1;
	height: 100vh;
`;
const	PricingBackground = styled.div`
	position: absolute;
    width: 100%;
    height: 130vh;
    left: 0;
    top: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
	& > div:first-child {
		background: linear-gradient(20deg, ${backgroundAccentColor} 2%, transparent 60%);
		width: 100%;
		height: 80vh;
		display: flex;
		border-bottom-left-radius: 50%;
		transform: rotate(-20deg) translateY(-30vh);
		position: relative;
		margin-bottom: 20vh;
		margin-top: -20vh;
		right: 0;
		top: 0;
	}
	& > div:last-child {
		background: linear-gradient(150deg,transparent 0%, ${backgroundAccentColor} 100%);
		width: 80vw;
		height: 40vh;
		transform: rotate(-30deg) translate(40vh, 60vh) scale(1.8);
		border-top-right-radius: 50%;
		position: relative;
	}
`
const	PricingTitle = styled.div`
    display: flex;
	margin-top: 10vh;
	margin-bottom: 5vh;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: #FFFFFF;
    text-align: center;
	width: 100%;
	& > h1 {font-size: 60px;}
	& > p {font-size: 24px;}
	& > span {font-size: 12px;}
`;
const	PricingOffers = styled.div`
    display: flex;
	width: 100%;
    flex-direction: row;
	justify-content: center;
	padding-left: 8.33%;
	padding-right: 8.33%;
	margin-top: 4vh;
`;
const	Offer = styled.div`
    width: 20vw;
    height: 40vh;
	margin: 16px;
	padding-top: 48px;
    border-radius: 4px;
    box-shadow: 0 8px 10px -2px rgba(0,0,0,.45);
	background: ${backgroundAccentColor};
	z-index: 1;
    position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	&:first-child {margin-left: 0};
	&:last-child {margin-right: 0};
	&::before {
		content: "";
		display: ${props => props.withBefore ? 'block' : 'none'};
		position: absolute;
		top: 0px;
		left: 0px;
		width: 80%;
		height: 20%;
		background-color: ${backgroundAccentColor};
		background-image: radial-gradient(rgba(255,255,255,.5) 1px,transparent 0),radial-gradient(rgba(255,255,255,.5) 1px,transparent 0);
		background-position: 0 0,20px 20px,center;
		background-size: 40px 40px,40px 40px,100%,100%;
		opacity: .2;
		z-index: -1;
	}

	&::after {
		content: "";
		display: ${props => props.withAfter ? 'block' : 'none'};
		position: absolute;
		bottom: 0;
		right: 0;
		width: 80%;
		height: 30%;
		background: linear-gradient(150deg,transparent 0%, #EC407A 100%);
		transform: rotate(-30deg) scale(1.8);
		border-top-right-radius: 50%;
		opacity: 0.05;
	}

	
`;
const	OfferTitle = styled.h4`
	color: #FFFFFF;
	font-weight: bold;
	font-size: 24px;
	text-align: center;
	padding-left: 16px;
	padding-right: 16px;
`;
const	OfferBenefits = styled.ul`
	margin-top: 32px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-left: 20%;
	margin-right: 20%;
`;
const	Benefit = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;
	color: #FFFFFF;
	margin-bottom: 16px;
	& > div {
		margin-left: 20px;
		padding-right: 42px;
	}
`;
const	OfferPrice = styled.p`
	color: #FFFFFF;
	font-weight: bold;
	font-size: 42px;
	text-align: center;
	margin-top: auto;
	padding: 24px;
	padding-bottom: 24px;
	background: ${backgroundColor};
	z-index: 1;
`;
const	OfferButton = styled.button`
    color: #FFFFFF;
    border-radius: 4px;
	border: 1px solid ${props => props.color || '#FFFFFF'};;
	background-color: ${props => props.color || backgroundColor};
    font-size: 22px;
    padding: 8px 16px;
    backdrop-filter: blur(.4rem);
    user-select: none;
	width: calc(100% - 32px);
	margin-top: 32px;
	&:hover {
		background: #FFFFFF;
		color: ${backgroundColor};
		border: 1px solid #FFFFFF;
		transition: 0.2s;
	}
`;

const	PageSupport = styled.section`
	width: 100%;
    display: flex;
	flex-direction: column;
	align-items: center;
    position: relative;
	background-color: ${backgroundColor};
	background: linear-gradient(180deg,${backgroundAccentColor} 0%,${backgroundColor} 100%) ${backgroundColor} !important;
	padding-bottom: 10vh;
	padding-left: 8.33%;
	padding-right: 8.33%;

	&::before {
		display: flex;
		content: "";
		position: absolute;
		width: 50%;
		height: 40vh;
		background-color: #191c28;
		background-image: radial-gradient(rgba(255,255,255,.5) 1px,transparent 0),radial-gradient(rgba(255,255,255,.5) 1px,transparent 0);
		background-position: 0 0,20px 20px,center;
		background-size: 40px 40px,40px 40px,100%,100%;
		opacity: .08;
		bottom: 0;
    	left: 0;
	}
`;
const	SupportDescription = styled.div`
	font-size: 20px;
	& > p {padding-bottom: 16px;}
`;
const	SupportInformations = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 10vh;
	justify-content: space-between;
`;
const	SupportTitle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: #FFFFFF;
    text-align: left;
	width: 40%;
	& > h1 {
		font-size: 60px;
    	letter-spacing: 4px;
		margin-bottom: 60px;
	}
`;
const	SupportNeeds = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 60px;
`;
const	SupportNeedsBar = styled.div`
    color: #FFFFFF80;
	background: #449D57;
    color: #FFFFFF;
	padding: 24px;
	border-radius: 4px;
    text-align: center;
	width: 100%;
	font-size: 40px;
`
const	SpendingsNeedsLabel = styled.p`
	width: 100%;
    color: #FFFFFF80;
	padding-top: 8px;
	text-align: center;
`;
const	SupportWays = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 12vh;
	margin-bottom: 10vh;
	justify-content: space-between;
`;
const	SupportWayItem = styled.a`
	width: 10vw;
    height: 10vw;
	min-width: 100px;
    min-height: 100px;
    border-radius: 4px;
	background: ${backgroundAccentColor};
	margin: 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	font-size: 14px;
	cursor: pointer;
	position: relative;
	text-align: center;
	padding: 16px;
	& > img {
		margin: auto;
		height: 5vw;
		max-width: 5vw;
		min-width: 50px;
	    min-height: 50px;
	}
	& > p {margin-top: auto;}
	&:hover {background: #333c54;}
	&:first-child {margin-left: 0;}
	&:last-child {margin-right: 0;}
	&::after {
		cursor: pointer;
		pointer-events: none;
		content: '${props => props.content}';
		display: flex;
		background: transparent;
		position: absolute;
		padding: 4px 8px;
		${props => props.top ? 'bottom: calc(100% + 16px)' : 'top: calc(100% + 16px)'};
		border-radius: 4px;
		opacity: 0;
		padding: 8px 16px;
		font-weight: normal;
		font-size: 14px;
		z-index: 2;
	}
	&:hover::after {
		transition: 0.2s;
		content: '${props => props.content}';
		display: flex;
		background: ${backgroundAccentColor};
		color: #FFFFFF;
		position: absolute;
		${props => props.top ? 'bottom: calc(100% + 16px)' : 'top: calc(100% + 16px)'};
		padding: 4px 8px;
		border-radius: 4px;
		opacity: 1;
		padding: 8px 16px;
		font-weight: normal;
		font-size: 14px;
	}
`;

const	CheckIcon = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    transform: scale(2);
    width: 22px;
    height: 22px;
	&::after {
		content: "";
		display: block;
		box-sizing: border-box;
		position: absolute;
		left: 6px;
		top: 1px;
		width: 6px;
		height: 10px;
		border-width: 0 2px 2px 0;
		border-style: solid;
		transform-origin: bottom left;
		transform: rotate(45deg);
	}
`;

function	Index(props) {
	return (
		<Page>
			<PagePricing>
				<PricingBackground><div /><div /></PricingBackground>
				<PricingTitle>
					<h1>{'Pricing & Sponsorships'}</h1>
				</PricingTitle>
				<PricingOffers>
					<Offer withBefore>
						<OfferTitle>{'Self Hosting'}</OfferTitle>
						<OfferBenefits>
							<Benefit><CheckIcon /><p>{'Always free'}</p></Benefit>
							<Benefit><CheckIcon /><p>{'Your configuration'}</p></Benefit>
							<Benefit><CheckIcon /><p>{'As storage space as you have'}</p></Benefit>
						</OfferBenefits>
						<OfferPrice>
							{'Free'}
							<OfferButton>{'Setup Panghostlin'}</OfferButton>
						</OfferPrice>
					</Offer>
					<Offer withBefore withAfter>
						<OfferTitle>{'Starter'}</OfferTitle>
						<OfferBenefits>
							<Benefit><CheckIcon /><p>{'Only pay for what you actually use'}</p></Benefit>
							<Benefit><CheckIcon /><p>{'Ready to use'}</p></Benefit>
							<Benefit><CheckIcon /><p>{'Always up-to-date'}</p></Benefit>
						</OfferBenefits>
						<OfferPrice>
							{'As you grow'}
							<OfferButton color={'#EC407A'}>{'Contact us'}</OfferButton>
						</OfferPrice>
					</Offer>
				</PricingOffers>
			</PagePricing>


			<PageSupport>
				<SupportInformations>
					<SupportTitle>
						<h1>{'How to support us ?'}</h1>
						<SupportDescription>
							<p>{`We do not use advertising, we do not sell your data.`}</p>
							<p>{`We depend on community support, on your support, to develop our product, to host our software, to pay our bills.`}</p>
							<p>{`We want to be as transparent as possible about what we need. We want to give you the best possible experience and continue to exist in the future.`}</p>
						</SupportDescription>
					</SupportTitle>
					<SupportNeeds>
						<SupportNeedsBar>
							{/* {'0 / 0€'} */}
							<CheckIcon style={{margin: 'auto'}} />
						</SupportNeedsBar>
						<SpendingsNeedsLabel>{'We are fine right now, but you can always support us for future development!'}</SpendingsNeedsLabel>
					</SupportNeeds>
				</SupportInformations>
				<SupportWays>
					<SupportWayItem
						target={'_blank'}
						rel={'nofollow'}
						href={'bitcoin:1NcFh3CvDPnp4MAo3mn1mcUcPBDhgJz9Kq'}
						content={'1NcFh3CvDPnp4MAo3mn1mcUcPBDhgJz9Kq'}>
						<img src={'/static/images/sponsor_btc.svg'} />
						<p>{'Bitcoin'}</p>
					</SupportWayItem>
					<SupportWayItem
						target={'_blank'}
						rel={'nofollow'}
						href={'litecoin:LXsEPCNAu1EsKRjUZz8hXj6YXerhdaDmGX'}
						content={'LXsEPCNAu1EsKRjUZz8hXj6YXerhdaDmGX'}>
						<img src={'/static/images/sponsor_ltc.svg'} />
						<p>{'Litecoin'}</p>
					</SupportWayItem>
					<SupportWayItem
						target={'_blank'}
						rel={'nofollow'}
						href={'ethereum:0xc79f1910AfE226cFb36A9823843b30bf0102836A'}
						content={'0xc79f1910AfE226cFb36A9823843b30bf0102836A'}>
						<img src={'/static/images/sponsor_eth.svg'} />
						<p>{'Ethereum'}</p>
					</SupportWayItem>
					<SupportWayItem
						target={'_blank'}
						rel={'nofollow'}
						href={'https://brave.com/tho211'}
						content={'brave.com/tho211'}>
						<img src={'/static/images/sponsor_bat.svg'} />
						<p>{'Basic Attention Token'}</p>
					</SupportWayItem>
					<SupportWayItem
						target={'_blank'}
						rel={'nofollow'}
						href={'https://paypal.me/TBouder'}
						content={'paypal.me/TBouder'}>
						<img src={'/static/images/paypal_logo.svg'} />
						<p>{'Paypal'}</p>
					</SupportWayItem>
					<SupportWayItem
						target={'_blank'}
						rel={'nofollow'}
						href={'https://github.com/panghostlin'}
						content={'github.com/panghostlin'}>
						<img src={'/static/images/github_logo.svg'} />
						<p>{'Github Sponsor'}</p>
					</SupportWayItem>
				</SupportWays>
			</PageSupport>
		</Page>
	);
}

export default Index;
