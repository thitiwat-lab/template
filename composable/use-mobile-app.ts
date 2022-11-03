
import { useEffect, useState } from "react";
import { mediaQueryIsMobile } from "../helper/index";

interface RT {
	isMobile: boolean | undefined;
	// isTablet: Ref<boolean | undefined>
	// isDesktop: Ref<boolean | undefined>
}

export function useMediaQuery(): RT {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const mediaQueryMobile = () => {
		const isMobileQuery = mediaQueryIsMobile();
		setIsMobile(isMobileQuery)
	};

	useEffect(() => {
		window.addEventListener("resize", mediaQueryMobile);
	});
	

	return {
		isMobile,
	};
}


