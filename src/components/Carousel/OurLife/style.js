import Slider from "react-slick";
import CaruselCard from "../../Card/CarouselCard";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StyledSlider = styled(Slider)`
	.custom-prevArrow,
	.custom-nextArrow {
		position: absolute;
		bottom: 40px;
		z-index: 99999;
	}

	.custom-prevArrow svg:hover,
	.custom-nextArrow svg:hover {
		fill: red;
		cursor: pointer;
		background: "black";
	}

	.custom-prevArrow {
		left: 48%;
		transform: translateX(-50%);
	}

	.custom-nextArrow {
		right: 48%;
		transform: translateX(50%);
	}
	@media screen and (max-width: 1050px) {
		.custom-nextArrow {
			right: 47%;
		}
		.custom-prevArrow {
			left: 47%;
		}
	}

	@media screen and (max-width: 750px) {
		.custom-nextArrow {
			right: 46%;
		}
		.custom-prevArrow {
			left: 46%;
		}
	}

	@media screen and (max-width: 500px) {
		.custom-prevArrow,
		.custom-nextArrow {
			bottom: 60px;
		}
		.custom-nextArrow {
			right: 44%;
		}
		.custom-prevArrow {
			left: 44%;
		}
	}

	.slick-list {
		position: relative;
		display: block !important;
		overflow: hidden;
		padding: 100px !important;
		width: 100%;
		margin: 0 -15px;
		// padding: 0 0 70px !important;
	}

	.slick-track {
		position: relative;
		align-items: center;
		top: 0;
		left: 0;
		display: flex;
	}

	.slick-prev,
	.slick-next {
		display: none !important;
	}

	.slick-slide {
		margin: 0 15px;
	}

	.slick-track {
		justify-content: center;
		display: flex;
	}
`;
export const OurLifeCaruselCard = styled(CaruselCard)(({ theme }) => ({
	width: "auto",
	padding: "0px",
	[theme.breakpoints.down("sm")]: {
		// maxWidth: "330px",
		padding: "0px",
	},
}));
