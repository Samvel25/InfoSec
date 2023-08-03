import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import * as Styled from "./style";
import pdfFile from "../../../media/pdf/sample.pdf";

const CardItem = ({ title, content, certificateimg, className }) => {
	return (
		<Styled.SortingCard className={className}>
			<Box sx={{ width: "100%", textAlign: "center" }}>
				<Styled.CertificateImg src={certificateimg} alt="Certificate" />
			</Box>
			<Stack
				flexDirection={"row"}
				sx={{ mb: "40px", width: "100%" }}
				justifyContent={"space-between"}
			>
				<Typography
					variant="CardHead"
					component={"h5"}
					sx={{ mb: "0", textTransform: "uppercase" }}
				>
					{title}
				</Typography>

				{/* <GradientButton
					cliptype="smallOne"
					sx={{ padding: "0 17px", minWidth: "0", mt: "0" }}
				>
					<ul></ul>
					<ul></ul>
					<Typography variant="ButtonNew" component={"a"}>
						new
					</Typography>
				</GradientButton> */}
			</Stack>
			<Typography
				variant="CardDescription"
				component={"p"}
				sx={{ mb: "50px", textTransform: "none" }}
			>
				{content}
			</Typography>
			<Styled.Button
				onClick={() => window.open(pdfFile)}
				backgroundtype="backgroundOne"
				sx={{ padding: "14px auto", mt: "0", width: "100%" }}
			>
				<pre></pre>
				<pre></pre>
				<Styled.ButtonText variant="ButtonNew" component={"a"}>
					dOWNLOAD <Typography component={"a"}>PDF</Typography>
				</Styled.ButtonText>
			</Styled.Button>
		</Styled.SortingCard>
	);
};

export default CardItem;
