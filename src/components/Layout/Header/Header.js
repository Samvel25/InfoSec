// import { Stack } from "@mui/material";
import { AppBar } from "@mui/material";
import Navigation from "./Navigation";
// import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as LogoSvg } from "../../../media/Logo.svg";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

// import { theme } from "../../theme/theme";
// import { ThemeProvider } from "@mui/material/styles";
import GradientButton from "../../button";

function Header() {
	return (
		<AppBar position="static">
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				spacing={2}
				sx={{ py: "16px" }}
			>
				<Stack direction="row" spacing={6}>
					<LogoSvg />
					<Navigation />
				</Stack>
				<GradientButton type="primary" variant="contained">
					<Typography>clients area</Typography>
				</GradientButton>
				<GradientButton variant="contained">
					<Typography>clients area</Typography>
				</GradientButton>
			</Stack>
		</AppBar>
	);
}
export default Header;
