// import { styled } from "@mui/material/styles";
import GradientButton from ".";
import { Typography, Menu, MenuItem, Hidden } from "@mui/material";
import { useState } from "react";
import { ReactComponent as Language } from "../../media/language.svg";
import { ReactComponent as ArrowDown } from "../../media/arrowDown.svg";

import { Stack } from "@mui/system";

function DropdownButton() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
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
						<Typography>asd</Typography>
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
					<Typography>ENG</Typography>
					<ArrowDown />
				</Stack>
			</Hidden>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleCloseMenu}
			>
				<MenuItem onClick={handleCloseMenu}>Dashboard</MenuItem>
				<MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
				<MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
			</Menu>
		</>
	);
}

export default DropdownButton;
