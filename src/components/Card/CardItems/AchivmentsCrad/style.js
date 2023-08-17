import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AchievementsCard from "../../Card/CarouselCard";

export const Card = styled(AchievementsCard)(({ theme }) => ({
	[theme.breakpoints.up("1921")]: {
		padding: "70px 85px 76px 50px",
		width: "350px",
	},
	[theme.breakpoints.up("xxl")]: {
		padding: "84px 94px 91px 60px",
		width: "400px",
	},
}));

export const Wraper = styled(Box)({
	margin: "auto 10px",
	width: "max-content",
	textAlign: "start",
});
