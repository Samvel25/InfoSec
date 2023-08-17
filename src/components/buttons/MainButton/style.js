import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const commonStyles = {
	content: '""',
	position: "absolute",
	inset: 0,
	zIndex: -1,
};

export const ButtonGradient = styled(Button)(
	({ theme, backgroundtype, cliptype }) => ({
		boxShadow: "none",

		display: "block",
		position: "relative",
		zIndex: 0,
		textDecoration: "none",
		padding: "14px 30px",
		minWidth: "140px",
		background: "transparent",
		"&:hover": {
			background: "none",
			boxShadow:
				"0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
		},
		"@keyframes shimmer": {
			"0%": {
				backgroundPosition: "-200% 0",
			},
			"100%": {
				backgroundPosition: "200% 0",
			},
		},

		"@keyframes fadeInMoveUp": {
			"0%": {
				opacity: 0.7,
				transform: "translateY(1px)",
			},
			"20%": {
				opacity: 1,
				transform: "translateY(0)",
			},
		},
		"&:hover:before": {
			backgroundImage: `
                linear-gradient(
                    120deg, 
                    transparent, 
                    rgba(255, 255, 255, 0.5), 
                    transparent
                ),
                ${
									backgroundtype === "backgroundOne"
										? "linear-gradient(45deg,#575757,#616161,#292929)"
										: "linear-gradient(45deg,#D42530,#F10413,#490005)"
								}`,
			backgroundSize: "200% 100%",
			animation: "shimmer 1.5s infinite",
		},
		"&:before": {
			...commonStyles,
			clipPath:
				cliptype === "smallOne"
					? "polygon(0 0,calc(100% - 10.00px) 0,100% 10.00px,100% 100%,10.00px 100%,0 calc(100% - 10.00px),0 0,1px  1px ,1px calc(100% - 10.00px - 0.41px),calc(10.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(10.00px + 0.41px),calc(100% - 10.00px - 0.41px) 1px,1px 1px)"
					: "polygon(0 0,calc(100% - 20.00px) 0,100% 20.00px,100% 100%,20.00px 100%,0 calc(100% - 20.00px),0 0,1px  1px ,1px calc(100% - 20.00px - 0.41px),calc(20.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(20.00px + 0.41px),calc(100% - 20.00px - 0.41px) 1px,1px 1px)",
			background:
				backgroundtype === "backgroundOne"
					? "linear-gradient(45deg,#575757,#616161,#292929)"
					: "linear-gradient(45deg,#D42530,#F10413,#490005)",
		},
		[theme.breakpoints.up("xl")]: {
			padding: "18px 40px",
			"&:before": {
				...commonStyles,
				clipPath:
					cliptype === "smallOne"
						? "polygon(0 0,calc(100% - 13.00px) 0,100% 13.00px,100% 100%,13.00px 100%,0 calc(100% - 13.00px),0 0,1px  1px ,1px calc(100% - 13.00px - 0.41px),calc(13.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(13.00px + 0.41px),calc(100% - 13.00px - 0.41px) 1px,1px 1px)"
						: "polygon(0 0,calc(100% - 25.00px) 0,100% 25.00px,100% 100%,25.00px 100%,0 calc(100% - 25.00px),0 0,1px  1px ,1px calc(100% - 25.00px - 0.41px),calc(25.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(25.00px + 0.41px),calc(100% - 25.00px - 0.41px) 1px,1px 1px)",
			},
		},
		[theme.breakpoints.up("xxl")]: {
			padding: "25px 56px",
			"&:before": {
				...commonStyles,
				clipPath:
					cliptype === "smallOne"
						? "polygon(0 0,calc(100% - 15.00px) 0,100% 15.00px,100% 100%,15.00px 100%,0 calc(100% - 15.00px),0 0,1px  1px ,1px calc(100% - 15.00px - 0.41px),calc(15.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(15.00px + 0.41px),calc(100% - 15.00px - 0.41px) 1px,1px 1px)"
						: "polygon(0 0,calc(100% - 30.00px) 0,100% 30.00px,100% 100%,30.00px 100%,0 calc(100% - 30.00px),0 0,1px  1px ,1px calc(100% - 30.00px - 0.41px),calc(30.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(30.00px + 0.41px),calc(100% - 30.00px - 0.41px) 1px,1px 1px)",
			},
		},
		"&:hover > *": {
			animation: "fadeInMoveUp 1.5s infinite",
		},
	})
);
