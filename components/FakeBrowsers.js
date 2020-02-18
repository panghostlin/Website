/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Monday 17 February 2020 - 15:46:38
** @Filename:				FakeBrowsers.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Tuesday 18 February 2020 - 16:17:14
*******************************************************************************/

import	React, {useState, useRef, useEffect}			from	'react';
import	styled, {css, keyframes}	from	'styled-components';
import	useIntersectionObserver		from	'../utils/useIntesectionObserver';

const	backgroundColor = '#191c28';
const	backgroundAccentColor = '#242a3b';
const	backgroundPatterns = [
	require(`../static/images/fakePicture01.svg`),
	require(`../static/images/fakePicture02.svg`),
	require(`../static/images/fakePicture03.svg`),
	require(`../static/images/summers/fakePicture_summer03.svg`),
	require(`../static/images/jungles/fakePicture_jungle09.svg`),
	require(`../static/images/fakePicture06.svg`),
	require(`../static/images/fakePicture07.svg`),
	require(`../static/images/fakePicture08.svg`),
	require(`../static/images/beachSunsets/fakePicture_beachSunset01.svg`),
];

const	backgroundDeserts = [
	require(`../static/images/deserts/fakePicture_desert01.svg`),
	require(`../static/images/deserts/fakePicture_desert02.svg`),
	require(`../static/images/deserts/fakePicture_desert03.svg`),
	require(`../static/images/deserts/fakePicture_desert04.svg`),
	require(`../static/images/deserts/fakePicture_desert05.svg`),
	require(`../static/images/deserts/fakePicture_desert06.svg`),
	require(`../static/images/deserts/fakePicture_desert07.svg`),
	require(`../static/images/deserts/fakePicture_desert08.svg`),
	require(`../static/images/deserts/fakePicture_desert09.svg`),
];
const	backgroundJungles = [
	require(`../static/images/jungles/fakePicture_jungle01.svg`),
	require(`../static/images/jungles/fakePicture_jungle02.svg`),
	require(`../static/images/jungles/fakePicture_jungle03.svg`),
	require(`../static/images/jungles/fakePicture_jungle04.svg`),
	require(`../static/images/jungles/fakePicture_jungle05.svg`),
	require(`../static/images/jungles/fakePicture_jungle06.svg`),
	require(`../static/images/jungles/fakePicture_jungle07.svg`),
	require(`../static/images/jungles/fakePicture_jungle08.svg`),
	require(`../static/images/jungles/fakePicture_jungle09.svg`),
];
const	backgroundCities = [
	require(`../static/images/cities/fakePicture_city01.svg`),
	require(`../static/images/cities/fakePicture_city02.svg`),
	require(`../static/images/cities/fakePicture_city03.svg`),
	require(`../static/images/cities/fakePicture_city04.svg`),
	require(`../static/images/cities/fakePicture_city05.svg`),
	require(`../static/images/cities/fakePicture_city06.svg`),
];
const	backgroundSummers = [
	require(`../static/images/summers/fakePicture_summer01.svg`),
	require(`../static/images/summers/fakePicture_summer02.svg`),
	require(`../static/images/summers/fakePicture_summer03.svg`),
	require(`../static/images/summers/fakePicture_summer04.svg`),
	require(`../static/images/summers/fakePicture_summer05.svg`),
	require(`../static/images/summers/fakePicture_summer06.svg`),
	require(`../static/images/summers/fakePicture_summer07.svg`),
	require(`../static/images/summers/fakePicture_summer08.svg`),
	require(`../static/images/summers/fakePicture_summer09.svg`),
];
const	backgroundBeachSunsets = [
	require(`../static/images/beachSunsets/fakePicture_beachSunset01.svg`),
	require(`../static/images/beachSunsets/fakePicture_beachSunset02.svg`),
	require(`../static/images/beachSunsets/fakePicture_beachSunset03.svg`),
	require(`../static/images/beachSunsets/fakePicture_beachSunset04.svg`),
	require(`../static/images/beachSunsets/fakePicture_beachSunset05.svg`),
	require(`../static/images/beachSunsets/fakePicture_beachSunset06.svg`),
	require(`../static/images/beachSunsets/fakePicture_beachSunset07.svg`),
];
const	backgroundBrittany = [
	require(`../static/images/brittany/fakePicture_brittany01.svg`),
	require(`../static/images/brittany/fakePicture_brittany02.svg`),
	require(`../static/images/brittany/fakePicture_brittany03.svg`),
	require(`../static/images/brittany/fakePicture_brittany04.svg`),
	require(`../static/images/brittany/fakePicture_brittany05.svg`),
	require(`../static/images/brittany/fakePicture_brittany06.svg`),
	require(`../static/images/brittany/fakePicture_brittany07.svg`),
	require(`../static/images/brittany/fakePicture_brittany08.svg`),
	require(`../static/images/brittany/fakePicture_brittany09.svg`),
];

const	zoomIn = keyframes`
	0% {transform: scale(0); opacity: 0;}
	100 {transform: scale(1); opacity: 1;}
`;
const	zoomInRule = css`${zoomIn} 0.4s;`

const	FakeBrowser = styled.div`
    width: 55vw;
    height: 60vh;
    margin: 0 auto;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
	flex-wrap: wrap;
    position: relative;
    -webkit-box-shadow: 0 80px 100px -24px rgba(0,0,0,.45);
    box-shadow: 0 80px 100px -24px rgba(0,0,0,.45);
	background: ${backgroundAccentColor};
	padding: 16px 32px;
	padding-top: 64px;
	overflow: hidden;
	contain: strict;
	will-change: transform;

	&::before {
		content: "";
		display: block;
		width: 8px;
		height: 8px;
		border-radius: 40px;
		position: absolute;
		top: 26px;
		left: 30px;
		background: #ff5f56;
		box-shadow: 16px 0px 0px #ffbd2e, 32px 0px 0px #27c93f;
	}
`;
const	FakeBrowserPicture = styled.div`
    width: 16vw;
    height: 16vh;
    border-radius: 4px;
    box-shadow: 0 8px 10px -2px rgba(0,0,0,.45);
	background-image: ${props => `url(${props.background})`};
	background-size: cover;
	background-position-x: center;
	background-position-y: ${props => props.position || `0%`};
	contain: strict;
	contain: content;
	will-change: transform;
	cursor: pointer;
	display: flex;
	z-index: 1;
	&:hover {
		opacity: 0.8;
	}
`;
const	FakeBrowserEmptyPicture = styled.div`
    width: 16vw;
    height: 16vh;
    border-radius: 4px;
	contain: strict;
	display: flex;
`;

function	MainFakeBrowser() {
	return (
		<FakeBrowser>
			<FakeBrowserPicture isVisible background={backgroundPatterns[0]} />
			<FakeBrowserPicture isVisible background={backgroundPatterns[1]} position={`30%`} />
			<FakeBrowserPicture isVisible background={backgroundPatterns[2]} position={`20%`} />

			<FakeBrowserPicture isVisible background={backgroundPatterns[3]} position={`75%`} />
			<FakeBrowserPicture isVisible background={backgroundPatterns[4]} position={`20%`} />
			<FakeBrowserPicture isVisible background={backgroundPatterns[5]} position={`50%`} />

			<FakeBrowserPicture isVisible background={backgroundPatterns[6]} position={`20%`} />
			<FakeBrowserPicture isVisible background={backgroundPatterns[7]} />
			<FakeBrowserPicture isVisible background={backgroundPatterns[8]} position={`20%`} />
		</FakeBrowser>
	);
}


const	FakeBrowserAlbum = styled.div`
    width: 16vw;
    height: 22vh;
    border-radius: 4px;
	cursor: pointer;
	
	& > p {
		color: #FFFFFF;
		font-size: 12px;
		margin-left: 4px;
		margin-top: 8px;
		border-radius: 4px;
	}
	& > span {
		color: #767676;
		font-size: 10px;
		margin-left: 4px;
		border-radius: 4px;
	}
	& ${FakeBrowserPicture} {
		animation: ${zoomInRule};
	}
`;
const	FakeBrowserAlbumContainer = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    position: relative;
	overflow: hidden;
	position: absolute;
	left: 32px;
	right: 32px;

	opacity: ${props => props.isVisible ? '1' : '0'};
	pointer-events: ${props => props.isVisible ? 'auto' : 'none'};

	& ${FakeBrowserPicture} {
		animation: ${props => props.isVisible ? zoomInRule : 'none'};
	}
`;
const	FakeBrowserAlbumNavbar = styled.div`
	font-size: 14px;
	color: #FFFFFF;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
	display: flex;
	margin-bottom: 10px;
	& > p {margin-left: 8px;}
`;
const	FakeBrowserAlbumView = styled.div`
    justify-content: space-between;
    flex-direction: row;
	flex-wrap: wrap;
	display: flex;
	height: calc(100% - 70px);
`;
const	FakeBrowserFlyingButton = styled.div`
	position: absolute;
	right: 32px;
	bottom: 16px;
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background: #EC407A;
	color: #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
`;
const	FakeBrowserLightbox = styled.div`
	position: absolute;
	top: 63px;
	left: 0;
	right: 0;
	bottom: 0;
    border-radius: 4px;
    box-shadow: 0 8px 10px -2px rgba(0,0,0,.45);
	background-image: ${props => `url(${props.background})`};
	background-size: cover;
	background-position-x: center;
	background-position-y: ${props => props.position || `0%`};
	contain: strict;
	will-change: transform;
	cursor: pointer;

	display: ${props => props.isVisible ? 'flex' : 'none'};
	z-index: ${props => props.isVisible ? 10 : -1};
	animation: ${props => props.isVisible ? zoomInRule : 'none'};
`;
const	Close = styled.div`
    position: absolute;
	top: 85px;
	right: 32px;
	z-index: 10;
    box-sizing: border-box;
    display: block;
    transform: scale(${props => props.size || 1});
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 40px;
	color: #FFFFFF;
	cursor: pointer;
	&::after, &::before {
		content: "";
		display: block;
		box-sizing: border-box;
		position: absolute;
		width: 16px;
		height: 2px;
		background: currentColor;
		transform: rotate(45deg);
		border-radius: 5px;
		top: 8px;
		left: 1px;
	}
	&::after {
    	transform: rotate(-45deg)
	}
`;
const	Back = styled.div`

    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(${props => props.size || 1});
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
	color: ${props => props.color || '#FFFFFF'};

	&::after {
		content: "";
		display: block;
		box-sizing: border-box;
		position: absolute;
		width: 10px;
		height: 10px;
		border-bottom: 2px solid;
		border-left: 2px solid;
		transform: rotate(45deg);
		left: 6px;
		top: 4px;
	}
`;


function	FakeBrowserPictureWrapper(props) {
	const	imageRef = useRef();
	const	[visible, set_visible] = useState(false);

	useIntersectionObserver({
		target: imageRef,
		onIntersect: ([{isIntersecting}], observerElement) => {
			if (isIntersecting) {
				set_visible(true);
				observerElement.unobserve(imageRef.current);
			}
		}
	});

	return (
		<span ref={imageRef}>
			{visible && <FakeBrowserPicture {...props} />}
		</span>
	)
}

function	GalleryFakeBrowser() {
	const	[view, set_view] = useState('gallery');
	const	[lightBox, set_lightBox] = useState(undefined);
	const	[albumName, set_albumName] = useState('');
	
	function	resetView() {
		set_view('gallery')
	}
	
	function	renderAlbums() {
		if (view !== 'gallery')
			return (null);
		return (
			<>
				<FakeBrowserAlbum onClick={() => {
					set_albumName('My purple city');
					set_view('city');
				}}>
					<FakeBrowserPictureWrapper background={backgroundCities[1]} />
					<p>{'My purple city'}</p>
					<span>{'6 pictures - 20/01/2020'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Summer 2019');
					set_view('summer');
				}}>
					<FakeBrowserPictureWrapper background={backgroundSummers[1]} position={'bottom'} />
					<p>{'Summer 2019'}</p>
					<span>{'107 pictures - 07/07/2019'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Desert pictures');
					set_view('desert');
				}}>
					<FakeBrowserPictureWrapper background={backgroundDeserts[8]} position={'50%'} />
					<p>{'Desert pictures'}</p>
					<span>{'24 pictures - 06/04/2019'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Brittany');
					set_view('brittany');
				}}>
					<FakeBrowserPictureWrapper background={backgroundBrittany[8]} position={'bottom'} />
					<p>{'Brittany'}</p>
					<span>{'89 pictures - 15/02/2019'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Sunsets at Monaco');
					set_view('beachSunset');
				}}>
					<FakeBrowserPictureWrapper background={backgroundBeachSunsets[1]} position={'center'} />
					<p>{'Sunsets at Monaco'}</p>
					<span>{'7 pictures - 27/08/2018'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Amazonian Jungle');
					set_view('jungle');
				}}>
					<FakeBrowserPictureWrapper background={backgroundJungles[8]} />
					<p>{'Amazonian Jungle'}</p>
					<span>{'245 pictures - 30/05/2016'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={resetView}>
					<FakeBrowserPictureWrapper background={backgroundPatterns[0]} />
					<p>{'~~~~~~~~~~~~~~~'}</p>
					<span>{'107 pictures - 07/07/2019'}</span>
				</FakeBrowserAlbum>
			</>
		)
	}
	function	renderAlbumDesert() {
		return (
			<FakeBrowserAlbumContainer isVisible={view === 'desert'}>
				<FakeBrowserAlbumNavbar onClick={resetView}>
					<Back />
					<p>{albumName}</p>
				</FakeBrowserAlbumNavbar>
				<FakeBrowserAlbumView>
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundDeserts[0])}
						background={backgroundDeserts[0]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundDeserts[1])}
						background={backgroundDeserts[1]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundDeserts[2])}
						background={backgroundDeserts[2]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundDeserts[8])}
						background={backgroundDeserts[8]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundDeserts[3])}
						background={backgroundDeserts[3]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundDeserts[4])}
						background={backgroundDeserts[4]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundDeserts[5])}
						background={backgroundDeserts[5]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundDeserts[6])}
						background={backgroundDeserts[6]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundDeserts[7])}
						background={backgroundDeserts[7]} />
				</FakeBrowserAlbumView>
			</FakeBrowserAlbumContainer>
		);
	}
	function	renderAlbumJungle() {
		return (
			<FakeBrowserAlbumContainer isVisible={view === 'jungle'}>
				<FakeBrowserAlbumNavbar onClick={resetView}>
					<Back />
					<p>{albumName}</p>
				</FakeBrowserAlbumNavbar>
				<FakeBrowserAlbumView>
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundJungles[8])}
						background={backgroundJungles[8]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundJungles[0])}
						background={backgroundJungles[0]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundJungles[1])}
						background={backgroundJungles[1]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundJungles[2])}
						background={backgroundJungles[2]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundJungles[3])}
						background={backgroundJungles[3]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundJungles[4])}
						background={backgroundJungles[4]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundJungles[5])}
						background={backgroundJungles[5]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundJungles[6])}
						background={backgroundJungles[6]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundJungles[7])}
						background={backgroundJungles[7]} />
				</FakeBrowserAlbumView>
			</FakeBrowserAlbumContainer>
		);
	}
	function	renderAlbumCity() {
		return (
			<FakeBrowserAlbumContainer isVisible={view === 'city'}>
				<FakeBrowserAlbumNavbar onClick={resetView}>
					<Back />
					<p>{albumName}</p>
				</FakeBrowserAlbumNavbar>
				<FakeBrowserAlbumView>
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundCities[0])}
						background={backgroundCities[0]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundCities[1])}
						background={backgroundCities[1]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundCities[2])}
						background={backgroundCities[2]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundCities[3])}
						background={backgroundCities[3]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundCities[4])}
						background={backgroundCities[4]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundCities[5])}
						background={backgroundCities[5]} position={'center'} />
					<FakeBrowserEmptyPicture />
					<FakeBrowserEmptyPicture />
					<FakeBrowserEmptyPicture />
				</FakeBrowserAlbumView>
			</FakeBrowserAlbumContainer>
		);
	}
	function	renderAlbumSummer() {
		return (
			<FakeBrowserAlbumContainer isVisible={view === 'summer'}>
				<FakeBrowserAlbumNavbar onClick={resetView}>
					<Back />
					<p>{albumName}</p>
				</FakeBrowserAlbumNavbar>
				<FakeBrowserAlbumView>
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundSummers[0])}
						background={backgroundSummers[0]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundSummers[1])}
						background={backgroundSummers[1]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundSummers[2])}
						background={backgroundSummers[2]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundSummers[3])}
						background={backgroundSummers[3]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundSummers[4])}
						background={backgroundSummers[4]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundSummers[5])}
						background={backgroundSummers[5]} position={'20%'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundSummers[6])}
						background={backgroundSummers[6]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundSummers[7])}
						background={backgroundSummers[7]} position={'20%'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundSummers[8])}
						background={backgroundSummers[8]} position={'20%'} />
				</FakeBrowserAlbumView>
			</FakeBrowserAlbumContainer>
		);
	}
	function	renderAlbumBeach() {
		return (
			<FakeBrowserAlbumContainer isVisible={view === 'beachSunset'}>
				<FakeBrowserAlbumNavbar onClick={resetView}>
					<Back />
					<p>{albumName}</p>
				</FakeBrowserAlbumNavbar>
				<FakeBrowserAlbumView>
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBeachSunsets[0])}
						background={backgroundBeachSunsets[0]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBeachSunsets[1])}
						background={backgroundBeachSunsets[1]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBeachSunsets[2])}
						background={backgroundBeachSunsets[2]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBeachSunsets[3])}
						background={backgroundBeachSunsets[3]} position={'60%'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBeachSunsets[4])}
						background={backgroundBeachSunsets[4]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBeachSunsets[5])}
						background={backgroundBeachSunsets[5]} position={'20%'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBeachSunsets[6])}
						background={backgroundBeachSunsets[6]} position={'center'} />
					<FakeBrowserEmptyPicture />
					<FakeBrowserEmptyPicture />
				</FakeBrowserAlbumView>
			</FakeBrowserAlbumContainer>
		);
	}
	function	renderAlbumBritanny() {
		return (
			<FakeBrowserAlbumContainer isVisible={view === 'brittany'}>
				<FakeBrowserAlbumNavbar onClick={resetView}>
					<Back />
					<p>{albumName}</p>
				</FakeBrowserAlbumNavbar>
				<FakeBrowserAlbumView>
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBrittany[0])}
						background={backgroundBrittany[0]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBrittany[1])}
						background={backgroundBrittany[1]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBrittany[2])}
						background={backgroundBrittany[2]} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBrittany[3])}
						background={backgroundBrittany[3]} position={'60%'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBrittany[4])}
						background={backgroundBrittany[4]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBrittany[5])}
						background={backgroundBrittany[5]} position={'20%'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBrittany[6])}
						background={backgroundBrittany[6]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBrittany[7])}
						background={backgroundBrittany[7]} position={'center'} />
					<FakeBrowserPicture
						onClick={() => set_lightBox(backgroundBrittany[8])}
						background={backgroundBrittany[8]} position={'bottom'} />
				</FakeBrowserAlbumView>
			</FakeBrowserAlbumContainer>
		);
	}
	function	renderFakeLightbox() {
		if (lightBox === undefined)
			return (null);
		return (
			<>
				<FakeBrowserLightbox onClick={() => set_lightBox(undefined)} isVisible={lightBox !== undefined} background={lightBox} position={'bottom'} />
				<Close onClick={() => set_lightBox(undefined)} />
			</>
		);
	}

	return (
		<FakeBrowser>
			{renderAlbums()}
			{renderAlbumDesert()}
			{renderAlbumJungle()}
			{renderAlbumCity()}
			{renderAlbumSummer()}
			{renderAlbumBeach()}
			{renderAlbumBritanny()}
			{renderFakeLightbox()}
			
			<FakeBrowserFlyingButton>{'+'}</FakeBrowserFlyingButton>
		</FakeBrowser>
	);
}

export {GalleryFakeBrowser};
export default MainFakeBrowser;
