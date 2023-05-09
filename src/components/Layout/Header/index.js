// import { Stack } from "@mui/material";
// import { AppBar } from "@mui/material";
import Navigation from "./Navigation";
import { ReactComponent as LogoSvg } from "../../../media/Logo.svg";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import GradientButton from "../../Buttons";
import DropdownButton from "../../Buttons/dropdownButton";
import * as Styled from "./style";

function Header() {
	return (
		<Styled.Header position="static">
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				spacing={2}
				sx={{ py: "16px" }}
			>
				<Stack direction="row" spacing={6}>
					<LogoSvg width="182px" height="39px" />
					<Navigation />
				</Stack>
				<Stack direction="row" spacing={3}>
					<DropdownButton variant="contained"></DropdownButton>
					<GradientButton variant="contained">
						<Typography>clients area</Typography>
					</GradientButton>
				</Stack>
			</Stack>
		</Styled.Header>
	);
}
export default Header;