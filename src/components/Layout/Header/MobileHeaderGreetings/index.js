import * as React from "react";
import { Stack, Typography } from "@mui/material";
import CustomHidden from "../../../Hidden";

const Greatings = () => {
	return (
		<CustomHidden breakpoint="sm" up>
			<Stack
				direction={"row"}
				justifyContent={"center"}
				sx={{ height: "35px", width: "100%", background: "#1F1F1F" }}
			>
				<Typography sx={{ color: "#D9D9D9", py: "5px" }}>
					Welcome to Infosec LLC
				</Typography>
			</Stack>
		</CustomHidden>
	);
};

export default Greatings;
