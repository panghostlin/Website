/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Friday 03 January 2020 - 16:49:43
** @Filename:				index.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Tuesday 18 February 2020 - 16:24:58
*******************************************************************************/

import	React					from	'react';
import	Link					from	'next/link'
import	styled					from	'styled-components';

const	backgroundColor = '#191c28';
const	backgroundAccentColor = '#242a3b';

const	Page = styled.main`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	width: 100%;
	min-width: 100vw;
`;
const	PageCredits = styled.section`
	background-image: radial-gradient(rgba(255,255,255,.05) 1px,transparent 0),radial-gradient(rgba(255,255,255,.05) 1px,transparent 0);
    background: radial-gradient(${backgroundAccentColor} 1px,transparent 0),radial-gradient(${backgroundAccentColor} 1px,transparent 0),linear-gradient(180deg,${backgroundAccentColor} 0%,${backgroundColor} 100%);
    background-size: 40px 40px,40px 40px,100%,100%;
    background-position: 0 0,20px 20px,center;
	width: 100%;
    padding-bottom: 10vh;
    display: flex;
    flex-direction: column;
	flex-grow: 1;
	height: 100%;
	padding-left: 8.33%;
	padding-right: 8.33%;
`;
const	CreditsBackground = styled.div`
	position: absolute;
    width: 100%;
    height: 100%;
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
`;
const	CreditsSections = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 4vh;
`;
const	CreditsSection = styled.div`
	z-index: 2;
	font-size: 20px;
	margin-bottom: 32px;
	& > p {padding-bottom: 16px;}
`;
const	CreditsSectionTitle = styled.h4`
    color: #FFFFFF;
    text-align: left;
	font-size: 24px;
	margin-bottom: 16px;
`;
const	CreditsTitle = styled.div`
	z-index: 2;
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
`;
const	Credits = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: #FFFFFF;
	font-size: 14px;
	margin-bottom: 8px;
	& > a {
		color: #FFFFFF;
		font-size: 14px;
		text-decoration: underline;
	}
	& > p {
		color: #FFFFFF;
		font-size: 14px;
	}
	&::before {
		content: "";
		width: 4px;
		height: 4px;
		background: #FFFFFF;
		border-radius: 4px;
		margin-right: 8px;
	}
`;

function	CreditsItem(props) {
	return (
		<Credits>
			<Link href={props.staticHref}>{props.name}</Link>
			&nbsp;<p>{'by'}</p>&nbsp;
			<a href={props.href}>{props.by}</a>
		</Credits>
	);
}

function	CreditsPage() {
	function	renderSectionIllustrations() {
		return (
			<CreditsSection>
				<CreditsSectionTitle>{'Illustrations'}</CreditsSectionTitle>
				<CreditsItem
					staticHref={'/images/fakePicture01.svg'}
					href={'https://www.freepik.com/free-vector/palm-tree-chain-mountains-landscape_5378566.htm'}
					name={'Palm tree and chain of mountains landscape'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/fakePicture02.svg'}
					href={'https://publicdomainvectors.org/en/free-clipart/Arctic-landscape-vector-clip-art/75362.html'}
					name={'Arctic landscape vector clip art'}
					by={'Public Domain Vectors'} />
				<CreditsItem
					staticHref={'/images/fakePicture03.svg'}
					href={'https://publicdomainvectors.org/en/free-clipart/Egyptian-pyramids/84161.html'}
					name={'Egyptian pyramids'}
					by={'Public Domain Vectors'} />
				<CreditsItem
					staticHref={'/images/fakePicture06.svg'}
					href={'https://publicdomainvectors.org/en/free-clipart/Train-on-the-bridge/83686.html'}
					name={'Train on the bridge'}
					by={'Public Domain Vectors'} />
				<CreditsItem
					staticHref={'/images/fakePicture07.svg'}
					href={'https://publicdomainvectors.org/en/free-clipart/Snowfall-on-mountain/84154.html'}
					name={'Snowfall on mountain'}
					by={'Public Domain Vectors'} />
				<CreditsItem
					staticHref={'/images/fakePicture08.svg'}
					href={'https://www.freepik.com/free-vector/mountains-landscape-with-high-peaks_5481306.htm'}
					name={'Mountains landscape with high peaks'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/fakePicture13.svg'}
					href={'https://www.vecteezy.com/vector-art/217232-vector-nature-landscape-illustration'}
					name={'Vector Nature Landscape Illustration'}
					by={'Vecteezy'} />
			</CreditsSection>
		);
	}

	function	renderSectionIcons() {
		return (
			<CreditsSection>
				<CreditsSectionTitle>{'Icons'}</CreditsSectionTitle>
				<CreditsItem
					staticHref={'/images/feature_hide.svg'}
					href={'https://www.flaticon.com/free-icon/visibility_633887?term=eye&page=1&position=50'}
					name={'Hide'}
					by={'Pixel perfect'} />
				<CreditsItem
					staticHref={'/images/feature_anonymous.svg'}
					href={'https://www.flaticon.com/free-icon/invisible-person-of-clothes_57081?term=person%20anonymous&page=1&position=1'}
					name={'Invisible Person Of Clothes'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/feature_leaf.svg'}
					href={'https://www.flaticon.com/free-icon/leaf_497348?term=leaf&page=1&position=49'}
					name={'Leaf'}
					by={'Pixel perfect'} />
				<CreditsItem
					staticHref={'/images/feature_selfHosting.svg'}
					href={'https://www.flaticon.com/free-icon/cloud-computing_621093?term=cloud%20server&page=2&position=6'}
					name={'Cloud Computing'}
					by={'Pixel perfect'} />
				<CreditsItem
					staticHref={'/images/feature_transparency.svg'}
					href={'https://www.flaticon.com/free-icon/searching-magnifying-glass_61088'}
					name={'Searching Magnifying Glass'}
					by={'Google'} />
				<CreditsItem
					staticHref={'/images/feature_key.svg'}
					href={'https://icofont.com/icons'}
					name={'Key'}
					by={'IcoFont Icons'} />
				<CreditsItem
					staticHref={'/images/feature_lock.svg'}
					href={'https://icofont.com/icons'}
					name={'Key'}
					by={'IcoFont Icons'} />
				
				<CreditsItem
					staticHref={'/credits'}
					href={'https://css.gg/'}
					name={'More icons'}
					by={'css.gg'} />
			</CreditsSection>
		);
	}

	function	renderSectionDesertIllustrations() {
		return (
			<CreditsSection>
				<CreditsSectionTitle>{'Desert Illustrations'}</CreditsSectionTitle>
				<CreditsItem
					staticHref={'/images/deserts/fakePicture_desert01.svg'}
					href={'https://www.freepik.com/free-vector/desert-landscape-night-time_5329925.htm#page=1&query=desert%20landscape&position=1'}
					name={'Desert landscape at night time'}
					by={'Pikisuperstar'} />
				<CreditsItem
					staticHref={'/images/deserts/fakePicture_desert02.svg'}
					href={'https://www.freepik.com/free-vector/desert-with-bright-sun-tall-cactuses_5323450.htm#position=6'}
					name={'Desert with bright sun and tall cactuses'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/deserts/fakePicture_desert03.svg'}
					href={'https://www.freepik.com/free-vector/desert-landscape-night_5378063.htm#position=19'}
					name={'Desert landscape in the night'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/deserts/fakePicture_desert04.svg'}
					href={'https://www.freepik.com/free-vector/desert-landscape-with-golden-sand_5418564.htm'}
					name={'Desert landscape with golden sand'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/deserts/fakePicture_desert05.svg'}
					href={'https://www.freepik.com/free-vector/silhouettes-person-camels-desert_5378053.htm#page=1&query=desert%20landscape&position=45'}
					name={'Silhouettes of person and camels in desert'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/deserts/fakePicture_desert06.svg'}
					href={'https://www.freepik.com/free-vector/welcome-egypt-landing-page_4959368.htm'}
					name={'Welcome to egypt'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/deserts/fakePicture_desert07.svg'}
					href={'https://www.vecteezy.com/vector-art/192736-africa-desert-landscape-vector'}
					name={'Africa Desert Landscape Vector'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/deserts/fakePicture_desert08.svg'}
					href={'https://www.vecteezy.com/vector-art/224422-vector-desert-landscape-illustration'}
					name={'Vector Desert Landscape Illustration'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/deserts/fakePicture_desert09.svg'}
					href={'https://www.freepik.com/free-vector/flat-design-desert-landscape-background_5580099.htm#page=2&query=desert+landscape&position=8'}
					name={'Flat design desert landscape background'}
					by={'Freepik'} />
			</CreditsSection>
		);
	}
	function	renderSectionJungleIllustrations() {
		return (
			<CreditsSection>
				<CreditsSectionTitle>{'Jungle Illustrations'}</CreditsSectionTitle>
				<CreditsItem
					staticHref={'/images/jungles/fakePicture_jungle01.svg'}
					href={'https://www.freepik.com/free-vector/flat-nature-landing-page-template_5170054.htm#page=1&query=jungle&position=3'}
					name={'Flat nature landing page template'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/jungles/fakePicture_jungle02.svg'}
					href={'https://www.vecteezy.com/vector-art/175332-old-house-in-the-bayou-free-vector'}
					name={'Old House In The Bayou'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/jungles/fakePicture_jungle03.svg'}
					href={'https://www.freepik.com/free-vector/natural-background-with-tropical-forest-landscape_5223888.htm#page=1&query=tropical%20forest&position=24'}
					name={'Natural background with tropical forest landscape'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/jungles/fakePicture_jungle04.svg'}
					href={'https://www.freepik.com/free-vector/tropical-forest-landscape-with-mountains_5241192.htm#page=1&query=tropical%20forest&position=16'}
					name={'Tropical forest landscape with mountains'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/jungles/fakePicture_jungle05.svg'}
					href={'https://www.freepik.com/free-vector/blue-tropical-forest-landscape_5269593.htm#page=1&query=tropical%20forest&position=48'}
					name={'Blue tropical forest landscape'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/jungles/fakePicture_jungle06.svg'}
					href={'https://www.vecteezy.com/vector-art/172246-sunset-zipline-jungle-free-vector'}
					name={'Sunset Zipline Jungle'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/jungles/fakePicture_jungle07.svg'}
					href={'https://www.vecteezy.com/vector-art/139833-fresh-green-leaf-background'}
					name={'Fresh Green Leaf Background'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/jungles/fakePicture_jungle08.svg'}
					href={'https://www.vecteezy.com/vector-art/142185-yucca-background'}
					name={'Yucca Background'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/jungles/fakePicture_jungle09.svg'}
					href={'https://www.freepik.com/free-vector/beautiful-tropical-forest-landscape-with-variety-trees_5378361.htm'}
					name={'Beautiful tropical forest landscape with variety of trees'}
					by={'Freepik'} />
			</CreditsSection>
		);
	}
	function	renderSectionCityIllustrations() {
		return (
			<CreditsSection>
				<CreditsSectionTitle>{'City Illustrations'}</CreditsSectionTitle>
				<CreditsItem
					staticHref={'/images/cities/fakePicture_city01.svg'}
					href={'https://www.freepik.com/free-vector/flat-futuristic-night-city-background_4441683.htm'}
					name={'Flat futuristic night city '}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/cities/fakePicture_city02.svg'}
					href={'https://www.freepik.com/free-vector/couple-sitting-bench-city-embankment-man-woman-enjoying-city-night-view_5467417.htm#position=8'}
					name={'Couple sitting on bench at city embankment, man and woman enjoying city night view'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/cities/fakePicture_city03.svg'}
					href={'https://www.freepik.com/free-vector/flat-futuristic-night-city-background_4441686.htm'}
					name={'Flat futuristic night city background'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/cities/fakePicture_city04.svg'}
					href={'https://www.freepik.com/free-vector/futuristic-night-city-background_4435123.htm#position=6&page=1'}
					name={'Futuristic night city background'}
					by={'Pikisuperstar'} />
				<CreditsItem
					staticHref={'/images/cities/fakePicture_city05.svg'}
					href={'https://www.freepik.com/free-vector/flat-futuristic-night-city-background_4441675.htm'}
					name={'Flat futuristic night city background'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/cities/fakePicture_city06.svg'}
					href={'https://www.freepik.com/free-vector/flat-futuristic-night-city-background_4441678.htm#page=2&query=night+city++smart+city&position=37'}
					name={'Flat futuristic night city background'}
					by={'Freepik'} />
			</CreditsSection>
		);
	}
	function	renderSectionSummerIllustration() {
		return (
			<CreditsSection>
				<CreditsSectionTitle>{'Summer Illustrations'}</CreditsSectionTitle>
				<CreditsItem
					staticHref={'/images/summers/fakePicture_summer01.svg'}
					href={'https://www.freepik.com/free-vector/flat-travel-landing-page-template_4913756.htm#page=1&query=camping&position=30'}
					name={'Flat travel landing page template'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/summers/fakePicture_summer02.svg'}
					href={'https://www.freepik.com/free-vector/explorer-with-backpack_4581274.htm#page=1&query=camping&position=39'}
					name={'Explorer with backpack'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/summers/fakePicture_summer03.svg'}
					href={'https://www.vecteezy.com/vector-art/208942-vector-beautiful-camping-illustration'}
					name={'Vector Beautiful Camping Illustration'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/summers/fakePicture_summer04.svg'}
					href={'https://www.vecteezy.com/vector-art/217363-vector-colourful-landscape-illustration'}
					name={'Vector Colourful Landscape Illustration'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/summers/fakePicture_summer05.svg'}
					href={'https://www.freepik.com/free-vector/explorer-with-backpack_4581273.htm#page=2&query=camping&position=2'}
					name={'Explorer with backpack'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/summers/fakePicture_summer06.svg'}
					href={'https://www.freepik.com/free-vector/explorer-with-backpack-background_4400510.htm#page=1&query=hiking&position=25'}
					name={'Explorer with backpack'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/summers/fakePicture_summer07.svg'}
					href={'https://www.vecteezy.com/vector-art/241101-music-festival-camping-vector-cartoon-concept-illustration'}
					name={'Music Festival Camping Vector Cartoon Concept'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/summers/fakePicture_summer08.svg'}
					href={'https://www.vecteezy.com/vector-art/247178-music-around-campfire'}
					name={'Music Around Campfire'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/summers/fakePicture_summer09.svg'}
					href={'https://www.freepik.com/free-vector/starry-night-sky-background_3885327.htm#page=2&query=milky+way&position=20'}
					name={'Starry night sky'}
					by={'Freepik'} />
			</CreditsSection>
		);
	}
	function	renderSectionBeachSunsetIllustration() {
		return (
			<CreditsSection>
				<CreditsSectionTitle>{'Beach Sunset Illustrations'}</CreditsSectionTitle>
				<CreditsItem
					staticHref={'/images/beachSunsets/fakePicture_beachSunset01.svg'}
					href={'https://publicdomainvectors.org/en/free-clipart/Autumn-countryside/83601.html'}
					name={'Vector Sunset Landscape Illustration'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/beachSunsets/fakePicture_beachSunset02.svg'}
					href={'https://www.vecteezy.com/vector-art/225482-vector-beautiful-seascape-illustration'}
					name={'Vector Beautiful Seascape'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/beachSunsets/fakePicture_beachSunset03.svg'}
					href={'https://www.vecteezy.com/vector-art/217224-vector-nature-landscape-illustration'}
					name={'Vector Nature Landscape'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/beachSunsets/fakePicture_beachSunset04.svg'}
					href={'https://www.vecteezy.com/vector-art/239722-vector-beautiful-landscape-illustration'}
					name={'Vector Beautiful Landscape Illustration'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/beachSunsets/fakePicture_beachSunset05.svg'}
					href={'https://www.vecteezy.com/vector-art/114502-chair-beach-free-vector'}
					name={'Chair Beach Free Vector'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/beachSunsets/fakePicture_beachSunset06.svg'}
					href={'https://www.vecteezy.com/vector-art/175270-beach-sunset-illustration'}
					name={'Beach Sunset Illustration'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/beachSunsets/fakePicture_beachSunset07.svg'}
					href={'https://www.freepik.com/free-vector/gradient-beach-sunset-landscape-background_4917074.htm#query=summer-beach&position=29'}
					name={'Gradient beach sunset landscape'}
					by={'Freepik'} />
			</CreditsSection>
		);
	}
	function	renderSectionBrittanyIllustration() {
		return (
			<CreditsSection>
				<CreditsSectionTitle>{'Brittany Illustrations'}</CreditsSectionTitle>
				<CreditsItem
					staticHref={'/images/brittany/fakePicture_brittany01.svg'}
					href={'https://www.vecteezy.com/vector-art/217389-vector-nature-landscape-illustration'}
					name={'Vector Nature Landscape Illustration'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/brittany/fakePicture_brittany02.svg'}
					href={'https://www.vecteezy.com/vector-art/239724-vector-beautiful-landscape-illustration'}
					name={'Vector Beautiful Landscape'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/brittany/fakePicture_brittany03.svg'}
					href={'https://www.vecteezy.com/vector-art/217221-vector-nature-landscape-illustration'}
					name={'Vector Nature Landscape'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/brittany/fakePicture_brittany04.svg'}
					href={'https://www.vecteezy.com/vector-art/275929-vector-spring-landscape-illustration'}
					name={'Vector Spring Landscape'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/brittany/fakePicture_brittany05.svg'}
					href={'https://www.vecteezy.com/vector-art/225479-vector-beautiful-landscape-illustration'}
					name={'Vector Beautiful Landscape'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/brittany/fakePicture_brittany06.svg'}
					href={'https://www.vecteezy.com/vector-art/217387-vector-nature-landscape-illustration'}
					name={'Vector Nature Landscape'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/brittany/fakePicture_brittany07.svg'}
					href={'https://www.freepik.com/free-vector/sea-floor-with-scuba-diver-seaweeds-blue-background_888301.htm#page=1&query=scuba%20diving&position=1'}
					name={'Sea floor with scuba diver and seaweeds blue'}
					by={'Freepik'} />
				<CreditsItem
					staticHref={'/images/brittany/fakePicture_brittany08.svg'}
					href={'https://www.vecteezy.com/vector-art/265702-vector-sea-landscape-illustration'}
					name={'Vector Sea Landscape'}
					by={'Vecteezy'} />
				<CreditsItem
					staticHref={'/images/brittany/fakePicture_brittany09.svg'}
					href={'https://www.freepik.com/free-vector/mosoon-season-composition-with-flat-design_2571868.htm#page=1&query=rain&position=2'}
					name={'Mosoon season composition with flat design'}
					by={'Freepik'} />
			</CreditsSection>
		);
	}

	return (
		<Page>
			<PageCredits>
				<CreditsBackground><div /><div /></CreditsBackground>
				<CreditsTitle>
					<h1>{'Credits'}</h1>
				</CreditsTitle>
				<CreditsSections>
					{renderSectionIllustrations()}
					{renderSectionIcons()}
					{renderSectionDesertIllustrations()}
					{renderSectionJungleIllustrations()}
					{renderSectionCityIllustrations()}
					{renderSectionSummerIllustration()}
					{renderSectionBeachSunsetIllustration()}
					{renderSectionBrittanyIllustration()}
					<div />
					<div />
					<div />
				</CreditsSections>
			</PageCredits>
		</Page>
	);
}

export default CreditsPage;
