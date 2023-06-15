import React, { useState } from "react";
import { Typography, Hidden } from "@mui/material";
import { ReactComponent as Language } from "../../media/language.svg";
import { Stack } from "@mui/system";
import GradientButton from "../Buttons";
import * as Styled from "./style";

function DropdownButton() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedLanguage, setSelectedLanguage] = useState("eng");
	const [activeLanguage, setActiveLanguage] = useState("eng");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget);
		setIsMenuOpen(true);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
		setIsMenuOpen(false);
	};

	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
		setActiveLanguage(language);
		handleCloseMenu();
	};

	return (
		<>
			<Hidden mdDown>
				<GradientButton onClick={handleOpenMenu} backgroundtype="backgroundOne">
					<Stack
						direction={"row"}
						spacing={1}
						alignItems="center"
						justifyContent={"center"}
					>
						<Language />
						<Typography>{selectedLanguage}</Typography>
						<Styled.StyledArrowDown isOpen={isMenuOpen} />
					</Stack>
				</GradientButton>
			</Hidden>
			<Hidden mdUp>
				<Stack
					sx={{ cursor: "pointer" }}
					onClick={handleOpenMenu}
					direction={"row"}
					spacing={1}
					alignItems="center"
					justifyContent={"center"}
				>
					<Typography>{selectedLanguage.toUpperCase()}</Typography>
					<Styled.StyledArrowDown isOpen={isMenuOpen} />
				</Stack>
			</Hidden>
			<Styled.StyledMenu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				transformOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<Styled.StyledMenuItem
					isActive={activeLanguage === "eng"}
					onClick={() => handleLanguageChange("eng")}
				>
					<Typography>English</Typography>
				</Styled.StyledMenuItem>
				<Styled.StyledMenuItem
					isActive={activeLanguage === "հայ"}
					onClick={() => handleLanguageChange("հայ")}
				>
					<Typography>Հայերեն</Typography>
				</Styled.StyledMenuItem>
				<Styled.StyledMenuItem
					isActive={activeLanguage === "рус"}
					onClick={() => handleLanguageChange("рус")}
				>
					<Typography>Русский</Typography>
				</Styled.StyledMenuItem>
			</Styled.StyledMenu>
		</>
	);
}

export default DropdownButton;
// border: "10px solid transparent",
// borderImageSlice: 1,
// borderImage: "linear-gradient(45deg, #575757, #616161, #292929)",

// "&:before": {
// 	content: '""',
// 	position: "absolute",
// 	top: 0,
// 	left: 0,
// 	width: "100%",
// 	height: "100%",

// 	// backgroundImage: "conic-gradient(black 28%, #490005, #F10413, #D42530)",
// 	// animation: `${Animation} 1.5s infinite`,
// 	// backgroundImage:
// 	// 	"radial-gradient(farthest-corner, black 50%, #490005, #F10413, #D42530)",
// 	zIndex: 1,
// 	filter: "blur(15px)",
// },

// 0% {
//   background-image: conic-gradient(black 20%, #490005, #F10413, #D42530);
// }

// 10% {
//   background-image: conic-gradient(black 32%, #490005, #F10413, #D42530);
// }

// 20% {
//   background-image: conic-gradient(black 40%, #490005, #F10413, #D42530);
// }

// 30% {
//   background-image: conic-gradient(black 44%, #490005, #F10413, #D42530);
// }

// 40% {
//   background-image: conic-gradient(black 45%, #490005, #F10413, #D42530);
// }

// 50% {
//   background-image: conic-gradient(black 40%, #490005, #F10413, #D42530);
// }

// 60% {
//   background-image: conic-gradient(black 35%, #490005, #F10413, #D42530);
// }

// 70% {
//   background-image: conic-gradient(black 32%, #490005, #F10413, #D42530);
// }

// 80% {
//   background-image: conic-gradient(black 29%, #490005, #F10413, #D42530);
// }

// 90% {
//   background-image: conic-gradient(black 26%, #490005, #F10413, #D42530);
// }

// 100% {
// 	background-image: conic-gradient(black 23%, #490005, #F10413, #D42530);

// }

// const Animation = keyframes`
// 0% {
//   background-image: radial-gradient(farthest-corner, black 70%, #490005, #F10413, #D42530);
// }

// 5% {
//   background-image: radial-gradient(farthest-corner, black 67%, #490005, #F10413, #D42530);
// }

// 10% {
//   background-image: radial-gradient(farthest-corner, black 65%, #490005, #F10413, #D42530);
// }

// 15% {
//   background-image: radial-gradient(farthest-corner, black 62%, #490005, #F10413, #D42530);
// }

// 20% {
//   background-image: radial-gradient(farthest-corner, black 60%, #490005, #F10413, #D42530);
// }

// 25% {
//   background-image: radial-gradient(farthest-corner, black 57%, #490005, #F10413, #D42530);
// }

// 30% {
//   background-image: radial-gradient(farthest-corner, black 55%, #490005, #F10413, #D42530);
// }

// 35% {
//   background-image: radial-gradient(farthest-corner, black 52%, #490005, #F10413, #D42530);
// }

// 40% {
//   background-image: radial-gradient(farthest-corner, black 50%, #490005, #F10413, #D42530);
// }

// 45% {
//   background-image: radial-gradient(farthest-corner, black 47%, #490005, #F10413, #D42530);
// }

// 50% {
//   background-image: radial-gradient(farthest-corner, black 46%, #490005, #F10413, #D42530);
// }

// 55% {
//   background-image: radial-gradient(farthest-corner, black 45%, #490005, #F10413, #D42530);
// }

// 60% {
//   background-image: radial-gradient(farthest-corner, black 47%, #490005, #F10413, #D42530);
// }

// 65% {
//   background-image: radial-gradient(farthest-corner, black 50%, #490005, #F10413, #D42530);
// }

// 72% {
//   background-image: radial-gradient(farthest-corner, black 55%, #490005, #F10413, #D42530);
// }

// 77% {
//   background-image: radial-gradient(farthest-corner, black 58%, #490005, #F10413, #D42530);
// }

// 84% {
//   background-image: radial-gradient(farthest-corner, black 63%, #490005, #F10413, #D42530);
// }

// 90% {
//   background-image: radial-gradient(farthest-corner, black 68%, #490005, #F10413, #D42530);
// }

// 97% {
//   background-image: radial-gradient(farthest-corner, black 72%, #490005, #F10413, #D42530);
// }

// 100% {
//   background-image: radial-gradient(farthest-corner, black 70%, #490005, #F10413, #D42530);

// `;
