import GradientButton from "../../Buttons/MainButton";
import { styled } from "@mui/system";

export const ActiveButton = styled(GradientButton)(({ theme, disabled }) => ({
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
