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
			"--g1": "#000 var(--b), #0000 0 calc(100% - var(--b)), #000 0",

			clipPath:
				"polygon(0 0,calc(100% - 20.00px) 0,100% 20.00px,100% 100%,20.00px 100%,0 calc(100% - 20.00px),0 0,2px  2px ,2px calc(100% - 20.00px - 0.83px),calc(20.00px + 0.83px) calc(100% - 2px),calc(100% - 2px) calc(100% - 2px),calc(100% - 2px) calc(20.00px + 0.83px),calc(100% - 20.00px - 0.83px) 2px,2px 2px)",
		},
		"&:hover": {
			background: "none",
		},
	},
}));

export default function CustomButton(props) {
	const classes = useStyles();

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

// "--g2": `#0000 calc(0.707 * var(--s)),
//          #000 0 calc(0.707 * var(--s) + var(--b)),
//          #0000 0 calc(100% - 0.707 * var(--s) - var(--b)),
//          #000 0 calc(100% - 0.707 * var(--s)),
//          #0000 0`,
// WebkitMask: `linear-gradient(45deg, var(--g2)),
//              linear-gradient(-45deg, var(--g2)),
//              linear-gradient(90deg, var(--g1)) 50%/100% calc(100% - 2 * var(--s)) no-repeat,
//              linear-gradient(180deg, var(--g1)) 50%/calc(100% - 2 * var(--s)) 100% no-repeat`,
