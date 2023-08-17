import React from "react";
// import Styled.Card from "../../Card/CarouselCard";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LedLine from "../../../Other/Led";
import * as Styled from "./style";

const CardItem = ({ title, greating, headText, className }) => {
	return (
		<Styled.Wraper className={className}>
			<Styled.Card backgroundtype="backgroundOne" ledtype="ledOne">
				<LedLine ledtype="ledOne" />
				<Typography sx={{ mb: "10px" }}>{headText}</Typography>
				<Box sx={{ display: "flex", width: "max-content" }}>
					<Typography variant="CardRate" component={"h6"}>
						{greating}
					</Typography>
					<Typography
						sx={{
							ml: "10px",
							maxWidth: { xs: "140px", xl: "160px", xxl: "190px" },
							lineHeight: "14px",
						}}
					>
						{title}
					</Typography>
				</Box>
			</Styled.Card>
		</Styled.Wraper>
	);
};

export default CardItem;
