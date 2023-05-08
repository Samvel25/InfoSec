import { styled } from "@mui/material/styles";
import GradientButton from "../buttons/button";
import { Typography, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { ReactComponent as Language } from "../../media/language.svg";
import { ReactComponent as ArrowDown } from "../../media/arrowDown.svg";

import { Stack } from "@mui/system";

const GrayBorder = styled(GradientButton)({
	"&:before": {
		background: "#C0C1C2 !important",
		// display: "flex",
	},
});

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
			<GrayBorder onClick={handleOpenMenu}>
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
			</GrayBorder>
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
