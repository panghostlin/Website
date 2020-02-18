/*******************************************************************************
** @Author:					Thomas Bouder <Tbouder>
** @Email:					Tbouder@protonmail.com
** @Date:					Tuesday 18 February 2020 - 15:30:19
** @Filename:				useIntesectionObserver.js
**
** @Last modified by:		Tbouder
** @Last modified time:		Tuesday 18 February 2020 - 15:30:47
*******************************************************************************/

import	React			from	'react';

const useIntersectionObserver = ({
	target,
	onIntersect,
	threshold = 0,
	rootMargin = "0px"
}) => {
	React.useEffect(() => {
		const observer = new IntersectionObserver(onIntersect, {
			rootMargin,
			threshold
		});
		const current = target.current;
		observer.observe(current);
		return () => {
			observer.unobserve(current);
		};
	});
};

export default useIntersectionObserver;