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
			[theme.breakpoints.up("xxl")]: {
				fontSize: "10.5px",
				lineHeight: "19.5px",
			},
		},
		[theme.breakpoints.up("xxl")]: {
			padding: "10.5px 23.5px",
		},
	},

	"& img": {
		width: "115px",
		height: "87px",

		[theme.breakpoints.down("sm")]: {
			width: "100px",
			height: "76px",
		},
		[theme.breakpoints.up("xxl")]: {
			width: "150px",
			height: "113px",
		},
	},
	"& h5": {
		fontSize: "12px",
		lineHeight: "18px",
		[theme.breakpoints.up("xxl")]: {
			fontSize: "15.5px",
			lineHeight: "23.5px",
		},
	},

	"& p": {
		marginBottom: "30px",
		fontSize: "8px",
		lineHeight: "12px",
		[theme.breakpoints.up("xxl")]: {
			fontSize: "10.5px",
			lineHeight: "18.5px",
		},
	},

	[theme.breakpoints.down("sm")]: {
		minWidth: "200px",
		maxWidth: "300px",
		padding: " 30px 10px 12px",
	},
	[theme.breakpoints.up("xxl")]: {
		minWidth: "290px",
		padding: "44px 16px 29px",
		margin: "0 13px",
		maxWidth: "312px",
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

	@media screen and (min-width: 2800px) {
		.custom-prevArrow,
		.custom-nextArrow {
			bottom: -20px;
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
		left: -9px;
		bottom: -2px;
		display: block;
		margin: 0;
	}

	.slick-slide.slick-active:not(.slick-current) pre:first-of-type {
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

// import Slider from "react-slick";
// import CarouselCard from "../../Card/CarouselCard";
// import { styled } from "@mui/material/styles";
// import CardItem from "../../CertificateCardsSorting/Card";
// import { Typography } from "@mui/material";

// export const StyledCardItem = styled(CardItem)(({ theme }) => ({
// 	width: "auto",
// 	minWidth: "360px",
// 	padding: "57px 20px 37px",
// 	transform: "scale(0.6)",
// 	background: "#000",

// 	"&:after": {
// 		background: "#0a0a0a",
// 		clipPath:
// 			"polygon(0 0,calc(100% - 16.00px) 0,100% 16.00px,100% 100%,16.00px 100%,0 calc(100% - 16.00px),0 0,1px  1px ,1px calc(100% - 16.00px - 0.41px),calc(16.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(16.00px + 0.41px),calc(100% - 16.00px - 0.41px) 1px,1px 1px)",
// 	},

// 	"& Button": {
// 		background: "black",
// 		"& pre": {
// 			display: "none",
// 		},
// 	},

// 	"& img": {
// 		width: "190px",
// 		height: "145px",
// 		[theme.breakpoints.down("sm")]: {
// 			width: "167px",
// 			height: "127px",
// 		},
// 	},
// 	"& h5": {

// 	},

// 	"& p": {

// 	},

// 	[theme.breakpoints.down("sm")]: {
// 		minWidth: "auto",

// 		width: "330px",
// 		padding: " 50px  10px 20px",
// 	},
// 	[theme.breakpoints.down(470)]: {
// 		width: "310px",
// 	},
// 	[theme.breakpoints.up(1400)]: {
// 		transform: "scale(1)",
// 	},
// }));

// export const StyledSlider = styled(Slider)`
// 	position: relative;
// 	height: 100%;
// 	display: flex;

// 	.custom-prevArrow,
// 	.custom-nextArrow {
// 		position: absolute;
// 		bottom: 40px;
// 		z-index: 99999;
// 	}

// 	.custom-prevArrow {
// 		left: 48%;
// 		transform: translateX(-50%);
// 	}

// 	.custom-nextArrow {
// 		right: 48%;
// 		transform: translateX(50%);
// 	}
// 	@media screen and (max-width: 1050px) {
// 		.custom-nextArrow {
// 			right: 47%;
// 		}
// 		.custom-prevArrow {
// 			left: 47%;
// 		}
// 	}

// 	@media screen and (max-width: 750px) {
// 		.custom-nextArrow {
// 			right: 46%;
// 		}
// 		.custom-prevArrow {
// 			left: 46%;
// 		}
// 	}

// 	@media screen and (max-width: 500px) {
// 		.custom-prevArrow,
// 		.custom-nextArrow {
// 			bottom: 60px;
// 		}
// 		.custom-nextArrow {
// 			right: 44%;
// 		}
// 		.custom-prevArrow {
// 			left: 44%;
// 		}
// 	}

// 	.slick-prev,
// 	.slick-next {
// 		display: none !important;
// 	}

// 	.custom-prevArrow:hover,
// 	.custom-nextArrow:hover {
// 		fill: red;
// 		cursor: pointer;
// 	}

// 	.slick-list {
// 		position: relative;
// 		display: block !important;
// 		overflow: hidden;
// 		padding: 100px !important;
// 		width: 100%;
// 		@media screen and (min-width: 1400px) {
// 			padding: 300px !important;
// 		}
// 	}

// 	.slick-track {
// 		position: relative;
// 		align-items: center;
// 		top: 0;
// 		left: 0;
// 		display: flex;
// 	}

// 	.slick-slide div:first-of-type {
// 		display: flex !important;
// 		flex-direction: column;
// 		justify-content: center;
// 		align-items: center;
// 	}

// 	.slick-slide:not(.slick-active) {
// 		position: relative;
// 		z-index: 997;
// 	}

// 	.slick-slide.slick-active:not(.slick-current) {
// 		position: relative;
// 		z-index: 998;
// 		transform: scale(1.4);
// 		transition: 0.5s;
// 	}

// 	.slick-slide.slick-active:not(.slick-current) pre {
// 		position: absolute;
// 		background: #0a0a0a;
// 		transform: rotate(45deg);
// 		height: 14px;
// 		width: 28px;
// 		left: -9px;
// 		bottom: -2px;
// 		display: block;
// 		margin: 0;
// 	}

// 	.slick-slide.slick-active:not(.slick-current) pre:first-of-type {
// 		right: -9px;
// 		top: -2px;
// 		left: auto;
// 		bottom: auto;
// 	}

// 	.slick-slide.slick-active:not(.slick-current) ul {
// 		position: absolute;
// 		background: #0a0a0a;
// 		transform: rotate(45deg);
// 		height: 12px;
// 		width: 19px;
// 		left: -9px;
// 		bottom: -19px;
// 		padding: 0;
// 	}

// 	.slick-slide.slick-active:not(.slick-current) ul:first-of-type {
// 		right: -9px;
// 		top: -19px;
// 		left: auto;
// 		bottom: auto;
// 	}

// 	.slick-slide.slick-active.slick-current pre {
// 		display: none;
// 	}

// 	.slick-slide.slick-active.slick-current ul {
// 		display: none;
// 	}

// 	.slick-slide.slick-active:not(.slick-current) ::after {
// 		background: #0a0a0a;
// 		clip-path: polygon(
// 			0 0,
// 			calc(100% - 20px) 0,
// 			100% 20px,
// 			100% 100%,
// 			20px 100%,
// 			0 calc(100% - 20px)
// 		);
// 	}

// 	.slick-slide.slick-active.slick-current {
// 		position: relative;
// 		z-index: 999;
// 		transform: scale(1.7);
// 		transition: 0.5s;
// 	}
// `;
