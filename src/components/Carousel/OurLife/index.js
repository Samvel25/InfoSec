import React, { Component } from "react";
import * as Styled from "./style";
import { ReactComponent as Arrow } from "../../../media/sliderArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurLifeImg from "../../../media/ourLIfe.png";
import OurLifeImg2 from "../../../media/ourLife2.png";

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

export default class OurLifeCarousel extends Component {
	render() {
		var settings = {
			className: "center",
			centerMode: true,
			focusOnSelect: true,
			centerPadding: "100px",
			variableWidth: true,
			slidesToShow: 4,
			speed: 800,
			autoplay: true,
			pauseOnHover: true,
			nextArrow: <GalleryNextArrow />,
			prevArrow: <GalleryPrevArrow />,
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

		return (
			<Styled.StyledSlider {...settings}>
				<Styled.Wrapper>
					<div>
						<Styled.OurLifeCarouselCard
							backgroundtype="backgroundOne"
							ledtype="ledOne"
							cutedcorner="right"
						>
							<img
								width={"300px"}
								sx={{ pb: "143%" }}
								src={OurLifeImg2}
								alt="Our life immage"
							/>
						</Styled.OurLifeCarouselCard>
					</div>
				</Styled.Wrapper>
				<Styled.Wrapper>
					<div>
						<Styled.OurLifeCarouselCard
							backgroundtype="backgroundOne"
							ledtype="ledOne"
							cutedcorner="right"
						>
							<img
								width={"300px"}
								sx={{ pb: "143%" }}
								src={OurLifeImg}
								alt="Our life immage"
							/>
						</Styled.OurLifeCarouselCard>
					</div>
				</Styled.Wrapper>
				<Styled.Wrapper>
					<div>
						<Styled.OurLifeCarouselCard
							backgroundtype="backgroundOne"
							ledtype="ledOne"
							cutedcorner="right"
						>
							<img
								width={"300px"}
								sx={{ pb: "143%" }}
								src={OurLifeImg2}
								alt="Our life immage"
							/>
						</Styled.OurLifeCarouselCard>
					</div>
				</Styled.Wrapper>
				<Styled.Wrapper>
					<div>
						<Styled.OurLifeCarouselCard
							backgroundtype="backgroundOne"
							ledtype="ledOne"
							cutedcorner="right"
						>
							<img
								width={"300px"}
								sx={{ pb: "143%" }}
								src={OurLifeImg}
								alt="Our life immage"
							/>
						</Styled.OurLifeCarouselCard>
					</div>
				</Styled.Wrapper>
				<Styled.Wrapper>
					<div>
						<Styled.OurLifeCarouselCard
							backgroundtype="backgroundOne"
							ledtype="ledOne"
							cutedcorner="right"
						>
							<img
								width={"300px"}
								sx={{ pb: "143%" }}
								src={OurLifeImg2}
								alt="Our life immage"
							/>
						</Styled.OurLifeCarouselCard>
					</div>
				</Styled.Wrapper>
			</Styled.StyledSlider>
		);
	}
}
