import Slider from "react-slick";
import CaruselCard from "../../Card/CarouselCard";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StyledSlider = styled(Slider)`
	position: relative;
	height: 100%;
	display: flex;
	// justify-content: center;
	// align-items: center;
	padding: 0 5px;

	.slick-list {
		position: relative;
		display: block !important;
		overflow: hidden;
		padding: 100px !important;
		width: 100%;
	}

	.slick-track {
		position: relative;
		align-items: center;
		top: 0;
		left: 0;
		display: flex;
	}

	.slick-slide div div {
	}
	.slick-slide div:first-child {
		display: flex !important;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.slick-slide:not(.slick-active) {
		position: relative;
		z-index: 997;
	}

	.slick-slide.slick-active:not(.slick-current) {
		position: relative;
		z-index: 998;
		transform: scale(1.4);
		transition: 0.5s;
	}

	.slick-slide.slick-active:not(.slick-current) pre {
		position: absolute;
		background: #0a0a0a;
		transform: rotate(45deg);
		height: 14px;
		width: 28px;
		left: -9px;
		bottom: -2px;

		margin: 0;
	}

	.slick-slide.slick-active:not(.slick-current) pre:first-child {
		right: -9px;
		top: -2px;
		left: auto;
		bottom: auto;
	}

	.slick-slide.slick-active:not(.slick-current) ul {
		position: absolute;
		background: #0a0a0a;
		transform: rotate(45deg);
		height: 12px;
		width: 19px;
		left: -9px;
		bottom: -19px;
		padding: 0;
	}

	.slick-slide.slick-active:not(.slick-current) ul:first-child {
		right: -9px;
		top: -19px;
		left: auto;
		bottom: auto;
	}

	.slick-slide.slick-active.slick-current pre {
		display: none;
	}

	.slick-slide.slick-active.slick-current ul {
		display: none;
	}

	.slick-slide.slick-active:not(.slick-current) ::after {
		background: #0a0a0a;
		clip-path: polygon(
			0 0,
			calc(100% - 20px) 0,
			100% 20px,
			100% 100%,
			20px 100%,
			0 calc(100% - 20px)
		);
	}

	.slick-slide.slick-active.slick-current {
		position: relative;
		z-index: 999;
		transform: scale(1.7);
		transition: 0.5s;
	}

	.slick-prev,
	.slick-next {
		display: none !important;
	}

	.custom-prevArrow,
	.custom-nextArrow {
		position: relative;
		z-index: 99999;
		top: -10px;
	}

	.custom-prevArrow {
		left: -10px;
	}

	.custom-nextArrow {
		right: -10px;
	}

	.custom-prevArrow:hover,
	.custom-nextArrow:hover {
		fill: red;
		cursor: pointer;
	}
`;

export const CertificatesCaruselCard = styled(CaruselCard)(({ theme }) => ({
	width: "auto",
	padding: "57px 20px 37px",
	transform: "scale(0.6)",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "330px",
		padding: " 50px  10px 20px",
	},
}));

export const CertificateImg = styled("img")(({ theme }) => ({
	width: "190px",
	height: "145px",
	margin: "0 70px 50px",
	[theme.breakpoints.down("sm")]: {
		width: "167px",
		height: "127px",
	},
}));

export const ButtonText = styled(Typography)(({ theme }) => ({
	textTransform: "uppercase",
	a: {
		background:
			"linear-gradient(93.74deg, #D42530 2.68%, #F10413 52.05%, #490005 104.6%)",
		backgroundClip: "text",
		WebkitBackgroundClip: "text",
		color: "transparent",
		textTransform: "uppercase",
	},
}));
