import React from "react";
import AchievementsCard from "../../Card/CarouselCard";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LedLine from "../../Other/Led";
import * as Styled from "./style";
import { ReactComponent as CardLogo } from "../../../media/svg/cardLogo.svg";

const Experts = () => {
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
		<Styled.ExpertsSlider {...settings}>
			<Styled.Wrapper>
				<AchievementsCard
					sx={{
						p: {
							sm: "45px 30px",
							xs: "30px 20px",
							xl: "55px 60px 45px",
							xxl: "55px 135px 40px 75px",
						},
						width: "max-content",
					}}
					backgroundtype="backgroundOne"
				>
					<LedLine />
					<Box sx={{ maxWidth: "330px" }}>
						<Typography
							sx={{ textTransform: "uppercase" }}
							variant="CardHead"
							component={"h5"}
						>
							Swiftly identify and localize
						</Typography>
						<Typography
							component={"p"}
							variant="CardDescription"
							sx={{ mt: "25px", mb: "17px" }}
						>
							Swift response limits damage, localizes threat, protects network
							and data.
						</Typography>
					</Box>
					<CardLogo width={"60px"} height={"53px"} />
				</AchievementsCard>
			</Styled.Wrapper>
			<Styled.Wrapper>
				<AchievementsCard
					sx={{
						p: {
							sm: "45px 30px",
							xs: "30px 20px",
							xl: "55px 60px",
							xxl: "55px 135px 40px 75px",
						},
						width: "max-content",
					}}
					backgroundtype="backgroundOne"
				>
					<LedLine />
					<Box sx={{ maxWidth: "330px" }}>
						<Typography
							sx={{ textTransform: "uppercase" }}
							variant="CardHead"
							component={"h5"}
						>
							Swiftly identify and localize
						</Typography>
						<Typography
							component={"p"}
							variant="CardDescription"
							sx={{ mt: "25px", mb: "17px" }}
						>
							Swift response limits damage, localizes threat, protects network
							and data.
						</Typography>
					</Box>
					<CardLogo width={"60px"} height={"53px"} />
				</AchievementsCard>
			</Styled.Wrapper>
			<Styled.Wrapper>
				<AchievementsCard
					sx={{
						p: {
							sm: "45px 30px",
							xs: "30px 20px",
							xl: "55px 60px",
							xxl: "55px 135px 40px 75px",
						},
						width: "max-content",
					}}
					backgroundtype="backgroundOne"
				>
					<LedLine />
					<Box sx={{ maxWidth: "330px" }}>
						<Typography
							sx={{ textTransform: "uppercase" }}
							variant="CardHead"
							component={"h5"}
						>
							Swiftly identify and localize
						</Typography>
						<Typography
							component={"p"}
							variant="CardDescription"
							sx={{ mt: "25px", mb: "17px" }}
						>
							Swift response limits damage, localizes threat, protects network
							and data.
						</Typography>
					</Box>
					<CardLogo width={"60px"} height={"53px"} />
				</AchievementsCard>
			</Styled.Wrapper>
		</Styled.ExpertsSlider>
	);
};

export default Experts;
