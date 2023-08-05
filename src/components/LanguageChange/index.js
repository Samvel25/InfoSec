import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import GradientButton from "../Buttons/MainButton";
import * as Styled from "./style";
import CustomHidden from "../Hidden";
import CheckDoneIcon from "@mui/icons-material/Done";
import { ReactComponent as ArmenianFlag } from "../../media/svg/LanguageFlag/armenianFlag.svg";
import { ReactComponent as RussianFlag } from "../../media/svg/LanguageFlag/russianFlag.svg";
import { ReactComponent as UKFlag } from "../../media/svg/LanguageFlag/ukFlag.svg";
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
				spacing={2}
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
						<UKFlag width={"32px"} height={"32px"} />

						<Typography>English</Typography>
					</Stack>
					{currentLanguage === "en" && <CheckDoneIcon />}
				</Styled.StyledMenuItem>

				<Styled.StyledMenuItem
					isActive={currentLanguage === "ru"}
					onClick={() => handleLanguageChange("ru")}
				>
					<Stack alignItems={"center"} direction={"row"}>
						<RussianFlag width={"32px"} height={"32px"} />
						<Typography>Russian</Typography>
					</Stack>

					{currentLanguage === "ru" && <CheckDoneIcon />}
				</Styled.StyledMenuItem>

				<Styled.StyledMenuItem
					isActive={currentLanguage === "arm"}
					onClick={() => handleLanguageChange("arm")}
				>
					<Stack alignItems={"center"} direction={"row"}>
						<ArmenianFlag width={"32px"} height={"32px"} />

						<Typography>Armenian</Typography>
					</Stack>

					{currentLanguage === "arm" && <CheckDoneIcon />}
				</Styled.StyledMenuItem>
			</Styled.StyledMenu>
		</>
	);
}

export default LanguageDropdown;
