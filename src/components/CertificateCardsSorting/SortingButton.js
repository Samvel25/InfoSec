// import React from "react";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/system";
// import GradientButton from "../Buttons";

// const ActiveButton = styled(GradientButton)(({ theme }) => ({
// 	// color: theme.palette.getContrastText("#ff0000"),
// 	// backgroundColor: "#ff0000",
// 	// "&:hover": {
// 	// 	backgroundColor: "#ff0000",
// 	// },
// }));

// const SortingButton = ({ onClick, activeSort }) => {
// 	return (
// 		<div>
// 			<ActiveButton
// 				onClick={() => onClick("id1")}
// 				disabled={activeSort === "id1"}
// 			>
// 				Sort ID 1
// 			</ActiveButton>
// 			<ActiveButton
// 				onClick={() => onClick("id2")}
// 				disabled={activeSort === "id2"}
// 			>
// 				Sort ID 2
// 			</ActiveButton>
// 		</div>
// 	);
// };

// export default SortingButton;

import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import GradientButton from "../Buttons";
import { blue, red, grey } from "@mui/material/colors";
import { Grid } from "@mui/material";

const ActiveButton = styled(GradientButton)(({ theme, disabled }) => ({
	// Add your button styling here
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
			<Grid item xs={1.5}>
				<ActiveButton
					backgroundtype="backgroundOne"
					onClick={() => onClick("all")}
					disabled={activeSort === "all"}
				>
					All
				</ActiveButton>
			</Grid>
			<Grid item xs={1.5}>
				<ActiveButton
					backgroundtype="backgroundOne"
					onClick={() => onClick("id1")}
					disabled={activeSort === "id1"}
				>
					Sort ID 1
				</ActiveButton>
			</Grid>
			<Grid item xs={1.5}>
				<ActiveButton
					backgroundtype="backgroundOne"
					onClick={() => onClick("id2")}
					disabled={activeSort === "id2"}
				>
					Sort ID 2
				</ActiveButton>
			</Grid>
		</Grid>
	);
};

export default SortingButton;
