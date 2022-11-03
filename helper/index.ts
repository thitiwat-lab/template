export function mediaQueryIsMobile(): boolean {
	const matchMedia = window.matchMedia("(max-width: 880px)");
	console.log('matchMedia', matchMedia);
	
	return matchMedia.matches;
}