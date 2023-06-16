import * as Styled from "./Style";

function CarouselCard(props) {
	const { backgroundtype, ledtype, boxpadding, cutedcorner } = props;

	return (
		<Styled.AchievementsCard
			cutedcorner={cutedcorner}
			backgroundtype={backgroundtype}
			ledtype={ledtype}
			boxpadding={boxpadding}
			{...props}
		></Styled.AchievementsCard>
	);
}

export default CarouselCard;
