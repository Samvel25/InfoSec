import { styled } from "@mui/system";
import { Dialog, Button } from "@mui/material";

export const DarkDialog = styled(Dialog)({
	"& .MuiPaper-root": {
		backgroundColor: "#333",
		color: "#FFF",
	},
});

export const DarkButton = styled(Button)({
	color: "#FFF",
	"&.MuiButton-textPrimary": {
		color: "#90caf9",
	},
	"&.MuiButton-textSecondary": {
		color: "#f48fb1",
	},
});
