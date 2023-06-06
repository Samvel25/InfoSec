import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
	initial: {
		opacity: 0,
		x: "-100vw",
		scale: 0.8,
		rotate: -90,
	},
	in: {
		opacity: 1,
		x: 0,
		scale: 1,
		rotate: 0,
	},
	out: {
		opacity: 0,
		x: "100vw",
		scale: 1.2,
		rotate: 90,
	},
};

const pageTransition = {
	type: "spring",
	stiffness: 200,
	damping: 15,
};

const PageTransition = ({ children }) => {
	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;

// import React from "react";
// import { motion } from "framer-motion";

// const pageVariants = {
//   initial: {
//     opacity: 0,
//     x: "-100vw",
//   },
//   in: {
//     opacity: 1,
//     x: 0,
//   },
//   out: {
//     opacity: 0,
//     x: "100vw",
//   },
// };

// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 0.5,
// };

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial="initial"
//       animate="in"
//       exit="out"
//       variants={pageVariants}
//       transition={pageTransition}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;
