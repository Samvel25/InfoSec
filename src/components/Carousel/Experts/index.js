import Slider from "react-slick";
import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import AchievementsCard from "../../Card/CarouselCard";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LedLine from "../../Other/Led";
import { ReactComponent as CardLogo } from "../../../media/cardLogo.svg";

export default class Experts extends Component {
	render() {
		var settings = {
			dots: false,
			arrows: false,
			infinite: true,
			slidesToShow: 3,
			swipeToSlide: true,
			variableWidth: true,
			focusOnSelect: true,
			// speed: 800,
			// autoplay: true,
			// pauseOnHover: true,
			responsive: [
				{
					breakpoint: 1350,
					settings: {
						slidesToShow: 3,
						centerPadding: "90px",
					},
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						centerPadding: "70px",
					},
				},
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 2,
						centerPadding: "90px",
					},
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
						centerPadding: "100px",
					},
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						centerPadding: "60px",
					},
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 1,
						centerPadding: "20px",
					},
				},
			],
		};

		const StyledSlider = styled(Slider)`
			.slick-slide {
				margin: 0 19px;

				@media (max-width: 700px) {
					margin: 0 13px;
				}

				@media (min-width: 1440px) {
					margin: 0 40px;
				}
			}

			.slick-list {
				margin: 0 -19px;
				padding: 0 0 70px !important;

				@media (max-width: 700px) {
					margin: 0 -13px;
				}

				@media (min-width: 1440px) {
					text-align: center;
					margin: 0 -40px;
					padding-bottom: 70px;
				}
			}
			.slick-track {
				justify-content: center;
				display: flex;
			}
		`;

		const Wraper = styled(Box)({
			width: "max-content",
			textAlign: "start",
			// "& AchievementsCard": {
			// 	"& Box": {},
			// },
		});
		return (
			<StyledSlider {...settings}>
				<Wraper>
					<AchievementsCard
						sx={{ p: "45px 30px ", width: "390px" }}
						backgroundtype="backgroundOne"
					>
						<LedLine />
						<Typography
							sx={{ textTransform: "uppercase" }}
							variant="CardHead"
							component={"h5"}
						>
							Swiftly identify and localize
						</Typography>
						<Typography
							variant="CardDescription"
							sx={{ mt: "25px", mb: "17px" }}
						>
							Swift response limits damage, localizes threat, protects network
							and data.
						</Typography>
						<CardLogo width={"60px"} height={"53px"} />
					</AchievementsCard>
				</Wraper>
				<Wraper>
					<AchievementsCard
						sx={{ p: "45px 30px ", width: "390px" }}
						backgroundtype="backgroundOne"
					>
						<LedLine />
						<Typography
							sx={{ textTransform: "uppercase" }}
							variant="CardHead"
							component={"h5"}
						>
							Swiftly identify and localize
						</Typography>
						<Typography
							variant="CardDescription"
							sx={{ mt: "25px", mb: "17px" }}
						>
							Swift response limits damage, localizes threat, protects network
							and data.
						</Typography>
						<CardLogo width={"60px"} height={"53px"} />
					</AchievementsCard>
				</Wraper>
				<Wraper>
					<AchievementsCard
						sx={{ p: "45px 30px ", width: "390px" }}
						backgroundtype="backgroundOne"
					>
						<LedLine />
						<Typography
							sx={{ textTransform: "uppercase" }}
							variant="CardHead"
							component={"h5"}
						>
							Swiftly identify and localize
						</Typography>
						<Typography
							variant="CardDescription"
							sx={{ mt: "25px", mb: "17px" }}
						>
							Swift response limits damage, localizes threat, protects network
							and data.
						</Typography>
						<CardLogo width={"60px"} height={"53px"} />
					</AchievementsCard>
				</Wraper>
			</StyledSlider>
		);
	}
}
