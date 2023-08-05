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

function LanguageDropdown() {
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

export default LanguageDropdown;
