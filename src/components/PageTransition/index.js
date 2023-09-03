import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const pageVariants = {
	initial: {
		opacity: 0,
		x: "-100vw",
		scale: 0.9,
	},
	in: {
		opacity: 1,
		x: 0,
		scale: 1,
	},
	out: {
		opacity: 0,
		x: "100vw",
		scale: 0.9,
	},
};

const noAnimationVariants = {
	initial: { opacity: 1 },
	in: { opacity: 1 },
	out: { opacity: 1 },
};

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.5,
};

const PageTransition = ({ children }) => {
	const { pathname } = useLocation();
	const isMobile = window.innerWidth <= 1000;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={isMobile ? noAnimationVariants : pageVariants}
			transition={pageTransition}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
