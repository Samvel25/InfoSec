import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import Led, { boxShadow1, boxShadow2 } from "../../Other/Led";

const commonStyles = {
	content: '""',
	position: "absolute",
	inset: 0,
	zIndex: -1,
	overflow: "visible",
};

export const AchievementsCard = styled(Box)(
	({ theme, backgroundtype, ledtype, boxpadding, cutedcorner }) => {
		const animation = keyframes`
  ${ledtype === "ledOne" ? boxShadow1 : boxShadow2}
`;

		return {
			display: "block",
			position: "relative",
			zIndex: 0,
			width: "300px",
			// padding: "55px 60px 60px 40px",
			padding: boxpadding === "boxpadding" ? "30px" : "55px 60px 60px 40px",
			[theme.breakpoints.down("sm")]: {
				padding:
					boxpadding === "boxpadding" ? "15px 20px" : "55px 20px 60px 30px",
			},
			"&:after": {
				...commonStyles,
				clipPath:
					cutedcorner === "right"
						? "polygon(0 22.00px,22.00px 0,100% 0,100% calc(100% - 22.00px),calc(100% - 22.00px) 100%,0 100%,0 22.00px,1px  calc(22.00px + 0.41px),1px calc(100% - 1px),calc(100% - 22.00px - 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 22.00px - 0.41px),calc(100% - 1px) 1px,calc(22.00px + 0.41px) 1px,1px calc(22.00px + 0.41px))"
						: "polygon(0 0,calc(100% - 16.00px) 0,100% 16.00px,100% 100%,16.00px 100%,0 calc(100% - 16.00px),0 0,1px  1px ,1px calc(100% - 16.00px - 0.41px),calc(16.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(16.00px + 0.41px),calc(100% - 16.00px - 0.41px) 1px,1px 1px)",
				background:
					backgroundtype === "backgroundOne"
						? "linear-gradient(45deg,#575757,#616161,#292929)"
						: "linear-gradient(45deg,#D42530,#F10413,#490005)",
				[theme.breakpoints.up("xl")]: {
					padding: "18px 40px",
					...commonStyles,
					clipPath:
						cutedcorner === "right"
							? "polygon(0 26.00px 26.00px 0,100% 0,100% calc(100% - 26.00px),calc(100% - 26.00px) 100%,0 100%,0 26.00px,1px  calc 26.00px + 0.41px),1px calc(100% - 1px),calc(100% - 26.00px - 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 26.00px - 0.41px),calc(100% - 1px) 1px,calc 26.00px + 0.41px) 1px,1px calc 26.00px + 0.41px))"
							: "polygon(0 0,calc(100% - 26.00px) 0,100% 26.00px,100% 100%,26.00px 100%,0 calc(100% - 26.00px),0 0,1px  1px ,1px calc(100% - 26.00px - 0.41px),calc(26.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(26.00px + 0.41px),calc(100% - 26.00px - 0.41px) 1px,1px 1px)",
				},
				[theme.breakpoints.up("xxl")]: {
					...commonStyles,
					clipPath:
						cutedcorner === "right"
							? "polygon(0 30.00px,30.00px 0,100% 0,100% calc(100% - 30.00px),calc(100% - 30.00px) 100%,0 100%,0 30.00px,1px  calc(30.00px + 0.41px),1px calc(100% - 1px),calc(100% - 30.00px - 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 30.00px - 0.41px),calc(100% - 1px) 1px,calc(30.00px + 0.41px) 1px,1px calc(30.00px + 0.41px))"
							: "polygon(0 0,calc(100% - 30.00px) 0,100% 30.00px,100% 100%,30.00px 100%,0 calc(100% - 30.00px),0 0,1px  1px ,1px calc(100% - 30.00px - 0.41px),calc(30.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(30.00px + 0.41px),calc(100% - 30.00px - 0.41px) 1px,1px 1px)",
				},
			},
			[theme.breakpoints.down("sm")]: {
				"& span:first-of-type": {
					animation:
						boxpadding === "boxpadding" ? "none" : `${animation} 1.5s infinite`,
				},
			},
			"&:hover > span:first-of-type": {
				animation:
					boxpadding === "boxpadding" ? "none" : `${animation} 1.5s infinite`,
			},
		};
	}
);

// import { Box } from "@mui/material";
// import { styled, keyframes } from "@mui/material/styles";
// import Led, { boxShadow1, boxShadow2 } from "../../Other/Led";
// import {
// 	bounceFontSize,
// 	mouseoutAnimation,
// 	headBounceFontSize,
// 	headMouseoutAnimation,
// 	svgBounceFontSize,
// 	svgMouseoutAnimation,
// } from "./keyframes";

// const commonStyles = {
// 	content: '""',
// 	position: "absolute",
// 	inset: 0,
// 	zIndex: -1,
// 	overflow: "visible",
// };

// export const AchievementsCard = styled(Box)(
// 	({ theme, backgroundtype, ledtype, boxpadding, cutedcorner }) => {
// 		const animation = keyframes`
//   ${ledtype === "ledOne" ? boxShadow1 : boxShadow2}
// `;

// 		return {
// 			display: "block",
// 			position: "relative",
// 			zIndex: 0,
// 			width: "300px",
// 			// padding: "55px 60px 60px 40px",
// 			padding: boxpadding === "boxpadding" ? "30px" : "55px 60px 60px 40px",
// 			[theme.breakpoints.down("sm")]: {
// 				padding:
// 					boxpadding === "boxpadding" ? "15px 20px" : "55px 20px 60px 30px",
// 			},
// 			"&:after": {
// 				...commonStyles,
// 				clipPath:
// 					cutedcorner === "right"
// 						? "polygon(0 22.00px,22.00px 0,100% 0,100% calc(100% - 22.00px),calc(100% - 22.00px) 100%,0 100%,0 22.00px,1px  calc(22.00px + 0.41px),1px calc(100% - 1px),calc(100% - 22.00px - 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 22.00px - 0.41px),calc(100% - 1px) 1px,calc(22.00px + 0.41px) 1px,1px calc(22.00px + 0.41px))"
// 						: "polygon(0 0,calc(100% - 16.00px) 0,100% 16.00px,100% 100%,16.00px 100%,0 calc(100% - 16.00px),0 0,1px  1px ,1px calc(100% - 16.00px - 0.41px),calc(16.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(16.00px + 0.41px),calc(100% - 16.00px - 0.41px) 1px,1px 1px)",
// 				background:
// 					backgroundtype === "backgroundOne"
// 						? "linear-gradient(45deg,#575757,#616161,#292929)"
// 						: "linear-gradient(45deg,#D42530,#F10413,#490005)",
// 				[theme.breakpoints.up("xl")]: {
// 					padding: "18px 40px",
// 					...commonStyles,
// 					clipPath:
// 						cutedcorner === "right"
// 							? "polygon(0 26.00px 26.00px 0,100% 0,100% calc(100% - 26.00px),calc(100% - 26.00px) 100%,0 100%,0 26.00px,1px  calc 26.00px + 0.41px),1px calc(100% - 1px),calc(100% - 26.00px - 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 26.00px - 0.41px),calc(100% - 1px) 1px,calc 26.00px + 0.41px) 1px,1px calc 26.00px + 0.41px))"
// 							: "polygon(0 0,calc(100% - 26.00px) 0,100% 26.00px,100% 100%,26.00px 100%,0 calc(100% - 26.00px),0 0,1px  1px ,1px calc(100% - 26.00px - 0.41px),calc(26.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(26.00px + 0.41px),calc(100% - 26.00px - 0.41px) 1px,1px 1px)",
// 				},
// 				[theme.breakpoints.up("xxl")]: {
// 					...commonStyles,
// 					clipPath:
// 						cutedcorner === "right"
// 							? "polygon(0 30.00px,30.00px 0,100% 0,100% calc(100% - 30.00px),calc(100% - 30.00px) 100%,0 100%,0 30.00px,1px  calc(30.00px + 0.41px),1px calc(100% - 1px),calc(100% - 30.00px - 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 30.00px - 0.41px),calc(100% - 1px) 1px,calc(30.00px + 0.41px) 1px,1px calc(30.00px + 0.41px))"
// 							: "polygon(0 0,calc(100% - 30.00px) 0,100% 30.00px,100% 100%,30.00px 100%,0 calc(100% - 30.00px),0 0,1px  1px ,1px calc(100% - 30.00px - 0.41px),calc(30.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(30.00px + 0.41px),calc(100% - 30.00px - 0.41px) 1px,1px 1px)",
// 				},
// 			},
// 			[theme.breakpoints.down("sm")]: {
// 				"& span:first-of-type": {
// 					animation:
// 						boxpadding === "boxpadding" ? "none" : `${animation} 1.5s infinite`,
// 				},
// 			},
// 			"&:hover > span:first-of-type": {
// 				animation:
// 					boxpadding === "boxpadding" ? "none" : `${animation} 1.5s infinite`,
// 			},

// 			"& p": {
// 				transformOrigin: "left center",
// 			},

// 			"& h5": {
// 				transformOrigin: "left center",
// 			},

// 			"& svg": {
// 				transformOrigin: "left bottom",
// 			},

// 			"&:hover": {
// 				"& p": {
// 					color: "#FFFFFF",
// 					transformOrigin: "left center",
// 					animation: `${bounceFontSize} 0.6s forwards`,
// 				},
// 				"& h5": {
// 					color: "#C0C1C2",
// 					transformOrigin: "left center",
// 					animation: `${headBounceFontSize} 0.6s forwards`,
// 				},
// 				"& svg": {
// 					color: "#C0C1C2",
// 					transformOrigin: "left center",
// 					animation: `${svgBounceFontSize} 0.6s forwards`,
// 				},
// 			},
// 			"&:not(:hover)": {
// 				"& p": {
// 					animation: `${mouseoutAnimation} 0.6s forwards`,
// 				},
// 				"& h5": {
// 					animation: `${headMouseoutAnimation} 0.6s forwards`,
// 				},
// 				"& svg": {
// 					animation: `${svgMouseoutAnimation} 0.6s forwards`,
// 				},
// 			},
// 		};
// 	}
// );
