import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const commonStyles = {
	content: '""',
	position: "absolute",
	inset: 0,
	zIndex: -1,
};

export const CertificateButton = styled(Button)(({ theme }) => ({
	display: "flex",
	position: "relative",
	zIndex: 0,

	textDecoration: "none",
	minWidth: "140px",
	width: "100%",
	background: "transparent",
	"& pre": {
		position: "absolute",
		background: "#0a0a0a",
		transform: "rotate(45deg)",
		height: "14px",
		width: "28px",
		left: "-12px",
		bottom: "-3px",

		margin: 0,
	},
	"& pre:first-of-type": {
		right: "-12px",
		top: "-3px",
		left: "auto",
		bottom: "auto",
	},
	"&:hover": {
		background: "none",
	},
	"&:before": {
		...commonStyles,
		clipPath:
			"polygon(0 0,calc(100% - 16.00px) 0,100% 16.00px,100% 100%,16.00px 100%,0 calc(100% - 16.00px),0 0,1px  1px ,1px calc(100% - 16.00px - 0.41px),calc(16.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(16.00px + 0.41px),calc(100% - 16.00px - 0.41px) 1px,1px 1px)",
		background: "linear-gradient(45deg,#575757,#616161,#292929)",
	},
}));
