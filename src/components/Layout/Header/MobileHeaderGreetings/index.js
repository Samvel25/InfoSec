import * as React from "react";
import { Hidden, Stack, Typography } from "@mui/material";

const Greeatings = () => {
	return (
		<Hidden smUp>
			<Stack
				direction={"row"}
				justifyContent={"center"}
				sx={{ height: "50px", width: "100%", background: "#1F1F1F" }}
			>
				<Typography sx={{ color: "#D9D9D9", py: "5px" }}>
					Welcome to Infosec LLC
				</Typography>
			</Stack>
		</Hidden>
	);
};

export default Greeatings;
