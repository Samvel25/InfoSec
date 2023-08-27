import Slider from "react-slick";
import CarouselCard from "../../Card/CarouselCard";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

export const CarouselContainer = styled(Container)(({ theme }) => ({
	[theme.breakpoints.down("xl")]: {
		maxWidth: "none",
	},
	[theme.breakpoints.up("xl")]: {
		maxWidth: "1930px",
	},
	[theme.breakpoints.up("xxl")]: {
		maxWidth: "2300px",
	},
}));

export const OurLifeCarouselCard = styled(CarouselCard)(({ theme }) => ({
	width: "300px",
	padding: "0px",
	[theme.breakpoints.down("sm")]: {
		padding: "0px",
	},
	[theme.breakpoints.up("xxl")]: {
		width: "350px",
	},
	[theme.breakpoints.up(3250)]: {
		width: "400px",
	},
}));

export const LifeImmage = styled("img")(({ theme }) => ({
	width: "100%",
}));

export const Wrapper = styled("div")(({ theme }) => ({
	margin: "0 10px",
}));

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
		bottom: -10%;

		transform: translateX(-50%);
	}

	.custom-nextArrow {
		right: 48%;
		bottom: -10%;

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
		}
		.custom-nextArrow {
			right: 44%;
		}
		.custom-prevArrow {
			left: 44%;
		}
	}

	.slick-prev,
	.slick-next {
		display: none !important;
	}

	.slick-list {
		position: relative;
		display: block !important;
		overflow: hidden;
		padding: 0 100px !important;
		width: 100%;
		// @media (min-width: 1350px) {
		// 	padding: 0 0 60px !important;
		// }
	}

	.slick-track {
		position: relative;
		align-items: center;
		top: 0;
		left: 0;
		display: flex;
	}

	// .slick-track {
	// 	justify-content: center;
	// 	display: flex;
	// }
`;
