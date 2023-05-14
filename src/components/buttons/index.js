import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

const commonStyles = {
	content: '""',
	position: "absolute",
	inset: 0,
	zIndex: -1,
	clipPath:
		"polygon(0 0,calc(100% - 20.00px) 0,100% 20.00px,100% 100%,20.00px 100%,0 calc(100% - 20.00px),0 0,1px  1px ,1px calc(100% - 20.00px - 0.41px),calc(20.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(20.00px + 0.41px),calc(100% - 20.00px - 0.41px) 1px,1px 1px)",
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: "block",
		position: "relative",
		zIndex: 0,
		textDecoration: "none",
		padding: "10px 23px",
		minWidth: "140px",
		"&:hover": {
			background: "none",
		},
	},
	backgroundOne: {
		"&:before": {
			...commonStyles,
			background: "linear-gradient(45deg,#575757,#616161,#292929)",
		},
	},
	backgroundTwo: {
		"&:before": {
			...commonStyles,
			background: "linear-gradient(45deg,#D42530,#F10413,#490005)",
		},
	},
}));

function GradientButton(props) {
	const classes = useStyles();

	return (
		<Button
			className={`${classes.root} ${
				props.backgroundtype === "backgroundOne"
					? classes.backgroundOne
					: classes.backgroundTwo
			}`}
			// sx={{ p: "10px 23px" }}
			variant="contained"
			color="primary"
			{...props}
		/>
	);
}

export default GradientButton;
