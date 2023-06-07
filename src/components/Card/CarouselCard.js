import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import Led, { boxShadow1, boxShadow2 } from "../Other/Led";

const commonStyles = {
	content: '""',
	position: "absolute",
	inset: 0,
	zIndex: -1,
	overflow: "visible",
};

const AchievementsCard = styled(Box)(
	({ theme, backgroundtype, ledtype, boxpadding, cutedcorner }) => {
		const animation = keyframes`
  ${ledtype === "ledOne" ? boxShadow1 : boxShadow2}
`;

		return {
			display: "block",
			position: "relative",
			zIndex: 0,
			width: "300px",
			// padding: "55px 60px 60px 40px",
			padding: boxpadding === "boxpadding" ? "30px" : "55px 60px 60px 40px",
			[theme.breakpoints.down("sm")]: {
				padding:
					boxpadding === "boxpadding" ? "15px 20px" : "55px 20px 60px 30px",
			},
			"&:after": {
				...commonStyles,
				clipPath:
					cutedcorner === "right"
						? "polygon(0 22.00px,22.00px 0,100% 0,100% calc(100% - 22.00px),calc(100% - 22.00px) 100%,0 100%,0 22.00px,1px  calc(22.00px + 0.41px),1px calc(100% - 1px),calc(100% - 22.00px - 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 22.00px - 0.41px),calc(100% - 1px) 1px,calc(22.00px + 0.41px) 1px,1px calc(22.00px + 0.41px))"
						: "polygon(0 0,calc(100% - 16.00px) 0,100% 16.00px,100% 100%,16.00px 100%,0 calc(100% - 16.00px),0 0,1px  1px ,1px calc(100% - 16.00px - 0.41px),calc(16.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(16.00px + 0.41px),calc(100% - 16.00px - 0.41px) 1px,1px 1px)",
				background:
					backgroundtype === "backgroundOne"
						? "linear-gradient(45deg,#575757,#616161,#292929)"
						: "linear-gradient(45deg,#D42530,#F10413,#490005)",
			},
			"&:hover > span:first-child": {
				animation:
					boxpadding === "boxpadding" ? "none" : `${animation} 1.5s infinite`,
			},
		};
	}
);

function CarouselCard(props) {
	const { backgroundtype, ledtype, boxpadding, cutedcorner } = props;

	return (
		<AchievementsCard
			cutedcorner={cutedcorner}
			backgroundtype={backgroundtype}
			ledtype={ledtype}
			boxpadding={boxpadding}
			{...props}
		></AchievementsCard>
	);
}

export default CarouselCard;
