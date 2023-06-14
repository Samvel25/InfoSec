import React from "react";
import GradientButton from "../Buttons";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

const ActiveButton = styled(GradientButton)(({ theme, disabled }) => ({
	padding: "auto !important",
	"&.Mui-disabled": {
		color: "#fff",
		"&:before": {
			background: "linear-gradient(45deg,#D42530,#F10413,#490005)",
		},
	},
}));

const SortingButton = ({ onClick, activeSort }) => {
	return (
		<Grid container justifyContent={"center"} spacing={2}>
			{["all", "FINANCE", "INSURANCE"].map((sort) => (
				<Grid item lg={1.5} key={sort}>
					<ActiveButton
						backgroundtype="backgroundOne"
						onClick={() => onClick(sort)}
						disabled={activeSort === sort}
					>
						{sort.toUpperCase()}
					</ActiveButton>
				</Grid>
			))}
		</Grid>
	);
};

export default SortingButton;
