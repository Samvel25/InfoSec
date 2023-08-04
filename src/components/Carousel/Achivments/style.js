import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import AchievementsCard from "../../Card/CarouselCard";

export const StyledSlider = styled(Slider)`
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

export const Card = styled(AchievementsCard)(({ theme }) => ({
	[theme.breakpoints.up("1921")]: {
		padding: "70px 85px 76px 50px",
		width: "350px",
	},
	[theme.breakpoints.up("xxl")]: {
		padding: "84px 94px 91px 60px",
		width: "400px",
	},
}));

export const Wraper = styled(Box)({
	margin: "auto 10px",
	width: "max-content",
	textAlign: "start",
});
