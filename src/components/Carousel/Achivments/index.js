import React from "react";
// import Styled.Card from "../../Card/CarouselCard";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LedLine from "../../Other/Led";
import * as Styled from "./style";

const Achivments = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 4,
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
					slidesToShow: 3,
					centerPadding: "100px",
				},
			},
			{
				breakpoint: 1100,
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
		<Styled.StyledSlider {...settings}>
			<Styled.Wraper>
				<Styled.Card backgroundtype="backgroundOne" ledtype="ledOne">
					<LedLine ledtype="ledOne" />
					<Typography sx={{ mb: "10px" }}>TRUSTED BY</Typography>
					<Box sx={{ display: "flex", width: "max-content" }}>
						<Typography variant="CardRate" component={"h6"}>
							7/10
						</Typography>
						<Typography
							sx={{
								ml: "10px",
								maxWidth: { xs: "140px", xl: "160px", xxl: "190px" },
								lineHeight: "14px",
							}}
						>
							TOP ARMENIAN BANKS
						</Typography>
					</Box>
				</Styled.Card>
			</Styled.Wraper>
			<Styled.Wraper>
				<Styled.Card>
					<LedLine />
					<Typography sx={{ mb: "10px" }}>DELIVERING </Typography>
					<Box sx={{ display: "flex", width: "max-content" }}>
						<Typography variant="CardRate" component={"h6"}>
							100K
						</Typography>
						<Typography
							sx={{
								ml: "10px",
								maxWidth: { xs: "140px", xl: "160px", xxl: "190px" },
								lineHeight: "14px",
							}}
						>
							ANNUAL CLIENT TESTING HOURS
						</Typography>
					</Box>
				</Styled.Card>
			</Styled.Wraper>
			<Styled.Wraper>
				<Styled.Card backgroundtype="backgroundOne" ledtype="ledOne">
					<LedLine ledtype="ledOne" />
					<Typography sx={{ mb: "10px" }}>TRUSTED BY</Typography>
					<Box sx={{ display: "flex", width: "max-content" }}>
						<Typography variant="CardRate" component={"h6"}>
							2/3
						</Typography>
						<Typography
							sx={{
								ml: "10px",
								maxWidth: { xs: "140px", xl: "160px", xxl: "190px" },
								lineHeight: "14px",
							}}
						>
							TOP CLOUD PROVIDERS
						</Typography>
					</Box>
				</Styled.Card>
			</Styled.Wraper>
			<Styled.Wraper>
				<Styled.Card>
					<LedLine />
					<Typography sx={{ mb: "10px" }}>DELIVERING BY</Typography>
					<Box sx={{ display: "flex", width: "max-content" }}>
						<Typography variant="CardRate" component={"h6"}>
							300+
						</Typography>
						<Typography
							sx={{
								ml: "10px",
								maxWidth: { xs: "140px", xl: "160px", xxl: "190px" },
								lineHeight: "14px",
							}}
						>
							ORIGNAL RESEARCH ARTICLES
						</Typography>
					</Box>
				</Styled.Card>
			</Styled.Wraper>
		</Styled.StyledSlider>
	);
};

export default Achivments;
