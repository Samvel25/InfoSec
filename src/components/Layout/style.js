import { keyframes } from "@mui/system";
import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const slideAndRotateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.4) rotate(90deg);
  }
`;

export const LayoutContainer = styled(Container)(({ theme, ismenuopen }) => ({
	animation: `${slideAndRotateAnimation} 0.5s ease-in-out`,
	transformOrigin: "top right",
	transform: ismenuopen ? "scale(0.4) rotate(90deg)" : "none",
}));
