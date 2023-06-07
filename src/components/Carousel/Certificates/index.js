import React, { Component } from "react";
import * as Styled from "./style";
import { ReactComponent as Arrow } from "../../../media/sliderArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Certificate from "../../../media/certificate.png";
import { Stack, Typography } from "@mui/material";
import GradientButton from "../../Buttons";

const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
	const { className, onClick } = props;

	return (
		<div {...props} className="custom-prevArrow" onClick={onClick}>
			<Arrow />
		</div>
	);
};
const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
	const { className, onClick } = props;

	return (
		<div {...props} className="custom-nextArrow" onClick={onClick}>
			<Arrow />
		</div>
	);
};

export default class CertificatesCarousel extends Component {
	render() {
		var settings = {
			className: "center",
			centerMode: true,
			focusOnSelect: true,
			infinite: true,
			centerPadding: "100px",
			variableWidth: true,
			slidesToShow: 3,
			speed: 800,
			autoplay: true,
			pauseOnHover: true,
			nextArrow: <GalleryNextArrow />,
			prevArrow: <GalleryPrevArrow />,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						centerMode: true,
						slidesToShow: 3,
					},
				},
			],
		};

		return (
			<Styled.StyledSlider {...settings}>
				<div>
					<Styled.CertificatesCarouselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<Styled.CertificateImg src={Certificate} alt="Certificate" />
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
								<ul></ul>
								<ul></ul>
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
							<pre></pre>
							<pre></pre>
							<Styled.ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</Styled.ButtonText>
						</GradientButton>
					</Styled.CertificatesCarouselCard>
				</div>
				<div>
					<Styled.CertificatesCarouselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<Styled.CertificateImg src={Certificate} alt="Certificate" />
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
								<ul></ul>
								<ul></ul>
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
							<pre></pre>
							<pre></pre>
							<Styled.ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</Styled.ButtonText>
						</GradientButton>
					</Styled.CertificatesCarouselCard>
				</div>
				<div>
					<Styled.CertificatesCarouselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<Styled.CertificateImg src={Certificate} alt="Certificate" />
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
								<ul></ul>
								<ul></ul>
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
							<pre></pre>
							<pre></pre>
							<Styled.ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</Styled.ButtonText>
						</GradientButton>
					</Styled.CertificatesCarouselCard>
				</div>
				<div>
					<Styled.CertificatesCarouselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<Styled.CertificateImg src={Certificate} alt="Certificate" />
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
								<ul></ul>
								<ul></ul>
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
							<pre></pre>
							<pre></pre>
							<Styled.ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</Styled.ButtonText>
						</GradientButton>
					</Styled.CertificatesCarouselCard>
				</div>
				<div>
					<Styled.CertificatesCarouselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
					>
						<Styled.CertificateImg src={Certificate} alt="Certificate" />
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
								<ul></ul>
								<ul></ul>
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
							<pre></pre>
							<pre></pre>
							<Styled.ButtonText variant="ButtonNew" component={"a"}>
								dOWNLOAD <Typography component={"a"}>PDF</Typography>
							</Styled.ButtonText>
						</GradientButton>
					</Styled.CertificatesCarouselCard>
				</div>
			</Styled.StyledSlider>
		);
	}
}
