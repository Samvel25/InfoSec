import React, { useState } from "react";
import {
	Typography,
	Menu,
	MenuItem,
	Hidden,
	styled,
	keyframes,
} from "@mui/material";
import { ReactComponent as Language } from "../../media/language.svg";
import { ReactComponent as ArrowDown } from "../../media/arrowDown.svg";
import { Stack } from "@mui/system";

import GradientButton from ".";

const Animation = keyframes`
0% {
  background-image: radial-gradient(farthest-corner, black 70%, #490005, #F10413, #D42530);
}

5% {
  background-image: radial-gradient(farthest-corner, black 67%, #490005, #F10413, #D42530);
}

10% {
  background-image: radial-gradient(farthest-corner, black 65%, #490005, #F10413, #D42530);
}

15% {
  background-image: radial-gradient(farthest-corner, black 62%, #490005, #F10413, #D42530);
}

20% {
  background-image: radial-gradient(farthest-corner, black 60%, #490005, #F10413, #D42530);
}

25% {
  background-image: radial-gradient(farthest-corner, black 57%, #490005, #F10413, #D42530);
}

30% {
  background-image: radial-gradient(farthest-corner, black 55%, #490005, #F10413, #D42530);
}

35% {
  background-image: radial-gradient(farthest-corner, black 52%, #490005, #F10413, #D42530);
}

40% {
  background-image: radial-gradient(farthest-corner, black 50%, #490005, #F10413, #D42530);
}

45% {
  background-image: radial-gradient(farthest-corner, black 47%, #490005, #F10413, #D42530);
}

50% {
  background-image: radial-gradient(farthest-corner, black 46%, #490005, #F10413, #D42530);
}

55% {
  background-image: radial-gradient(farthest-corner, black 45%, #490005, #F10413, #D42530);
}

60% {
  background-image: radial-gradient(farthest-corner, black 47%, #490005, #F10413, #D42530);
}

65% {
  background-image: radial-gradient(farthest-corner, black 50%, #490005, #F10413, #D42530);
}

72% {
  background-image: radial-gradient(farthest-corner, black 55%, #490005, #F10413, #D42530);
}

77% {
  background-image: radial-gradient(farthest-corner, black 58%, #490005, #F10413, #D42530);
}

84% {
  background-image: radial-gradient(farthest-corner, black 63%, #490005, #F10413, #D42530);
}

90% {
  background-image: radial-gradient(farthest-corner, black 68%, #490005, #F10413, #D42530);
}

97% {
  background-image: radial-gradient(farthest-corner, black 72%, #490005, #F10413, #D42530);
}

100% {
  background-image: radial-gradient(farthest-corner, black 70%, #490005, #F10413, #D42530);

}
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
`;

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
			// backgroundImage: "conic-gradient(black 28%, #490005, #F10413, #D42530)",
			animation: `${Animation} 1.5s infinite`,
			backgroundImage:
				"radial-gradient(farthest-corner, black 50%, #490005, #F10413, #D42530)", // increased black part of radial gradient
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
