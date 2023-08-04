import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ReactComponent as RateStar } from "../../../media/svg/rateStar.svg";
import { ReactComponent as NameAmLogo } from "../../../media/logo/nameAmLogo.svg";

export const ExpertsSlider = styled(Slider)`
	.slick-list {
		position: relative;
		display: block !important;
		overflow: hidden;
		padding: 0 100px !important;
		width: 100%;
		@media (min-width: 1350px) {
			padding: 0 !important;
		}
	}

	.slick-track {
		position: relative;
		align-items: center;
		top: 0;
		left: 0;
		display: flex;
		@media (min-width: 1350px) {
			justify-content: space-between !important;
		}
	}

  @media screen and (min-width: 1350px) {
    .slick-track {
      justify-content: center;
    }
`;

export const Wrapper = styled(Box)({
	width: "max-content",
	textAlign: "start",
	margin: "0 10px",
});

export const RateStars = styled(RateStar)(({ theme, grayscale }) => ({
	width: "15px",
	height: "15px",
	filter: grayscale ? "grayscale(100%)" : "none",
	[theme.breakpoints.up("xl")]: {
		width: "18px",
		height: "18px",
	},

	[theme.breakpoints.up("xxl")]: {
		width: "21px",
		height: "22px",
	},
}));

export const NameAmLogoImg = styled(NameAmLogo)(({ theme, grayscale }) => ({
	width: "116px",
	height: "22px",

	[theme.breakpoints.up("xl")]: {
		width: "139px",
		height: "26px",
	},

	[theme.breakpoints.up("xxl")]: {
		width: "166px",
		height: "31px",
	},
}));
