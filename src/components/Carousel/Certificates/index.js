import React, { Component } from "react";
import Slider from "react-slick";
// import "./stylessss.css";
import CaruselCard from "../../Card/CarouselCard";
import { styled } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Certificate from "../../../media/certificate.png";
import { Box, Stack, Typography } from "@mui/material";
import GradientButton from "../../Buttons";

export default class CertificatesCarusel extends Component {
	render() {
		var settings = {
			className: "center",
			centerMode: true,
			focusOnSelect: true,
			infinite: true,
			centerPadding: "100px",
			variableWidth: true,
			slidesToShow: 3,
			speed: 500,
			// nextArrow: <GalleryNextArrow />,
			// prevArrow: <GalleryPrevArrow />
			responsive: [
				{
					breakpoint: 600,
					settings: {
						centerMode: true,
						slidesToShow: 3,
						speed: 1500,
						autoplay: true,
						pauseOnHover: true,
					},
				},
			],
		};

		const StyledSlider = styled(Slider)`
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

		const CertificatesCaruselCard = styled(CaruselCard)(({ theme }) => ({
			width: "auto",
			padding: "57px 20px 37px",
			transform: "scale(0.6)",
			[theme.breakpoints.down("sm")]: {
				maxWidth: "330px",
				padding: " 50px  10px 20px",
			},
		}));

		const CertificateImg = styled("img")(({ theme }) => ({
			width: "190px",
			height: "145px",
			margin: "0 70px 50px",
			[theme.breakpoints.down("sm")]: {
				width: "167px",
				height: "127px",
			},
		}));

		const ButtonText = styled(Typography)(({ theme }) => ({
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

		return (
			<StyledSlider {...settings}>
				<div>
					<CertificatesCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<CertificateImg src={Certificate} alt="Certificate" />
						<Stack
							flexDirection={"row"}
							sx={{ mb: "40px", width: "100%" }}
							justifyContent={"space-between"}
						>
							<Typography variant="CardHead" component={"h5"} sx={{ mb: "0" }}>
								Certificate CIPP
							</Typography>
							<GradientButton
								cliptype="smallOne"
								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
							>
								<Typography variant="ButtonNew" component={"a"}>
									new
								</Typography>
							</GradientButton>
						</Stack>
						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
							Developing and implementing a plan to quickly respond to and
							mitigate cyber security incidents, minimizing the impact on your
							business.
						</Typography>
						<GradientButton
							backgroundtype="backgroundOne"
							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
						>
							<ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</ButtonText>
						</GradientButton>
					</CertificatesCaruselCard>
				</div>
				<div>
					<CertificatesCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<CertificateImg src={Certificate} alt="Certificate" />
						<Stack
							flexDirection={"row"}
							sx={{ mb: "40px", width: "100%" }}
							justifyContent={"space-between"}
						>
							<Typography variant="CardHead" component={"h5"} sx={{ mb: "0" }}>
								Certificate CIPP
							</Typography>
							<GradientButton
								cliptype="smallOne"
								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
							>
								<Typography variant="ButtonNew" component={"a"}>
									new
								</Typography>
							</GradientButton>
						</Stack>
						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
							Developing and implementing a plan to quickly respond to and
							mitigate cyber security incidents, minimizing the impact on your
							business.
						</Typography>
						<GradientButton
							backgroundtype="backgroundOne"
							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
						>
							<ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</ButtonText>
						</GradientButton>
					</CertificatesCaruselCard>
				</div>
				<div>
					<CertificatesCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<CertificateImg src={Certificate} alt="Certificate" />
						<Stack
							flexDirection={"row"}
							sx={{ mb: "40px", width: "100%" }}
							justifyContent={"space-between"}
						>
							<Typography variant="CardHead" component={"h5"} sx={{ mb: "0" }}>
								Certificate CIPP
							</Typography>
							<GradientButton
								cliptype="smallOne"
								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
							>
								<Typography variant="ButtonNew" component={"a"}>
									new
								</Typography>
							</GradientButton>
						</Stack>
						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
							Developing and implementing a plan to quickly respond to and
							mitigate cyber security incidents, minimizing the impact on your
							business.
						</Typography>
						<GradientButton
							backgroundtype="backgroundOne"
							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
						>
							<ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</ButtonText>
						</GradientButton>
					</CertificatesCaruselCard>
				</div>
				<div>
					<CertificatesCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<CertificateImg src={Certificate} alt="Certificate" />
						<Stack
							flexDirection={"row"}
							sx={{ mb: "40px", width: "100%" }}
							justifyContent={"space-between"}
						>
							<Typography variant="CardHead" component={"h5"} sx={{ mb: "0" }}>
								Certificate CIPP
							</Typography>
							<GradientButton
								cliptype="smallOne"
								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
							>
								<Typography variant="ButtonNew" component={"a"}>
									new
								</Typography>
							</GradientButton>
						</Stack>
						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
							Developing and implementing a plan to quickly respond to and
							mitigate cyber security incidents, minimizing the impact on your
							business.
						</Typography>
						<GradientButton
							backgroundtype="backgroundOne"
							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
						>
							<ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</ButtonText>
						</GradientButton>
					</CertificatesCaruselCard>
				</div>
				<div>
					<CertificatesCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<CertificateImg src={Certificate} alt="Certificate" />
						<Stack
							flexDirection={"row"}
							sx={{ mb: "40px", width: "100%" }}
							justifyContent={"space-between"}
						>
							<Typography variant="CardHead" component={"h5"} sx={{ mb: "0" }}>
								Certificate CIPP
							</Typography>
							<GradientButton
								cliptype="smallOne"
								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
							>
								<Typography variant="ButtonNew" component={"a"}>
									new
								</Typography>
							</GradientButton>
						</Stack>
						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
							Developing and implementing a plan to quickly respond to and
							mitigate cyber security incidents, minimizing the impact on your
							business.
						</Typography>
						<GradientButton
							backgroundtype="backgroundOne"
							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
						>
							<ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</ButtonText>
						</GradientButton>
					</CertificatesCaruselCard>
				</div>
			</StyledSlider>
		);
	}
}

// import React, { Component } from "react";
// import Slider from "react-slick";
// // import "./stylessss.css";
// import CaruselCard from "../../Card/CaruselCard";
// import { styled } from "@mui/material/styles";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Certificate from "../../../media/certificate.png";
// import { Box, Stack, Typography } from "@mui/material";
// import GradientButton from "../../Buttons";

// export default class CertificatesCarusel extends Component {
// 	render() {
// 		var settings = {
// 			className: "center",
// 			centerMode: true,
// 			focusOnSelect: true,
// 			infinite: true,
// 			centerPadding: "100px",
// 			variableWidth: true,
// 			slidesToShow: 3,
// 			speed: 500,
// 			// nextArrow: <GalleryNextArrow />,
// 			// prevArrow: <GalleryPrevArrow />
// 		};

// 		const StyledSlider = styled(Slider)`
// 			position: relative;
// 			height: 100%;
// 			display: flex;
// 			justify-content: center;
// 			align-items: center;
// 			padding: 0 20px;

// 			.slick-list {
// 				position: relative;
// 				display: block !important;
// 				overflow: hidden;
// 				padding: 100px !important;
// 				width: 100%;
// 			}

// 			.slick-track {
// 				position: relative;
// 				align-items: center;
// 				top: 0;
// 				left: 0;
// 				display: flex;
// 			}

// 			.slick-slide div div {
// 			}
// 			.slick-slide div:first-child {
// 				display: flex !important;
// 				flex-direction: column;
// 				justify-content: center;
// 				align-items: center;
// 			}

// 			.slick-slide:not(.slick-active) {
// 				position: relative;
// 				z-index: 997;
// 			}

// 			.slick-slide.slick-active:not(.slick-current) {
// 				position: relative;
// 				z-index: 998;
// 				transform: scale(1.4);
// 				transition: 0.5s;
// 			}

// 			.slick-slide.slick-active:not(.slick-current) ::after {
// 				background: #0a0a0a;
// 				clip-path: polygon(
// 					0 0,
// 					calc(100% - 20px) 0,
// 					100% 20px,
// 					100% 100%,
// 					20px 100%,
// 					0 calc(100% - 20px)
// 				);
// 			}

// 			.slick-slide.slick-active.slick-current {
// 				position: relative;
// 				z-index: 999;
// 				transform: scale(1.7);
// 				transition: 0.5s;
// 			}

// 			// .slick-slide.slick-active:not(.slick-current) .image,
// 			// .slick-slide.slick-active.slick-current .image,
// 			// .slick-slide:not(.slick-active) .image {
// 			// 	width: 1px !important;
// 			// }

// 			.slick-prev,
// 			.slick-next {
// 				display: none !important;
// 			}

// 			.custom-prevArrow,
// 			.custom-nextArrow {
// 				position: relative;
// 				z-index: 99999;
// 				top: -10px;
// 			}

// 			.custom-prevArrow {
// 				left: -10px;
// 			}

// 			.custom-nextArrow {
// 				right: -10px;
// 			}

// 			.custom-prevArrow:hover,
// 			.custom-nextArrow:hover {
// 				fill: red;
// 				cursor: pointer;
// 			}
// 		`;

// 		const CertificatesCaruselCard = styled(CaruselCard)(({ theme }) => ({
// 			width: "auto",
// 			padding: "57px 20px 37px",
// 			[theme.breakpoints.down("md")]: {
// 				padding: "20px 10px",
// 			},
// 			// [theme.breakpoints.down("sm")]: {
// 			// 	width: "100%",
// 			// },
// 		}));

// 		const CertificateImg = styled("img")(({ theme }) => ({
// 			width: "190px",
// 			height: "145px",
// 			// marginBottom: "50px",
// 			margin: "0 70px 50px",
// 		}));

// 		const ButtonText = styled(Typography)(({ theme }) => ({
// 			textTransform: "uppercase",
// 			a: {
// 				background:
// 					"linear-gradient(93.74deg, #D42530 2.68%, #F10413 52.05%, #490005 104.6%)",
// 				backgroundClip: "text",
// 				WebkitBackgroundClip: "text",
// 				color: "transparent",
// 				textTransform: "uppercase",
// 			},
// 		}));

// 		return (
// 			<StyledSlider {...settings}>
// 				<div>
// 					<CertificatesCaruselCard
// 						sx={{ transform: "scale(0.6)" }}
// 						backgroundtype="backgroundOne"
// 						ledtype="ledOne"
// 					>
// 						<CertificateImg src={Certificate} alt="Certificate" />
// 						<Stack flexDirection={"row"} sx={{ mb: "40px" }}>
// 							<Typography
// 								variant="CardHead"
// 								component={"h5"}
// 								sx={{ mb: "0", mr: "85px" }}
// 							>
// 								Certificate CIPP
// 							</Typography>
// 							<GradientButton
// 								cliptype="smallOne"
// 								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
// 							>
// 								<Typography variant="ButtonNew" component={"a"}>
// 									new
// 								</Typography>
// 							</GradientButton>
// 						</Stack>
// 						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
// 							Developing and implementing a plan to quickly respond to and
// 							mitigate cyber security incidents, minimizing the impact on your
// 							business.
// 						</Typography>
// 						<GradientButton
// 							backgroundtype="backgroundOne"
// 							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
// 						>
// 							<ButtonText variant="ButtonNew" component={"a"}>
// 								dOWNLOAD <Typography component={"a"}>PDF</Typography>
// 							</ButtonText>
// 						</GradientButton>
// 					</CertificatesCaruselCard>
// 				</div>
// 				<div>
// 					<CertificatesCaruselCard
// 						sx={{ transform: "scale(0.6)" }}
// 						backgroundtype="backgroundOne"
// 						ledtype="ledOne"
// 					>
// 						<CertificateImg src={Certificate} alt="Certificate" />
// 						<Stack flexDirection={"row"} sx={{ mb: "40px" }}>
// 							<Typography
// 								variant="CardHead"
// 								component={"h5"}
// 								sx={{ mb: "0", mr: "85px" }}
// 							>
// 								Certificate CIPP
// 							</Typography>
// 							<GradientButton
// 								cliptype="smallOne"
// 								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
// 							>
// 								<Typography variant="ButtonNew" component={"a"}>
// 									new
// 								</Typography>
// 							</GradientButton>
// 						</Stack>
// 						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
// 							Developing and implementing a plan to quickly respond to and
// 							mitigate cyber security incidents, minimizing the impact on your
// 							business.
// 						</Typography>
// 						<Box sx={{ background: "#000000" }}>
// 							<GradientButton
// 								backgroundtype="backgroundOne"
// 								sx={{ padding: "14px auto", mt: "0", width: "100%" }}
// 							>
// 								<ButtonText variant="ButtonNew" component={"a"}>
// 									dOWNLOAD <Typography component={"a"}>PDF</Typography>
// 								</ButtonText>
// 							</GradientButton>
// 						</Box>
// 					</CertificatesCaruselCard>
// 				</div>
// 				<div>
// 					<CertificatesCaruselCard
// 						sx={{ transform: "scale(0.6)" }}
// 						backgroundtype="backgroundOne"
// 						ledtype="ledOne"
// 					>
// 						<CertificateImg src={Certificate} alt="Certificate" />
// 						<Stack flexDirection={"row"} sx={{ mb: "40px" }}>
// 							<Typography
// 								variant="CardHead"
// 								component={"h5"}
// 								sx={{ mb: "0", mr: "85px" }}
// 							>
// 								Certificate CIPP
// 							</Typography>
// 							<GradientButton
// 								cliptype="smallOne"
// 								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
// 							>
// 								<Typography variant="ButtonNew" component={"a"}>
// 									new
// 								</Typography>
// 							</GradientButton>
// 						</Stack>
// 						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
// 							Developing and implementing a plan to quickly respond to and
// 							mitigate cyber security incidents, minimizing the impact on your
// 							business.
// 						</Typography>
// 						<GradientButton
// 							backgroundtype="backgroundOne"
// 							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
// 						>
// 							<ButtonText variant="ButtonNew" component={"a"}>
// 								dOWNLOAD <Typography component={"a"}>PDF</Typography>
// 							</ButtonText>
// 						</GradientButton>
// 					</CertificatesCaruselCard>
// 				</div>
// 				<div>
// 					<CertificatesCaruselCard
// 						sx={{ transform: "scale(0.6)" }}
// 						backgroundtype="backgroundOne"
// 						ledtype="ledOne"
// 					>
// 						<CertificateImg src={Certificate} alt="Certificate" />
// 						<Stack flexDirection={"row"} sx={{ mb: "40px" }}>
// 							<Typography
// 								variant="CardHead"
// 								component={"h5"}
// 								sx={{ mb: "0", mr: "85px" }}
// 							>
// 								Certificate CIPP
// 							</Typography>
// 							<GradientButton
// 								cliptype="smallOne"
// 								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
// 							>
// 								<Typography variant="ButtonNew" component={"a"}>
// 									new
// 								</Typography>
// 							</GradientButton>
// 						</Stack>
// 						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
// 							Developing and implementing a plan to quickly respond to and
// 							mitigate cyber security incidents, minimizing the impact on your
// 							business.
// 						</Typography>
// 						<GradientButton
// 							backgroundtype="backgroundOne"
// 							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
// 						>
// 							<ButtonText variant="ButtonNew" component={"a"}>
// 								dOWNLOAD <Typography component={"a"}>PDF</Typography>
// 							</ButtonText>
// 						</GradientButton>
// 					</CertificatesCaruselCard>
// 				</div>
// 				<div>
// 					<CertificatesCaruselCard
// 						sx={{ transform: "scale(0.6)" }}
// 						backgroundtype="backgroundOne"
// 						ledtype="ledOne"
// 					>
// 						<CertificateImg src={Certificate} alt="Certificate" />
// 						<Stack flexDirection={"row"} sx={{ mb: "40px" }}>
// 							<Typography
// 								variant="CardHead"
// 								component={"h5"}
// 								sx={{ mb: "0", mr: "85px" }}
// 							>
// 								Certificate CIPP
// 							</Typography>
// 							<GradientButton
// 								cliptype="smallOne"
// 								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
// 							>
// 								<Typography variant="ButtonNew" component={"a"}>
// 									new
// 								</Typography>
// 							</GradientButton>
// 						</Stack>
// 						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
// 							Developing and implementing a plan to quickly respond to and
// 							mitigate cyber security incidents, minimizing the impact on your
// 							business.
// 						</Typography>
// 						<GradientButton
// 							backgroundtype="backgroundOne"
// 							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
// 						>
// 							<ButtonText variant="ButtonNew" component={"a"}>
// 								dOWNLOAD <Typography component={"a"}>PDF</Typography>
// 							</ButtonText>
// 						</GradientButton>
// 					</CertificatesCaruselCard>
// 				</div>
// 				<div>
// 					<CertificatesCaruselCard
// 						sx={{ transform: "scale(0.6)" }}
// 						backgroundtype="backgroundOne"
// 						ledtype="ledOne"
// 					>
// 						<CertificateImg src={Certificate} alt="Certificate" />
// 						<Stack flexDirection={"row"} sx={{ mb: "40px" }}>
// 							<Typography
// 								variant="CardHead"
// 								component={"h5"}
// 								sx={{ mb: "0", mr: "85px" }}
// 							>
// 								Certificate CIPP
// 							</Typography>
// 							<GradientButton
// 								cliptype="smallOne"
// 								sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
// 							>
// 								<Typography variant="ButtonNew" component={"a"}>
// 									new
// 								</Typography>
// 							</GradientButton>
// 						</Stack>
// 						<Typography variant="CardDescription" sx={{ mb: "50px" }}>
// 							Developing and implementing a plan to quickly respond to and
// 							mitigate cyber security incidents, minimizing the impact on your
// 							business.
// 						</Typography>
// 						<GradientButton
// 							backgroundtype="backgroundOne"
// 							sx={{ padding: "14px auto", mt: "0", width: "100%" }}
// 						>
// 							<ButtonText variant="ButtonNew" component={"a"}>
// 								dOWNLOAD <Typography component={"a"}>PDF</Typography>
// 							</ButtonText>
// 						</GradientButton>
// 					</CertificatesCaruselCard>
// 				</div>
// 			</StyledSlider>
// 		);
// 	}
// }
// const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
//   const { className, onClick } = props;

//   return (
//     <div {...props} className="custom-prevArrow" onClick={onClick}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//       >
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       </svg>
//     </div>
//   );
// };
// const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
//   const { className, onClick } = props;

//   return (
//     <div {...props} className="custom-nextArrow" onClick={onClick}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//       >
//         <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
//       </svg>
//     </div>
//   );
// };
