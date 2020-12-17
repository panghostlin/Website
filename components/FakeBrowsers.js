/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Monday 17 February 2020 - 15:46:38
** @Filename:				FakeBrowsers.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Tuesday 18 February 2020 - 16:17:14
*******************************************************************************/

import	React, {useState}			from	'react';
import	Image						from	'next/image';
import	styled, {css, keyframes}	from	'styled-components';

const	backgroundAccentColor = '#242a3b';
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
	overflow: hidden;
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
			<FakeBrowserPicture isVisible>
				<Image src={`/images/fakePicture01.svg`} layout={'fill'} objectFit={'cover'} loading={'eager'} priority />
			</FakeBrowserPicture>
			<FakeBrowserPicture isVisible>
				<Image src={`/images/fakePicture02.svg`} layout={'fill'} objectFit={'cover'} loading={'eager'} priority />
			</FakeBrowserPicture>
			<FakeBrowserPicture isVisible>
				<Image src={`/images/fakePicture03.svg`} layout={'fill'} objectFit={'cover'} loading={'eager'} priority />
			</FakeBrowserPicture>

			<FakeBrowserPicture isVisible>
				<Image src={`/images/summers/fakePicture_summer03.svg`} layout={'fill'} objectFit={'cover'} loading={'eager'} priority />
			</FakeBrowserPicture>
			<FakeBrowserPicture isVisible>
				<Image src={`/images/jungles/fakePicture_jungle09.svg`} layout={'fill'} objectFit={'cover'} loading={'eager'} priority />
			</FakeBrowserPicture>
			<FakeBrowserPicture isVisible>
				<Image src={`/images/fakePicture06.svg`} layout={'fill'} objectFit={'cover'} loading={'eager'} priority />
			</FakeBrowserPicture>

			<FakeBrowserPicture isVisible>
				<Image src={`/images/fakePicture07.svg`} layout={'fill'} objectFit={'cover'} loading={'eager'} priority />
			</FakeBrowserPicture>
			<FakeBrowserPicture isVisible>
				<Image src={`/images/fakePicture08.svg`} layout={'fill'} objectFit={'cover'} loading={'eager'} priority />
			</FakeBrowserPicture>
			<FakeBrowserPicture isVisible>
				<Image src={`/images/beachSunsets/fakePicture_beachSunset01.svg`} layout={'fill'} objectFit={'cover'} loading={'eager'} priority />
			</FakeBrowserPicture>
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


function	FakeBrowserPictureWrapper({background}) {
	return (
		<FakeBrowserPicture>
			<Image loading={'eager'} priority src={background} layout={'fill'} objectFit={'cover'} />
		</FakeBrowserPicture>
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
					<FakeBrowserPictureWrapper background={'/images/cities/fakePicture_city02.svg'} />
					<p>{'My purple city'}</p>
					<span>{'6 pictures - 20/01/2020'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Summer 2019');
					set_view('summer');
				}}>
					<FakeBrowserPictureWrapper background={'/images/summers/fakePicture_summer02.svg'} />
					<p>{'Summer 2019'}</p>
					<span>{'107 pictures - 07/07/2019'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Desert pictures');
					set_view('desert');
				}}>
					<FakeBrowserPictureWrapper background={'/images/deserts/fakePicture_desert09.svg'} />
					<p>{'Desert pictures'}</p>
					<span>{'24 pictures - 06/04/2019'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Brittany');
					set_view('brittany');
				}}>
					<FakeBrowserPictureWrapper background={'/images/brittany/fakePicture_brittany09.svg'} />
					<p>{'Brittany'}</p>
					<span>{'89 pictures - 15/02/2019'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Sunsets at Monaco');
					set_view('beachSunset');
				}}>
					<FakeBrowserPictureWrapper background={'/images/beachSunsets/fakePicture_beachSunset07.svg'} />
					<p>{'Sunsets at Monaco'}</p>
					<span>{'7 pictures - 27/08/2018'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={() => {
					set_albumName('Amazonian Jungle');
					set_view('jungle');
				}}>
					<FakeBrowserPictureWrapper background={'/images/jungles/fakePicture_jungle09.svg'} />
					<p>{'Amazonian Jungle'}</p>
					<span>{'245 pictures - 30/05/2016'}</span>
				</FakeBrowserAlbum>

				<FakeBrowserAlbum onClick={resetView}>
					<FakeBrowserPictureWrapper background={'/images/fakePicture01.svg'} />
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
					<FakeBrowserPicture onClick={() => set_lightBox('/images/deserts/fakePicture_desert01.svg')}>
						<Image src={'/images/deserts/fakePicture_desert01.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/deserts/fakePicture_desert02.svg')}>
						<Image src={'/images/deserts/fakePicture_desert02.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/deserts/fakePicture_desert03.svg')}>
						<Image src={'/images/deserts/fakePicture_desert03.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/deserts/fakePicture_desert09.svg')}>
						<Image src={'/images/deserts/fakePicture_desert09.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/deserts/fakePicture_desert04.svg')}>
						<Image src={'/images/deserts/fakePicture_desert04.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/deserts/fakePicture_desert05.svg')}>
						<Image src={'/images/deserts/fakePicture_desert05.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/deserts/fakePicture_desert06.svg')}>
						<Image src={'/images/deserts/fakePicture_desert06.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/deserts/fakePicture_desert07.svg')}>
						<Image src={'/images/deserts/fakePicture_desert07.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/deserts/fakePicture_desert08.svg')}>
						<Image src={'/images/deserts/fakePicture_desert08.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
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
					<FakeBrowserPicture onClick={() => set_lightBox('/images/jungles/fakePicture_jungle09.svg')}>
						<Image src={'/images/jungles/fakePicture_jungle09.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/jungles/fakePicture_jungle01.svg')}>
						<Image src={'/images/jungles/fakePicture_jungle01.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/jungles/fakePicture_jungle02.svg')}>
						<Image src={'/images/jungles/fakePicture_jungle02.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/jungles/fakePicture_jungle03.svg')}>
						<Image src={'/images/jungles/fakePicture_jungle03.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/jungles/fakePicture_jungle04.svg')}>
						<Image src={'/images/jungles/fakePicture_jungle04.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/jungles/fakePicture_jungle05.svg')}>
						<Image src={'/images/jungles/fakePicture_jungle05.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/jungles/fakePicture_jungle06.svg')}>
						<Image src={'/images/jungles/fakePicture_jungle06.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/jungles/fakePicture_jungle07.svg')}>
						<Image src={'/images/jungles/fakePicture_jungle07.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/jungles/fakePicture_jungle08.svg')}>
						<Image src={'/images/jungles/fakePicture_jungle08.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
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
					<FakeBrowserPicture onClick={() => set_lightBox('/images/cities/fakePicture_city01.svg')}>
						<Image src={'/images/cities/fakePicture_city01.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/cities/fakePicture_city02.svg')}>
						<Image src={'/images/cities/fakePicture_city02.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/cities/fakePicture_city03.svg')}>
						<Image src={'/images/cities/fakePicture_city03.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/cities/fakePicture_city04.svg')}>
						<Image src={'/images/cities/fakePicture_city04.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/cities/fakePicture_city05.svg')}>
						<Image src={'/images/cities/fakePicture_city05.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/cities/fakePicture_city06.svg')}>
						<Image src={'/images/cities/fakePicture_city06.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
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
					<FakeBrowserPicture onClick={() => set_lightBox('/images/summers/fakePicture_summer01.svg')}>
						<Image src={'/images/summers/fakePicture_summer01.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/summers/fakePicture_summer02.svg')}>
						<Image src={'/images/summers/fakePicture_summer02.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/summers/fakePicture_summer03.svg')}>
						<Image src={'/images/summers/fakePicture_summer03.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/summers/fakePicture_summer04.svg')}>
						<Image src={'/images/summers/fakePicture_summer04.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/summers/fakePicture_summer05.svg')}>
						<Image src={'/images/summers/fakePicture_summer05.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/summers/fakePicture_summer06.svg')}>
						<Image src={'/images/summers/fakePicture_summer06.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/summers/fakePicture_summer07.svg')}>
						<Image src={'/images/summers/fakePicture_summer07.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/summers/fakePicture_summer08.svg')}>
						<Image src={'/images/summers/fakePicture_summer08.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/summers/fakePicture_summer09.svg')}>
						<Image src={'/images/summers/fakePicture_summer09.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
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
					<FakeBrowserPicture onClick={() => set_lightBox('/images/beachSunsets/fakePicture_beachSunset01.svg')}>
						<Image src={'/images/beachSunsets/fakePicture_beachSunset01.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/beachSunsets/fakePicture_beachSunset02.svg')}>
						<Image src={'/images/beachSunsets/fakePicture_beachSunset02.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/beachSunsets/fakePicture_beachSunset03.svg')}>
						<Image src={'/images/beachSunsets/fakePicture_beachSunset03.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/beachSunsets/fakePicture_beachSunset04.svg')}>
						<Image src={'/images/beachSunsets/fakePicture_beachSunset04.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/beachSunsets/fakePicture_beachSunset05.svg')}>
						<Image src={'/images/beachSunsets/fakePicture_beachSunset05.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/beachSunsets/fakePicture_beachSunset06.svg')}>
						<Image src={'/images/beachSunsets/fakePicture_beachSunset06.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/beachSunsets/fakePicture_beachSunset07.svg')}>
						<Image src={'/images/beachSunsets/fakePicture_beachSunset07.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
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
					<FakeBrowserPicture onClick={() => set_lightBox('/images/brittany/fakePicture_brittany01.svg')}>
						<Image src={'/images/brittany/fakePicture_brittany01.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/brittany/fakePicture_brittany02.svg')}>
						<Image src={'/images/brittany/fakePicture_brittany02.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/brittany/fakePicture_brittany03.svg')}>
						<Image src={'/images/brittany/fakePicture_brittany03.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/brittany/fakePicture_brittany04.svg')}>
						<Image src={'/images/brittany/fakePicture_brittany04.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/brittany/fakePicture_brittany05.svg')}>
						<Image src={'/images/brittany/fakePicture_brittany05.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/brittany/fakePicture_brittany06.svg')}>
						<Image src={'/images/brittany/fakePicture_brittany06.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/brittany/fakePicture_brittany07.svg')}>
						<Image src={'/images/brittany/fakePicture_brittany07.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/brittany/fakePicture_brittany08.svg')}>
						<Image src={'/images/brittany/fakePicture_brittany08.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
					<FakeBrowserPicture onClick={() => set_lightBox('/images/brittany/fakePicture_brittany09.svg')}>
						<Image src={'/images/brittany/fakePicture_brittany09.svg'} layout={'fill'} objectFit={'cover'} />
					</FakeBrowserPicture>
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
