import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import CardItem from "../../CertificateCardsSorting/Card";

export const StyledCardItem = styled(CardItem)(({ theme }) => ({
	minWidth: "220px",
	padding: "34px 12px 22px",
	margin: "0 10px",
	maxWidth: "240px",
	background: "#000",

	"&:after": {
		background: "#0a0a0a",
		clipPath:
			"polygon(0 0,calc(100% - 16.00px) 0,100% 16.00px,100% 100%,16.00px 100%,0 calc(100% - 16.00px),0 0,1px  1px ,1px calc(100% - 16.00px - 0.41px),calc(16.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(16.00px + 0.41px),calc(100% - 16.00px - 0.41px) 1px,1px 1px)",
	},

	"& Button": {
		padding: "8px 18px",
		background: "black",
		minWidth: "auto",
		"& pre": {
			display: "none",
		},
		"& a": {
			fontSize: "8px",
			lineHeight: "15px",
			[theme.breakpoints.up("xl")]: {
				fontSize: "10px",
				lineHeight: "18px",
			},
			[theme.breakpoints.up("xxl")]: {
				fontSize: "13px",
				lineHeight: "23px",
			},
		},
		[theme.breakpoints.up("xl")]: {
			padding: "10px 22px",
		},
		[theme.breakpoints.up("xxl")]: {
			padding: "13px 28px",
		},
	},

	"& img": {
		width: "115px",
		height: "87px",

		[theme.breakpoints.down("sm")]: {
			width: "100px",
			height: "76px",
		},
		[theme.breakpoints.up("	xl")]: {
			width: "138px",
			height: "104px",
		},
		[theme.breakpoints.up("xxl")]: {
			width: "175px",
			height: "135px",
		},
	},
	"& h5": {
		fontSize: "12px",
		lineHeight: "18px",
		[theme.breakpoints.up("xl")]: {
			fontSize: "14px",
			lineHeight: "21px",
		},
		[theme.breakpoints.up("xxl")]: {
			fontSize: "16.5px",
			lineHeight: "28px",
		},
	},

	"& p": {
		marginBottom: "30px",
		fontSize: "8px",
		lineHeight: "12px",
		[theme.breakpoints.up("xl")]: {
			fontSize: "10px",
			lineHeight: "14px",
		},
		[theme.breakpoints.up("xxl")]: {
			fontSize: "13px",
			lineHeight: "18px",
		},
	},

	[theme.breakpoints.down("sm")]: {
		minWidth: "200px",
		maxWidth: "300px",
		padding: " 30px 10px 12px",
	},
	[theme.breakpoints.up("xl")]: {
		minWidth: "264px",
		padding: "40px 14.5px 26px",
		margin: "0 12px",
		maxWidth: "288px",
	},
	[theme.breakpoints.up("xxl")]: {
		minWidth: "343px",
		padding: "52px 21px 34px",
		margin: "0 17px",
		maxWidth: "405px",
	},
}));

export const StyledSlider = styled(Slider)`
	position: relative;
	height: 100%;
	display: flex;

	.slick-slide.slideWithScale {
		transform: scale(1.2);
		transition: 0.5s;
	}

	.custom-prevArrow,
	.custom-nextArrow {
		position: absolute;
		bottom: 0px;
		z-index: 99999;
	}

	.custom-prevArrow {
		left: 48%;
		transform: translateX(-50%);
	}

	.custom-nextArrow {
		right: 48%;
		transform: translateX(50%);
	}

	@media screen and (min-width: 1930px) {
		.custom-prevArrow,
		.custom-nextArrow {
			bottom: -30px;
		}
	}

	@media screen and (min-width: 2800px) {
		.custom-prevArrow,
		.custom-nextArrow {
			bottom: -50px;
		}
	}

	@media screen and (max-width: 1050px) {
		.custom-nextArrow {
			right: 47%;
		}
		.custom-prevArrow {
			left: 47%;
		}
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

	.custom-prevArrow:hover,
	.custom-nextArrow:hover {
		fill: red;
		cursor: pointer;
	}

	.slick-list {
		position: relative;
		display: block !important;
		overflow: hidden;
		padding: 125px 800px 170px !important;
		width: 100%;
		@media screen and (max-width: 2450px) {
			padding: 125px 700px 170px !important;
		}
		@media screen and (max-width: 2300px) {
			padding: 125px 500px 170px !important;
		}
		@media screen and (max-width: 1920px) {
			padding: 125px 300px 170px !important;
		}
		@media screen and (max-width: 1440px) {
			padding: 125px 200px 170px !important;
		}
		@media screen and (max-width: 600px) {
			padding: 125px 100px 170px !important;
		}
	}

	.slick-track {
		position: relative;
		align-items: center;
		top: 0;
		left: 0;
		display: flex;
	}

	.slick-slide div:first-of-type {
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
		z-index: 999;
		transform: scale(1.4);
		transition: 0.5s;
	}

	.slick-slide.slick-active:not(.slick-current) pre {
		position: absolute;
		background: #0a0a0a;
		transform: rotate(45deg);
		height: 14px;
		width: 28px;
		left: -12px;
		bottom: -3px;
		display: block;
		margin: 0;
	}

	.slick-slide.slick-active:not(.slick-current) pre:first-of-type {
		right: -12px;
		top: -3px;
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

	.slick-slide.slick-active:not(.slick-current) ul:first-of-type {
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
		z-index: 1000;
		transform: scale(1.7);
		transition: 0.5s;
	}
`;
