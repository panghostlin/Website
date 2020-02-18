/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Friday 03 January 2020 - 16:49:43
** @Filename:				index.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Tuesday 18 February 2020 - 16:20:29
*******************************************************************************/

import	React									from	'react';
import	styled									from	'styled-components';
import	MainFakeBrowser, {GalleryFakeBrowser}	from	'../components/FakeBrowsers';

const	backgroundColor = '#191c28';
const	backgroundAccentColor = '#242a3b';

const	Home = styled.main`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	width: 100%;
    min-height: 100vh;
	min-width: 100vw;
`;

const	HomeHero = styled.section`
	background-image: radial-gradient(rgba(255,255,255,.05) 1px,transparent 0),radial-gradient(rgba(255,255,255,.05) 1px,transparent 0);
    background: radial-gradient(${backgroundAccentColor} 1px,transparent 0),radial-gradient(${backgroundAccentColor} 1px,transparent 0),linear-gradient(180deg,${backgroundAccentColor} 0%,${backgroundColor} 100%);
    background-size: 40px 40px,40px 40px,100%,100%;
    background-position: 0 0,20px 20px,center;
	width: 100%;
    padding-bottom: 10vh;
    display: flex;
    flex-direction: column;
	flex-grow: 1;
`;
const	HeroBackground = styled.div`
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
const	HeroTitle = styled.div`
    display: flex;
	margin-top: 10vh;
	margin-bottom: 5vh;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: #FFFFFF;
    text-align: center;
	width: 100%;
	& > h1 {
		font-size: 80px;
    	letter-spacing: 4px;
		margin-bottom: 60px;
	}
	& > p {font-size: 24px;}
	& > span {font-size: 12px;}
`;
const	HeroCTAButton = styled.button`
    color: #FFFFFF;
    border-radius: 4px;
	border: 1px solid #FFFFFF;
	background-color: ${backgroundAccentColor};
    font-size: 22px;
    padding: 8px 16px;
    backdrop-filter: blur(.4rem);
    user-select: none;
	margin-top: 64px;
	&:hover {
		background: #FFFFFF;
		color: ${backgroundColor};
		transition: 0.2s;
	}
`;
function	Hero(props) {
	return (
		<HomeHero>
			<HeroBackground><div /><div /></HeroBackground>
			<HeroTitle>
				<h1>{'Panghostlin'}</h1>
				<p>{`Your own modern and private gallery`}</p>
				<span>{`v0.0.1`}</span>
				<HeroCTAButton onClick={() => props.router.push(`/gallery`)}>{'Access your gallery'}</HeroCTAButton>
			</HeroTitle>
			<MainFakeBrowser />
		</HomeHero>
	);
}

const	HomeFeature = styled.section`
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
const	FeatureTitle = styled.div`
    display: flex;
	margin-top: 10vh;
	margin-bottom: 5vh;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: #FFFFFF;
    text-align: center;
	width: 60%;
	& > h2 {
		font-size: 60px;
    	letter-spacing: 4px;
		margin-bottom: 60px;
	}
`;
const	FeatureDescription = styled.div`
	font-size: 20px;
	& > p {padding-bottom: 16px;}
`;
const	FeatureItems = styled.div`
	width: 100%;
    display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
	margin-top: 80px;
	margin-bottom: 80px;
`;
const	ItemRow = styled.div`
	width: 100%;
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
    justify-content: center;
	align-items: center;
`;
const	FeatureItem = styled.div`
	width: 200px;
    height: 200px;
    border-radius: 4px;
	background: ${backgroundAccentColor};
	margin: 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;
	position: relative;
	text-align: center;
	&:hover {
		background: #333c54;
	}
	& > img {
		height: 100px;
		max-width: 100px;
		margin-bottom: 16px;
	}
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
		transition: 0.4s;
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
function	Feature() {
	return (
		<HomeFeature>
			<FeatureTitle>
				<h2>{'What is Panghostlin ?'}</h2>
				<FeatureDescription>
					<p>{`Panghostlin is a personnal online photo gallery.`}</p>
					<p>{`It’s a place to store all your memories, without tracking, analysis, advertising and data mining.`}</p>
					<p>{`Your data is yours and yours alone.`}</p>
				</FeatureDescription>
			</FeatureTitle>
			<FeatureItems>
				<ItemRow>
					<FeatureItem top content={'All our code is open source. Anyone can check the code and make sure that there is no hijacking or spying and that your privacy is respected.'}>
						<img src={'/static/images/github_logo.svg'} />
						{'Open Source'}
					</FeatureItem>
					<FeatureItem top content={'All sensitive data is encrypted and we have no way to access it. Only you can.'}>
						<img src={'/static/images/feature_lock.svg'} />
						{'Encryption'}
					</FeatureItem>
					<FeatureItem top content={'We don’t trust companies that track you or want to know more about you. We do not provide them with any information.'}>
						<img src={'/static/images/feature_hide.svg'} />
						{'No tracking, no ads'}
					</FeatureItem>
					<FeatureItem top content={'We strive for the greatest possible transparency: price, hosting, code, fees.'}>
						<img src={'/static/images/feature_transparency.svg'} />
						{'Transparency'}
					</FeatureItem>
				</ItemRow>
				<ItemRow>
					<FeatureItem content={'We don’t care who you are. We don’t care where you come from. We don’t record any personal information. You just need an e-mail to register.'}>
						<img src={'/static/images/feature_anonymous.svg'} />
						{'Anonymity'}
					</FeatureItem>
					<FeatureItem content={'We create keys from the hash of your password. We don’t have them, you have them, you can export them and only your keys can decrypt your pictures. #notYouKeysNotYourCoins'}>
						<img src={'/static/images/feature_key.svg'} />
						{'Your keys'}
					</FeatureItem>
					<FeatureItem content={'It’s not just about privacy. The environment matters too. We try to provide the most environmentally friendly platform possible.'}>
						<img src={'/static/images/feature_leaf.svg'} />
						{'As green as possible'}
					</FeatureItem>
					<FeatureItem content={'Because your privacy is at stake, we work around the clock to provide you with your own easy-to-install Panghostlin server.'}>
						<img src={'/static/images/feature_selfHosting.svg'} />
						{'Self hosting'}
					</FeatureItem>
				</ItemRow>
			</FeatureItems>
		</HomeFeature>
	);
}


const	HomeGallery = styled.section`
	width: 100%;
    display: flex;
	flex-direction: row;
    position: relative;
	background-color: ${backgroundColor};
	background: linear-gradient(180deg,${backgroundAccentColor} 0%,${backgroundColor} 100%) ${backgroundColor} !important;
	padding-bottom: 10vh;
	padding-left: 8.33%;
	padding-right: 8.33%;
	padding-top: 10vh;

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
const	GalleryDescription = styled.div`
	font-size: 20px;
	& > p {padding-bottom: 16px;}
`;
const	GalleryTitle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: #FFFFFF;
    text-align: left;
	flex: 4;
	& > h1 {
		font-size: 60px;
		margin-bottom: 60px;
	}
`;
const	GalleryPreviewNeeds = styled.div`
	transform: scale(0.8);
	transform-origin: top right;
	flex: 6;
`;
const	GalleryCTAButton = styled.button`
    color: #FFFFFF;
	background: #EC407A;


    border-radius: 4px;
    font-size: 22px;
    padding: 8px 16px;
    backdrop-filter: blur(.4rem);
    user-select: none;
	margin-top: 64px;
	&:hover {
		color: #FFFFFF;
		background: #EC407A;
		transition: 0.2s;
	}
`;

function	Gallery() {
	return (
		<HomeGallery>
			<GalleryTitle>
				<h1>{'Create and organize your albums'}</h1>
				<GalleryDescription>
					<p>{`With Panghostlin, managing your photos has never been easier.`}</p>
					<p>{`Create as many albums as you need, group your best memories together and forget about hard drives and USB sticks : all the photos from your last trip, your wedding, your last party are safely stored. And only you have access to them.`}</p>
				</GalleryDescription>
				
				<div>
					<GalleryCTAButton onClick={() => props.router.push(`/gallery`)}>{'Access your gallery'}</GalleryCTAButton>
				</div>

			</GalleryTitle>
			<GalleryPreviewNeeds>
				<GalleryFakeBrowser style={{transform: 'scale(0.8)'}} />
			</GalleryPreviewNeeds>
		</HomeGallery>
	);
}

function	Index(props) {
	return (
		<Home>
			<Hero router={props.router} />
			<Feature />
			<Gallery />
			
		</Home>
	);
}

export default Index;
