import React from "react";
import CarouselCard from "../../Card/AnimatedCarouselCard";
import { Box, Stack, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Styled from "./style";
import { ReactComponent as NameAmLogo } from "../../../media/logo/nameAmLogo.svg";
import { ReactComponent as DomainDeskAmLogo } from "../../../media/logo/domainDeskLogo.svg";

const ClientsReview = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		swipeToSlide: true,
		variableWidth: true,
		focusOnSelect: true,
		centerMode: true,
		speed: 800,
		autoplay: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1350,
				settings: {
					slidesToShow: 2,
					centerPadding: "100px",
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					centerPadding: "100px",
				},
			},
		],
	};

	return (
		<Styled.CarouselContainer>
			<Styled.ExpertsSlider {...settings}>
				<Styled.Wrapper>
					<CarouselCard
						sx={{
							p: {
								xs: "30px 20px",
								sm: "45px 30px",
								xl: "45px 40px 50px 45px",
								xxl: "50px 50px 55px 50px",
							},
							width: "max-content",
						}}
						backgroundtype="backgroundOne"
					>
						<Box sx={{ maxWidth: { xs: "330px", xl: "380px", xxl: "430px" } }}>
							<Styled.LogoWrapper>
								<NameAmLogo />
							</Styled.LogoWrapper>

							<Stack
								component={"abbr"}
								direction={"row"}
								justifyContent={"space-between"}
								sx={{
									width: { xs: "115px", xl: "138px", xxl: "165px" },
									mt: "70px",
								}}
							>
								<Styled.RateStars />
								<Styled.RateStars />
								<Styled.RateStars />
								<Styled.RateStars />
								<Styled.RateStars grayscale={true} />
							</Stack>
							<Typography sx={{ mt: "10px" }}>
								INFOSEC LLC, is the best and gives good solutions for my company
							</Typography>
						</Box>
					</CarouselCard>
				</Styled.Wrapper>
				<Styled.Wrapper>
					<CarouselCard
						sx={{
							p: {
								sm: "45px 30px",
								xs: "30px 20px",
								xl: "45px 40px 50px 45px",
								xxl: "50px 50px 55px 50px",
							},
							width: "max-content",
						}}
						backgroundtype="backgroundOne"
					>
						<Box sx={{ maxWidth: { xs: "330px", xl: "380px", xxl: "430px" } }}>
							<Styled.LogoWrapper>
								<DomainDeskAmLogo />
							</Styled.LogoWrapper>
							<Stack
								component={"abbr"}
								direction={"row"}
								justifyContent={"space-between"}
								sx={{
									width: { xs: "115px", xl: "138px", xxl: "165px" },
									mt: "70px",
								}}
							>
								<Styled.RateStars />
								<Styled.RateStars />
								<Styled.RateStars />
								<Styled.RateStars />
								<Styled.RateStars />
							</Stack>
							<Typography sx={{ mt: "10px" }}>
								INFOSEC LLC is the best and gives good solutions for my company
							</Typography>
						</Box>
					</CarouselCard>
				</Styled.Wrapper>
				<Styled.Wrapper>
					<CarouselCard
						sx={{
							p: {
								sm: "45px 30px",
								xs: "30px 20px",
								xl: "45px 40px 50px 45px",
								xxl: "50px 50px 55px 50px",
							},
							width: "max-content",
						}}
						backgroundtype="backgroundOne"
					>
						<Box sx={{ maxWidth: { xs: "330px", xl: "380px", xxl: "430px" } }}>
							<Styled.LogoWrapper>
								<NameAmLogo />
							</Styled.LogoWrapper>
							<Stack
								component={"abbr"}
								direction={"row"}
								justifyContent={"space-between"}
								sx={{
									width: { xs: "115px", xl: "138px", xxl: "165px" },
									mt: "70px",
								}}
							>
								<Styled.RateStars />
								<Styled.RateStars />
								<Styled.RateStars />
								<Styled.RateStars />
								<Styled.RateStars grayscale={true} />
							</Stack>
							<Typography sx={{ mt: "10px" }}>
								INFOSEC LLC is the best and gives good solutions for my company
							</Typography>
						</Box>
					</CarouselCard>
				</Styled.Wrapper>
			</Styled.ExpertsSlider>
		</Styled.CarouselContainer>
	);
};

export default ClientsReview;
