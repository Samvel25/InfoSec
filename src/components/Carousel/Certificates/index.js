import React from "react";
import * as Styled from "./style";
import { ReactComponent as Arrow } from "../../../media/svg/sliderArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allCards from "../../CertificateCardsSorting/Card/Data";

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
	// useEffect(() => {
	// 	const slider = document.querySelector(".center");
	// 	const slides = slider.querySelectorAll(".slick-slide");

	// 	slides.forEach((slide) => {
	// 		const dataIndex = slide.getAttribute("data-index");

	// 		if (dataIndex === "2" || dataIndex === "-2") {
	// 			slide.classList.add("scaled-slide");
	// 		}
	// 	});
	// }, []);
	const settings = {
		className: "center",
		centerMode: true,
		focusOnSelect: true,
		infinite: true,
		centerPadding: "800px",
		variableWidth: true,
		slidesToShow: 3,
		speed: 800,
		// autoplay: true,
		pauseOnHover: true,
		nextArrow: <GalleryNextArrow />,
		prevArrow: <GalleryPrevArrow />,
		responsive: [
			{
				breakpoint: 2450,
				settings: {
					centerPadding: "700px",

					centerMode: true,
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 2300,
				settings: {
					centerPadding: "500px",

					centerMode: true,
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1920,
				settings: {
					centerPadding: "300px",

					centerMode: true,
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1440,
				settings: {
					centerPadding: "200px",

					centerMode: true,
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					centerPadding: "100px",
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
