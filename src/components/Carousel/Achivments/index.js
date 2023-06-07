import Slider from "react-slick";
import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import AchievementsCard from "../../Card/CarouselCard";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LedLine from "../../Other/Led";

export default class Achivments extends Component {
	render() {
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
				// {
				// 	breakpoint: 450,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		centerPadding: "10px",
				// 	},
				// },
			],
		};

		const StyledSlider = styled(Slider)`
			.slick-list {
				position: relative;
				display: block !important;
				overflow: hidden;
				padding: 100px !important;
				width: 100%;
				@media (min-width: 1350px) {
					padding: 0 0 60px !important;
				}
			}

			.slick-track {
				position: relative;
				align-items: center;
				top: 0;
				left: 0;
				display: flex;
			}
		`;

		const Wraper = styled(Box)({
			margin: "auto 10px",
			width: "max-content",
			textAlign: "start",
			// "& AchievementsCard": {
			// 	"& Box": {},
			// },
		});
		return (
			<StyledSlider {...settings}>
				<Wraper>
					<AchievementsCard backgroundtype="backgroundOne" ledtype="ledOne">
						<LedLine ledtype="ledOne" />
						<Typography sx={{ mb: "10px" }}>TRUSTED BY</Typography>
						<Box sx={{ display: "flex", width: "max-content" }}>
							<Typography variant="CardRate" component={"h6"}>
								7/10
							</Typography>
							<Typography
								sx={{ ml: "10px", maxWidth: "140px", lineHeight: "14px" }}
							>
								TOP ARMENIAN BANKS
							</Typography>
						</Box>
					</AchievementsCard>
				</Wraper>
				<Wraper>
					<AchievementsCard>
						<LedLine />
						<Typography sx={{ mb: "10px" }}>DELIVERING </Typography>
						<Box sx={{ display: "flex", width: "max-content" }}>
							<Typography variant="CardRate" component={"h6"}>
								100K
							</Typography>
							<Typography
								sx={{ ml: "10px", maxWidth: "140px", lineHeight: "14px" }}
							>
								ANNUAL CLIENT TESTING HOURS
							</Typography>
						</Box>
					</AchievementsCard>
				</Wraper>
				<Wraper>
					<AchievementsCard backgroundtype="backgroundOne" ledtype="ledOne">
						<LedLine ledtype="ledOne" />
						<Typography sx={{ mb: "10px" }}>TRUSTED BY</Typography>
						<Box sx={{ display: "flex", width: "max-content" }}>
							<Typography variant="CardRate" component={"h6"}>
								2/3
							</Typography>
							<Typography
								sx={{ ml: "10px", maxWidth: "140px", lineHeight: "14px" }}
							>
								TOP CLOUD PROVIDERS
							</Typography>
						</Box>
					</AchievementsCard>
				</Wraper>
				<Wraper>
					<AchievementsCard>
						<LedLine />
						<Typography sx={{ mb: "10px" }}>DELIVERING BY</Typography>
						<Box sx={{ display: "flex", width: "max-content" }}>
							<Typography variant="CardRate" component={"h6"}>
								300+
							</Typography>
							<Typography
								sx={{ ml: "10px", maxWidth: "140px", lineHeight: "14px" }}
							>
								ORIGNAL RESEARCH ARTICLES
							</Typography>
						</Box>
					</AchievementsCard>
				</Wraper>
			</StyledSlider>
		);
	}
}
