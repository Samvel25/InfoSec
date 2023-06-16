import React from "react";
import { Grid } from "@mui/material";
import * as Styled from "./style";

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
					<Styled.ActiveButton
						backgroundtype="backgroundOne"
						onClick={() => onClick(sort)}
						disabled={activeSort === sort}
					>
						{sort.toUpperCase()}
					</Styled.ActiveButton>
				</Grid>
			))}
		</Grid>
	);
};

export default SortingButton;
