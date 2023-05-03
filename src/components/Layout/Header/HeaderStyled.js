import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	navBar: {
		display: "flex",
		alignItems: "center",
	},
	navLink: {
		color: "#ffffff",
		textDecoration: "none",
		padding: "0 20px",
		"&:hover": {
			color: theme.palette.secondary.main,
		},
	},
}));
