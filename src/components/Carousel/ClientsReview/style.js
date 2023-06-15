import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ReactComponent as RateStar } from "../../../media/rateStar.svg";

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

export const RateStars = styled(RateStar)(({ grayscale }) => ({
	width: "15px",
	height: "15px",
	filter: grayscale ? "grayscale(100%)" : "none",
}));
