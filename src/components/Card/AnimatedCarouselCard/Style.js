import { styled } from "@mui/material/styles";
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
		[theme.breakpoints.up("sm")]: {
			"&:hover": {
				"& p": {
					color: "#FFFFFF",
					transformOrigin: "left center",
					animation: `${bounceFontSize} 0.2s forwards`,
				},
			},
			"&:not(:hover)": {
				"& p": {
					animation: `${mouseoutAnimation} 0.15s forwards`,
				},
			},
		},
	};
});
