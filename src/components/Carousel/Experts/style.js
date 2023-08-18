import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ReactComponent as CardLogo } from "../../../media/svg/cardLogo.svg";

export const ExpertsSlider = styled(Slider)`
	.slick-list {
		position: relative;
		display: block !important;
		overflow: hidden;
		padding: 0 100px 60px !important;
		width: 100%;
		@media (min-width: 1350px) {
			padding: 0 0 60px !important;
		}
	}

	.slick-track {
		position: relative;
		align-items: center;
		top: 0;
		left: 0;
		display: flex;
		@media (min-width: 1350px) {
			justify-content: space-between;
		}
	}
`;

export const Wrapper = styled(Box)({
	width: "max-content",
	textAlign: "start",
	margin: "0 20px",
});

export const CardLogoSvg = styled(CardLogo)(({ theme }) => ({
	width: "66px",
	height: "58px",
	[theme.breakpoints.down("xxl")]: {
		width: "72px",
		height: "63px",
	},
	[theme.breakpoints.up("xl")]: {
		width: "86px",
		height: "75px",
	},
}));
