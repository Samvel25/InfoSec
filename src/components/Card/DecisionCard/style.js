import CarouselCard from "../CarouselCard";
import { styled, keyframes } from "@mui/system";
import { Typography } from "@mui/material";

const expandAnimation = keyframes`
0% {
  box-shadow: 0 0 4px 2px rgba(212, 37, 48, 0.8), 0 0 8px 4px rgba(212, 37, 48, 0.6),  0 0 12px 6px rgba(212, 37, 48, 0.4), 0 0 16px 8px rgba(241, 4, 19, 0.8), 0 0 20px 10px rgba(241, 4, 19, 0.6), 0 0 24px 12px rgba(73, 0, 5, 0.8), 0 0 28px 14px rgba(73, 0, 5, 0.6);
}

30% {
  box-shadow: 0 0 6px 4px rgba(212, 37, 48, 0.4), 0 0 12px 8px rgba(212, 37, 48, 0.3), 0 0 18px 12px rgba(212, 37, 48, 0.2), 0 0 24px 16px rgba(241, 4, 19, 0.4), 0 0 30px 20px rgba(241, 4, 19, 0.3), 0 0 36px 24px rgba(73, 0, 5, 0.4), 0 0 42px 28px rgba(73, 0, 5, 0.6);
}
100% {
  box-shadow: 0 0 4px 2px rgba(212, 37, 48, 0.8), 0 0 8px 4px rgba(212, 37, 48, 0.6), 0 0 12px 6px rgba(212, 37, 48, 0.4), 0 0 16px 8px rgba(241, 4, 19, 0.8), 0 0 20px 10px rgba(241, 4, 19, 0.6), 0 0 24px 12px rgba(73, 0, 5, 0.8), 0 0 28px 14px rgba(73, 0, 5, 0.6);
}
`;

export const RedCard = styled(CarouselCard)(({ theme }) => ({
	width: "100%",
	padding: "52px 52px 80px 60px",
	transformstyle: "preserve-3d",
	"&:after": {
		clipPath:
			"polygon(0 0,calc(100% - 16.00px) 0,100% 16.00px,100% 100%,16.00px 100%,0 calc(100% - 16.00px))",
		background: "linear-gradient(83.59deg, #D42530 6.05%, #490005 201.78%)",
	},
	"& sh": {
		position: "absolute",
		inset: "-40px",
		border: "40px solid #0000",
		borderBottomLeftRadius: "70px",
		borderTopRightRadius: "65px",
		WebkitMask:
			"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
		WebkitMaskComposite: "xor",
		maskComposite: "exclude",
		transform: "translateZ(-1px)",
		pointerEvents: "none",
	},
	"& sh:before": {
		content: '""',
		position: "absolute",
		inset: "23px",
		boxShadow:
			"0 0 4px 2px rgba(212, 37, 48, 1.0), " +
			"0 0 8px 4px rgba(73, 0, 5, 1.0), " +
			"0 0 12px 6px rgba(212, 37, 48, 0.4), " +
			"0 0 16px 8px rgba(241, 4, 19, 0.8), " +
			"0 0 20px 10px rgba(241, 4, 19, 0.6), " +
			"0 0 24px 12px rgba(73, 0, 5, 0.8), " +
			"0 0 28px 14px rgba(73, 0, 5, 0.6)",
		// background: "conic-gradient(#D42530 100%, #490005 100%)",
		filter: "blur(14px)",
		transform: "translate(0px, 12px)",
	},
	"&:hover sh:before": {
		animation: `${expandAnimation} 1.5s infinite`,
	},
	[theme.breakpoints.down(1250)]: {
		padding: "52px 52px 80px 20px",
	},
	[theme.breakpoints.down("md")]: {
		padding: "52px 52px 80px 60px",
	},
	[theme.breakpoints.down(700)]: {
		padding: "52px 52px 80px 20px",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "52px 52px 80px 60px",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "52px 52px 80px 25px",
	},
	[theme.breakpoints.up("xl")]: {
		padding: "57px 1px 87px 67px",
	},
	[theme.breakpoints.up("xxl")]: {
		padding: "62px 1px 92px 72px",
	},
}));

export const Card = styled(CarouselCard)(({ theme }) => ({
	width: "100%",
	padding: "52px 52px 80px 60px",

	[theme.breakpoints.down(1250)]: {
		padding: "52px 52px 80px 20px",
	},
	[theme.breakpoints.down("md")]: {
		padding: "52px 52px 80px 60px",
	},
	[theme.breakpoints.down(700)]: {
		padding: "52px 52px 80px 20px",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "52px 52px 80px 60px",
	},
	[theme.breakpoints.up("xl")]: {
		padding: "57px 1px 87px 67px",
	},

	[theme.breakpoints.up("xxl")]: {
		padding: "62px 1px 92px 72px",
	},
	// [theme.breakpoints.down("xs")]: {
	// 	padding: "52px 52px 80px 25px",
	// },
}));

export const Text = styled(Typography)(({ theme }) => ({
	color: "#F2F2F2",
	textTransform: "uppercase",

	// [theme.breakpoints.up("md")]: {
	// 	minWidth: "400px",
	// },
}));
