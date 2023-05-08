import { makeStyles } from "@material-ui/core/styles";

export const grayButton = makeStyles((theme) => ({
	button: {
		"&:before": {
			background: "linear-gradient(45deg,#575757,#616161,#292929)",
		},
	},
}));
