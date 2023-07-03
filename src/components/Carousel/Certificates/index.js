import React from "react";
import * as Styled from "./style";
import { ReactComponent as Arrow } from "../../../media/svg/sliderArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";
import CardItem from "../../CertificateCardsSorting/Card";
import allCards from "../../CertificateCardsSorting/Card/sliderData";

// import allCards from "./sliderData";

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

const CertificatesCarousel = ({ cards = allCards }) => {
	const settings = {
		className: "center",
		centerMode: true,
		focusOnSelect: true,
		infinite: true,
		centerPadding: "100px",
		variableWidth: true,
		slidesToShow: 3,
		speed: 800,
		// autoplay: true,
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
			{cards.map((card, index) => (
				<div key={index}>
					<Styled.StyledCardItem
						title={card.title}
						content={card.content}
						certificateimg={card.certificateimg}
					/>
				</div>
			))}
		</Styled.StyledSlider>
	);
};

export default CertificatesCarousel;
