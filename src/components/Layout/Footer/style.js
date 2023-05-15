import { styled } from "@mui/material/styles";
import { ReactComponent as LogoSvg } from "../../../media/Logo.svg";

export const Logo = styled(LogoSvg)(({ theme }) => ({
	width: "125px",
	height: "26px",
	filter: "grayscale(100%)",
}));
