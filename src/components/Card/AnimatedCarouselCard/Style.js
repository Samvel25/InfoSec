import { styled, keyframes } from "@mui/material/styles";
import {
	bounceFontSize,
	mouseoutAnimation,
	headBounceFontSize,
	headMouseoutAnimation,
	svgBounceFontSize,
	svgMouseoutAnimation,
} from "./keyframes";
import CarouselCard from "../CarouselCard";

export const Card = styled(CarouselCard)(({ theme }) => {
	return {
		"& p": {
			transformOrigin: "left center",
		},

		"& h5": {
			transformOrigin: "left center",
		},

		"& svg": {
			transformOrigin: "left bottom",
		},

		"&:hover": {
			"& p": {
				color: "#FFFFFF",
				transformOrigin: "left center",
				animation: `${bounceFontSize} 0.7s forwards`,
			},
			"& h5": {
				color: "#C0C1C2",
				transformOrigin: "left center",
				animation: `${headBounceFontSize} 0.7s forwards`,
			},
			"& svg": {
				color: "#C0C1C2",
				transformOrigin: "left center",
				animation: `${svgBounceFontSize} 0.7s forwards`,
			},
		},
		"&:not(:hover)": {
			"& p": {
				animation: `${mouseoutAnimation} 0.7s forwards`,
			},
			"& h5": {
				animation: `${headMouseoutAnimation} 0.7s forwards`,
			},
			"& svg": {
				animation: `${svgMouseoutAnimation} 0.7s forwards`,
			},
		},
	};
});
