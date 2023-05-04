import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "inline-block",
		position: "relative",
		zIndex: 0,
		textDecoration: "none",
		// padding: "20px auto",

		"&:before": {
			content: '""',
			position: "absolute",
			inset: 0,
			zIndex: -1,
			background: "linear-gradient(45deg,#D42530,#F10413,#490005)",
			clipPath:
				"polygon(0 0,calc(100% - 20.00px) 0,100% 20.00px,100% 100%,20.00px 100%,0 calc(100% - 20.00px),0 0,1px  1px ,1px calc(100% - 20.00px - 0.41px),calc(20.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(20.00px + 0.41px),calc(100% - 20.00px - 0.41px) 1px,1px 1px)",
		},
		"&:hover": {
			background: "none",
		},
	},
}));

function CustomButton(props) {
	const classes = useStyles(props.type);

	return (
		<Button
			className={classes.root}
			sx={{ p: "10px 24px" }}
			classes={{ root: classes.root }}
			variant="contained"
			color="primary"
			{...props}
		/>
	);
}
export default CustomButton;
