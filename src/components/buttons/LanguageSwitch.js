import React, { useState } from "react";
import { Typography, Menu, MenuItem, Hidden, styled } from "@mui/material";
import { ReactComponent as Language } from "../../media/language.svg";
import { ReactComponent as ArrowDown } from "../../media/arrowDown.svg";
import { Stack } from "@mui/system";

import GradientButton from ".";

const StyledMenu = styled(Menu)(({ theme }) => ({
	"& .MuiPaper-root": {
		backgroundColor: "black",
		width: "200px",
		padding: theme.spacing(1),
		position: "relative",
		overflow: "hidden",
		marginTop: theme.spacing(2),
		"&:before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			backgroundImage: "conic-gradient(black 28%, #490005, #F10413, #D42530)",
			zIndex: 1,
			filter: "blur(15px)",
		},
		"& ul": {
			position: "relative",
			zIndex: 2,
			padding: 0,
			margin: 0,
		},
	},
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
	color: "white",
	padding: theme.spacing(2),
	justifyContent: "center",
}));

function DropdownButton() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedLanguage, setSelectedLanguage] = useState("eng");

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
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
						<ArrowDown />
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
					<ArrowDown />
				</Stack>
			</Hidden>
			<StyledMenu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				transformOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<StyledMenuItem onClick={() => handleLanguageChange("eng")}>
					<Typography>English</Typography>
				</StyledMenuItem>
				<StyledMenuItem onClick={() => handleLanguageChange("հայ")}>
					<Typography>Հայերեն</Typography>
				</StyledMenuItem>
				<StyledMenuItem onClick={() => handleLanguageChange("рус")}>
					<Typography>Русский</Typography>
				</StyledMenuItem>
			</StyledMenu>
		</>
	);
}

export default DropdownButton;
