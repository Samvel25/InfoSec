import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const useStyles = makeStyles((theme) => ({
	navBar: {
		display: "flex",
		alignItems: "center",
	},
	navLink: {
		textTransform: "uppercase",
		textDecoration: "none",
		padding: "0 20px",

		"&:hover": {
			color: theme.palette.secondary.main,
		},
	},
}));

export const Header = styled(AppBar)(`

	border-bottom: 1px solid rgba(255, 255, 255, 0.1);

`);
