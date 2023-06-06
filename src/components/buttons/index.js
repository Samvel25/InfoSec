import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const commonStyles = {
	content: '""',
	position: "absolute",
	inset: 0,
	zIndex: -1,
};

const ButtonGradient = styled(Button)(
	({ theme, backgroundtype, cliptype }) => ({
		display: "block",
		position: "relative",
		zIndex: 0,
		textDecoration: "none",
		padding: "14px 30px",
		minWidth: "140px",
		// cursor: "pointer",
		// "&:active": {
		// 	borderStyle: "outset",
		// 	boxShadow: "none",
		// },
		"&:hover": {
			background: "none",
			// pointerEvents: "none",
		},
		"&:before": {
			...commonStyles,
			clipPath:
				cliptype === "smallOne"
					? "polygon(0 0,calc(100% - 10.00px) 0,100% 10.00px,100% 100%,10.00px 100%,0 calc(100% - 10.00px),0 0,1px  1px ,1px calc(100% - 10.00px - 0.41px),calc(10.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(10.00px + 0.41px),calc(100% - 10.00px - 0.41px) 1px,1px 1px)"
					: "polygon(0 0,calc(100% - 20.00px) 0,100% 20.00px,100% 100%,20.00px 100%,0 calc(100% - 20.00px),0 0,1px  1px ,1px calc(100% - 20.00px - 0.41px),calc(20.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(20.00px + 0.41px),calc(100% - 20.00px - 0.41px) 1px,1px 1px)",
			background:
				backgroundtype === "backgroundOne"
					? "linear-gradient(45deg,#575757,#616161,#292929)"
					: "linear-gradient(45deg,#D42530,#F10413,#490005)",
		},
	})
);

function GradientButton(props) {
	const { backgroundtype, cliptype } = props;

	return (
		<ButtonGradient
			backgroundtype={backgroundtype}
			cliptype={cliptype}
			variant="contained"
			color="primary"
			{...props}
		/>
	);
}

export default GradientButton;
