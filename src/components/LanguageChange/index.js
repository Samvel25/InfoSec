import React, { useState } from "react";
import { Typography, Hidden } from "@mui/material";
import { Stack } from "@mui/system";
import GradientButton from "../Buttons/MainButton";
import * as Styled from "./style";
import CustomHidden from "../Hidden";
import CheckDoneIcon from "@mui/icons-material/Done";
import { ReactComponent as ArmenianFlag } from "../../media/svg/LanguageFlag/armenianFlag.svg";
import { ReactComponent as RussianFlag } from "../../media/svg/LanguageFlag/russianFlag.svg";
import { ReactComponent as UKFlag } from "../../media/svg/LanguageFlag/ukFlag.svg";

function DropdownButton() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedLanguage, setSelectedLanguage] = useState("eng");
	const [activeLanguage, setActiveLanguage] = useState("eng");
	const [ismenuopen, setismenuopen] = useState(false);

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget);
		setismenuopen(true);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
		setismenuopen(false);
	};

	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
		setActiveLanguage(language);
		handleCloseMenu();
	};

	return (
		<>
			<CustomHidden breakpoint="md" down>
				<GradientButton onClick={handleOpenMenu} backgroundtype="backgroundOne">
					<Stack
						direction={"row"}
						spacing={1}
						alignItems="center"
						justifyContent={"center"}
					>
						<Styled.LanguageImg />
						<Typography>{selectedLanguage}</Typography>
						<Styled.StyledArrowDown isopen={ismenuopen} />
					</Stack>
				</GradientButton>
			</CustomHidden>
			<CustomHidden breakpoint="md" up>
				<Stack
					sx={{ cursor: "pointer" }}
					onClick={handleOpenMenu}
					direction={"row"}
					spacing={1}
					alignItems="center"
					justifyContent={"center"}
				>
					<Typography>{selectedLanguage.toUpperCase()}</Typography>
					<Styled.StyledArrowDown isopen={ismenuopen} />
				</Stack>
			</CustomHidden>
			<Styled.StyledMenu
				spacing={2}
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
					<Stack alignItems={"center"} direction={"row"}>
						<UKFlag width={"32px"} height={"32px"} />

						<Typography>English</Typography>
					</Stack>
					{activeLanguage === "eng" && <CheckDoneIcon />}
				</Styled.StyledMenuItem>

				<Styled.StyledMenuItem
					isActive={activeLanguage === "rus"}
					onClick={() => handleLanguageChange("rus")}
				>
					<Stack alignItems={"center"} direction={"row"}>
						<RussianFlag width={"32px"} height={"32px"} />
						<Typography>Russian</Typography>
					</Stack>

					{activeLanguage === "rus" && <CheckDoneIcon />}
				</Styled.StyledMenuItem>

				<Styled.StyledMenuItem
					isActive={activeLanguage === "arm"}
					onClick={() => handleLanguageChange("arm")}
				>
					<Stack alignItems={"center"} direction={"row"}>
						<ArmenianFlag width={"32px"} height={"32px"} />

						<Typography>Armenian</Typography>
					</Stack>

					{activeLanguage === "arm" && <CheckDoneIcon />}
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
