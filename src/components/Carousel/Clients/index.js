import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as NameAm } from "../../../media/logo/nameAmLogo.svg";
import { ReactComponent as DomainDesk } from "../../../media/logo/domainDeskLogo.svg";
import * as Styled from "./style";

const Clients = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: false,
		focusOnSelect: true,
		swipeToSlide: true,
		centerMode: true,
		autoplay: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		initialSlide: 0,
		speed: 2000,
		autoplaySpeed: 2000,

		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					centerPadding: "60px",

					infinite: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					centerPadding: "90px",
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 650,
				settings: {
					centerPadding: "80px",
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 500,
				settings: {
					centerPadding: "120px",
					slidesToShow: 1,
					slidesToScroll: 2,
					infinite: true,
					centerMode: true,
				},
			},
			{
				breakpoint: 430,
				settings: {
					centerPadding: "90px",
					slidesToShow: 1,
					infinite: true,
					centerMode: true,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			<Styled.LogoWraper>
				<NameAm />
			</Styled.LogoWraper>
			<Styled.LogoWraper>
				<DomainDesk />
			</Styled.LogoWraper>
			<Styled.LogoWraper>
				<NameAm />
			</Styled.LogoWraper>
			<Styled.LogoWraper>
				<DomainDesk />
			</Styled.LogoWraper>
			<Styled.LogoWraper>
				<NameAm />
			</Styled.LogoWraper>
			<Styled.LogoWraper>
				<DomainDesk />
			</Styled.LogoWraper>
			<Styled.LogoWraper>
				<NameAm />
			</Styled.LogoWraper>
			<Styled.LogoWraper>
				<DomainDesk />
			</Styled.LogoWraper>
		</Slider>
	);
};

export default Clients;
