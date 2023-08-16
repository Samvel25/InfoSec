import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		console.log("Navigated to:", pathname); // This should be logged each time you navigate
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
console.log("ScrollToTop component is trying to render");

export default ScrollToTop;
