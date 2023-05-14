import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// import { keyframes } from "@mui/system";

export const boxShadow1 = {
	"0%": {
		boxShadow:
			"0 0 4px 2px rgba(87, 87, 87, 0.8), " +
			"0 0 8px 4px rgba(97, 97, 97, 0.6), " +
			"0 0 12px 6px rgba(41, 41, 41, 0.4), " +
			"0 0 16px 8px rgba(87, 87, 87, 0.8), " +
			"0 0 20px 10px rgba(97, 97, 97, 0.6), " +
			"0 0 24px 12px rgba(41, 41, 41, 0.8), " +
			"0 0 28px 14px rgba(41, 41, 41, 0.6)",
	},

	"30%": {
		boxShadow:
			"0 0 6px 4px rgba(87, 87, 87, 0.8), " +
			"0 0 12px 8px rgba(97, 97, 97, 0.6), " +
			"0 0 18px 12px rgba(41, 41, 41, 0.4), " +
			"0 0 24px 16px rgba(87, 87, 87, 0.8), " +
			"0 0 30px 20px rgba(97, 97, 97, 0.6), " +
			"0 0 36px 24px rgba(41, 41, 41, 0.8), " +
			"0 0 42px 28px rgba(41, 41, 41, 0.6)",
	},
	"100%": {
		boxShadow:
			"0 0 4px 2px rgba(87, 87, 87, 0.8), " +
			"0 0 8px 4px rgba(97, 97, 97, 0.6), " +
			"0 0 12px 6px  rgba(41, 41, 41, 0.4), " +
			"0 0 16px 8px  rgba(87, 87, 87, 0.8), " +
			"0 0 20px 10px rgba(97, 97, 97, 0.6), " +
			"0 0 24px 12px rgba(41, 41, 41, 0.8), " +
			"0 0 28px 14px rgba(41, 41, 41, 0.6)",
	},
};

export const boxShadow2 = {
	"0%": {
		boxShadow:
			"0 0 4px 2px rgba(212, 37, 48, 0.8), " +
			"0 0 8px 4px rgba(212, 37, 48, 0.6), " +
			"0 0 12px 6px rgba(212, 37, 48, 0.4), " +
			"0 0 16px 8px rgba(241, 4, 19, 0.8), " +
			"0 0 20px 10px rgba(241, 4, 19, 0.6), " +
			"0 0 24px 12px rgba(73, 0, 5, 0.8), " +
			"0 0 28px 14px rgba(73, 0, 5, 0.6)",
	},

	"30%": {
		boxShadow:
			"0 0 6px 4px rgba(212, 37, 48, 0.4), " +
			"0 0 12px 8px rgba(212, 37, 48, 0.3), " +
			"0 0 18px 12px rgba(212, 37, 48, 0.2), " +
			"0 0 24px 16px rgba(241, 4, 19, 0.4), " +
			"0 0 30px 20px rgba(241, 4, 19, 0.3), " +
			"0 0 36px 24px rgba(73, 0, 5, 0.4), " +
			"0 0 42px 28px rgba(73, 0, 5, 0.6)",
	},
	"100%": {
		boxShadow:
			"0 0 4px 2px rgba(212, 37, 48, 0.8), " +
			"0 0 8px 4px rgba(212, 37, 48, 0.6), " +
			"0 0 12px 6px rgba(212, 37, 48, 0.4), " +
			"0 0 16px 8px rgba(241, 4, 19, 0.8), " +
			"0 0 20px 10px rgba(241, 4, 19, 0.6), " +
			"0 0 24px 12px rgba(73, 0, 5, 0.8), " +
			"0 0 28px 14px rgba(73, 0, 5, 0.6)",
	},
};
const Led = styled(Box)(({ theme, ledtype }) => {
	return {
		position: "absolute",
		bottom: "0",
		left: "50%",
		width: "100px",
		height: "2px",
		transform: "translate(-50%, -50%)",
		backgroundColor: "#fff",
		borderRadius: "20px",
		content: '""',
		margin: "auto",
		// padding: "20px 20px",

		boxShadow:
			ledtype === "ledOne"
				? "0 0 4px 2px rgba(87, 87, 87, 0.8), " +
				  "0 0 8px 4px rgba(97, 97, 97, 0.6), " +
				  "0 0 12px 6px rgba(41, 41, 41, 0.4), " +
				  "0 0 16px 8px rgba(87, 87, 87, 0.8), " +
				  "0 0 20px 10px rgba(97, 97, 97, 0.6), " +
				  "0 0 24px 12px rgba(41, 41, 41, 0.8), " +
				  "0 0 28px 14px rgba(41, 41, 41, 0.6)"
				: "0 0 4px 2px rgba(212, 37, 48, 0.8), " +
				  "0 0 8px 4px rgba(212, 37, 48, 0.6), " +
				  "0 0 12px 6px rgba(212, 37, 48, 0.4), " +
				  "0 0 16px 8px rgba(241, 4, 19, 0.8), " +
				  "0 0 20px 10px rgba(241, 4, 19, 0.6), " +
				  "0 0 24px 12px rgba(73, 0, 5, 0.8), " +
				  "0 0 28px 14px rgba(73, 0, 5, 0.6)",
	};
});

function LedLine(props) {
	const { ledtype } = props;
	return <Led ledtype={ledtype} {...props}></Led>;
}

export default LedLine;
