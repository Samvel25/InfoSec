import { GoogleMap } from "@react-google-maps/api";
import { styled } from "@mui/material/styles";

export const Maps = styled(GoogleMap)(({ theme }) => ({
	height: "400px",
	[theme.breakpoints.up("xl")]: {
		height: "600px",
	},
}));
