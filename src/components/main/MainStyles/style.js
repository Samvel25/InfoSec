import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Lazer = styled("div")({
	position: "absolute",
	top: "48%",
	left: "8px",
	width: "100px",
	height: "2px",
	transform: "translateY(-50%)",
	backgroundColor: "#fff",
	borderRadius: "20px",
	content: '""',
	transition: "opacity 0.3s ease-out",
	cursor: "pointer",
	margin: "auto",

	boxShadow:
		"0 0 4px 2px rgba(212, 37, 48, 0.8), " +
		"0 0 8px 4px rgba(212, 37, 48, 0.6), " +
		"0 0 12px 6px rgba(212, 37, 48, 0.4), " +
		"0 0 16px 8px rgba(241, 4, 19, 0.8), " +
		"0 0 20px 10px rgba(241, 4, 19, 0.6), " +
		"0 0 24px 12px rgba(73, 0, 5, 0.8), " +
		"0 0 28px 14px rgba(73, 0, 5, 0.6)",
	"&:hover": {},
	"@keyframes pulse": {
		"0%": {
			width: "100px",
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
			width: "180px",
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
			width: "100px",
			boxShadow:
				"0 0 4px 2px rgba(212, 37, 48, 0.8), " +
				"0 0 8px 4px rgba(212, 37, 48, 0.6), " +
				"0 0 12px 6px rgba(212, 37, 48, 0.4), " +
				"0 0 16px 8px rgba(241, 4, 19, 0.8), " +
				"0 0 20px 10px rgba(241, 4, 19, 0.6), " +
				"0 0 24px 12px rgba(73, 0, 5, 0.8), " +
				"0 0 28px 14px rgba(73, 0, 5, 0.6)",
		},
	},
});

export const MyBox = styled("div")(`
	margin-bottom: 20px;
	position: relative;
	&:hover > div:first-child {
		animation: pulse 1.5s infinite;
	}
`);

export const MyLine = styled("span")({
	height: "18px",
	width: "0",
	background: "#3C3C3C",
	marginRight: "6.8px",
	borderLeft: "1px solid #3C3C3C",
});

export const WhyChooseUs = styled(Grid)({
	padding: "100px 0",
	// borderBottom: "0.899933px solid rgba(255, 255, 255, 0.1)",
});
