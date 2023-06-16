import { Box, styled, keyframes } from "@mui/material";
import Led, { boxShadow1, boxShadow2 } from "../../Other/Led";

const commonStyles = {
	content: '""',
	position: "absolute",
	inset: 0,
	zIndex: -1,
	overflow: "visible",
	clipPath:
		"polygon(0 0,calc(100% - 16.00px) 0,100% 16.00px,100% 100%,16.00px 100%,0 calc(100% - 16.00px),0 0,1px  1px ,1px calc(100% - 16.00px - 0.41px),calc(16.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(16.00px + 0.41px),calc(100% - 16.00px - 0.41px) 1px,1px 1px)",
};

export const BigCard = styled(Box)(({ theme, backgroundtype, ledtype }) => {
	const animation = keyframes`
  ${ledtype === "ledOne" ? boxShadow1 : boxShadow2}
`;

	return {
		display: "block",
		position: "relative",
		zIndex: 0,
		padding: "25px 25px 12px",
		"&:before": {
			...commonStyles,
			background: "linear-gradient(45deg,#D42530,#F10413,#490005)",
		},
		"&:hover > span:first-child": {
			animation: `${animation} 1.5s infinite`,
		},
		[theme.breakpoints.down("sm")]: {
			"& span:first-child": {
				animation: `${animation} 1.5s infinite`,
			},
		},
	};
});
