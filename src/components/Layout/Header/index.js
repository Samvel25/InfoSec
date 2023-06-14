import Navigation from "./Navigation";
import { ReactComponent as LogoSvg } from "../../../media/logo/Logo.svg";
import { Stack, Typography, IconButton, Hidden } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import GradientButton from "../../Buttons";
import DropdownButton from "../../Buttons/LanguageSwitch";
import * as Styled from "./style";
import { useState } from "react";
import DrawerNavigation from "./DrawerNavigation ";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Styled.Header position="static">
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				spacing={2}
				sx={{ py: "16px" }}
			>
				<Stack direction="row" spacing={{ lg: 6, md: 3 }} alignItems="center">
					<Hidden mdUp>
						<IconButton
							sx={{ mr: "15px" }}
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={handleMenuToggle}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Styled.Logo sx={{ display: "flex" }} href="/">
						<LogoSvg width="182px" height="39px" />
					</Styled.Logo>
					<Hidden mdDown>
						<Navigation />
					</Hidden>
				</Stack>
				<Stack direction="row" spacing={3}>
					<DropdownButton />
					<Hidden mdDown>
						<GradientButton>
							<Typography>clients area</Typography>
						</GradientButton>
					</Hidden>
					<Hidden mdUp>
						<Styled.UserLogo width={"20px"} height={"20px"}></Styled.UserLogo>
					</Hidden>
				</Stack>
				<Styled.BurgerMenu
					anchor="left"
					open={isMenuOpen}
					onClose={handleMenuToggle}
					variant="temporary"
					ModalProps={{
						keepMounted: true,
					}}
				>
					<DrawerNavigation isMenuOpen={isMenuOpen} />
				</Styled.BurgerMenu>
			</Stack>
		</Styled.Header>
	);
}

export default Header;
