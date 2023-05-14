import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as NameAm } from "../../media/clients-logo/nameAmLogo.svg";
import { ReactComponent as DomainDesk } from "../../media/clients-logo/domainDeskLogo.svg";
import { styled } from "@mui/material/styles";

export default class Clients extends Component {
	render() {
		var settings = {
			dots: false,
			arrows: false,
			infinite: false,
			speed: 500,
			slidesToShow: 8,
			slidesToScroll: 1,
			initialSlide: 0,
			afterChange: function (index) {
				console.log(
					`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
				);
			},
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						centerMode: true,

						slidesToShow: 5,
						centerPadding: "70px",
						infinite: true,
					},
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 3,
						centerPadding: "90px",
						slidesToScroll: 2,
						infinite: true,
						centerMode: true,
					},
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 2,
						centerPadding: "70px",
						slidesToScroll: 2,
						infinite: true,
						centerMode: true,
					},
				},
			],
		};

		const LogoWraper = styled("span")({
			width: "max-content",
			textAlign: "center",
			"& svg": {
				filter: "grayscale(100%)",
				height: "22px",
				width: "115px",
			},
		});
		return (
			<Slider {...settings}>
				<LogoWraper>
					<NameAm />
				</LogoWraper>
				<LogoWraper>
					<DomainDesk />
				</LogoWraper>
				<LogoWraper>
					<NameAm />
				</LogoWraper>
				<LogoWraper>
					<DomainDesk />
				</LogoWraper>
				<LogoWraper>
					<NameAm />
				</LogoWraper>
				<LogoWraper>
					<DomainDesk />
				</LogoWraper>
				<LogoWraper>
					<NameAm />
				</LogoWraper>
				<LogoWraper>
					<DomainDesk />
				</LogoWraper>
			</Slider>
		);
	}
}
