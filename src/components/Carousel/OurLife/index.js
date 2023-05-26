import React, { Component } from "react";
import * as Styled from "./style";
import { ReactComponent as Arrow } from "../../../media/sliderArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurLifeImg from "../../../media/ourLIfe.png";

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

export default class OurLifeCarusel extends Component {
	render() {
		var settings = {
			// className: "center",
			centerMode: true,
			focusOnSelect: true,
			// infinite: false,
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
					breakpoint: 1150,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		};

		return (
			<Styled.StyledSlider {...settings}>
				<div>
					<Styled.OurLifeCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
						cutedcorner="right"
					>
						<img
							width={"300px"}
							// sx={{ pb: "143%" }}
							src={OurLifeImg}
							alt="Our life immage"
						/>
					</Styled.OurLifeCaruselCard>
				</div>
				<div>
					<Styled.OurLifeCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
						cutedcorner="right"
					>
						<img
							width={"300px"}
							// sx={{ pb: "143%" }}
							src={OurLifeImg}
							alt="Our life immage"
						/>
					</Styled.OurLifeCaruselCard>
				</div>
				<div>
					<Styled.OurLifeCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
						cutedcorner="right"
					>
						<img
							width={"300px"}
							// sx={{ pb: "143%" }}
							src={OurLifeImg}
							alt="Our life immage"
						/>
					</Styled.OurLifeCaruselCard>
				</div>
				<div>
					<Styled.OurLifeCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
						cutedcorner="right"
					>
						<img
							width={"300px"}
							// sx={{ pb: "143%" }}
							src={OurLifeImg}
							alt="Our life immage"
						/>
					</Styled.OurLifeCaruselCard>
				</div>
				<div>
					<Styled.OurLifeCaruselCard
						backgroundtype="backgroundOne"
						ledtype="ledOne"
						cutedcorner="right"
					>
						<img
							width={"300px"}
							// sx={{ pb: "143%" }}
							src={OurLifeImg}
							alt="Our life immage"
						/>
					</Styled.OurLifeCaruselCard>
				</div>
			</Styled.StyledSlider>
		);
	}
}
