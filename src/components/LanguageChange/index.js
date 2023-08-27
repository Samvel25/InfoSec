import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import GradientButton from "../Buttons/MainButton";
import * as Styled from "./style";
import CustomHidden from "../Hidden";
import CheckDoneIcon from "@mui/icons-material/Done";
import { useTranslation } from "react-i18next";

function LanguageDropdown() {
	const { i18n } = useTranslation();
	const [anchorEl, setAnchorEl] = useState(null);
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
		i18n.changeLanguage(language);
		localStorage.setItem("i18nLanguage", language);
		handleCloseMenu();
	};

	const currentLanguage = i18n.language;

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
						<Typography>{currentLanguage}</Typography>
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
					<Typography>{currentLanguage.toUpperCase()}</Typography>
					<Styled.StyledArrowDown isopen={ismenuopen} />
				</Stack>
			</CustomHidden>
			<Styled.StyledMenu
				sx={{ pb: "0" }}
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				transformOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<Styled.StyledMenuItem
					isActive={currentLanguage === "en"}
					onClick={() => handleLanguageChange("en")}
				>
					<Stack alignItems={"center"} direction={"row"}>
						<Typography sx={{ textTransform: "uppercase" }}>eng</Typography>
					</Stack>
					{currentLanguage === "en" && (
						<CheckDoneIcon sx={{ color: "#D42530", width: "15%" }} />
					)}
				</Styled.StyledMenuItem>

				<Styled.StyledMenuItem
					isActive={currentLanguage === "ru"}
					onClick={() => handleLanguageChange("ru")}
				>
					<Stack alignItems={"center"} direction={"row"}>
						<Typography sx={{ textTransform: "uppercase" }}>rus</Typography>
					</Stack>
					{currentLanguage === "ru" && (
						<CheckDoneIcon sx={{ color: "#D42530", width: "15%" }} />
					)}
				</Styled.StyledMenuItem>

				<Styled.StyledMenuItem
					isActive={currentLanguage === "arm"}
					onClick={() => handleLanguageChange("arm")}
				>
					<Stack alignItems={"center"} direction={"row"}>
						<Typography sx={{ textTransform: "uppercase" }}>arm</Typography>
					</Stack>

					{currentLanguage === "arm" && (
						<CheckDoneIcon sx={{ color: "#D42530", width: "15%" }} />
					)}
				</Styled.StyledMenuItem>
			</Styled.StyledMenu>
		</>
	);
}

export default LanguageDropdown;
