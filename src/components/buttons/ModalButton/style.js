import { Box, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: none;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);

  }
  100% {
    transform: scale(1);
    box-shadow: none;

  }
`;

// Define color transition animation

export const ModalButton = styled(Button)(({ theme }) => ({
	position: "relative",
	height: "53px",
	width: "53px",
	background: "#D42530",
	minWidth: "1px",
	borderRadius: "50%",
	"&:hover": {
		animation: `${pulse} 0.7s ease-in-out infinite`,
		background: "#D42530",
	},
	[theme.breakpoints.down("md")]: {
		paddingTop: "40px",
	},
	"& svg": {
		position: "absolute",
		transform: "translate(-50%, -50%)",
		top: "50%",
		left: "50%",
		height: "20px",
		width: "20px",
	},
}));
