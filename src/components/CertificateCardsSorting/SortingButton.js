import React from "react";
import GradientButton from "../Buttons";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

const ActiveButton = styled(GradientButton)(({ theme, disabled }) => ({
	width: "100%",
	"&.Mui-disabled": {
		color: "#fff",
		"&:before": {
			background: "linear-gradient(45deg,#D42530,#F10413,#490005)",
		},
		[theme.breakpoints.down("sm")]: {
			padding: "14px 5px !important",
			minWidth: "105px",
		},
	},
}));

const SortingButton = ({ onClick, activeSort }) => {
	return (
		<Grid
			container
			justifyContent={"center"}
			spacing={2}
			sx={{ m: "16px auto 0", width: { xs: "100%", md: "80%" } }}
		>
			{["all", "FINANCE", "INSURANCE"].map((sort) => (
				<Grid item lg={2} key={sort}>
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
