import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as NameAm } from "../../../media/logo/nameAmLogo.svg";
import { ReactComponent as DomainDesk } from "../../../media/logo/domainDeskLogo.svg";
import * as Styled from "./style";

export default class Clients extends Component {
	render() {
		var settings = {
			dots: false,
			arrows: false,
			infinite: false,
			focusOnSelect: true,
			swipeToSlide: true,
			autoplay: true,
			slidesToShow: 8,
			slidesToScroll: 1,
			initialSlide: 0,
			speed: 2000,
			autoplaySpeed: 2000,
			afterChange: function (index) {
				console.log(
					`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
				);
			},
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
						infinite: true,
					},
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						infinite: true,
					},
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
					},
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 2,
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
	}
}
