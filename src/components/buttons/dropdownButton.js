import { styled } from "@mui/material/styles";
import GradientButton from "../buttons/button";
import { Typography, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const GrayBorder = styled(GradientButton)({
	"&:before": {
		background: "#C0C1C2 !important",
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
				<Typography>asd</Typography>
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
