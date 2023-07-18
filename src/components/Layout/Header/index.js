// import React, { useState } from "react";
// import { IconButton, Hidden, Stack, Typography, Box } from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
// import { useMenuOpen } from "../../context/MenuOpenContext";
// import Navigation from "./Navigation";
// import GradientButton from "../../Buttons/MainButton";
// import DropdownButton from "../../LanguageChange";
// import DrawerNavigation from "./DrawerNavigation ";
// import * as Styled from "./style";
// import MobileGreating from "./MobileHeaderGreetings";
// import Modal from "../../Modal";
// import LoginForm from "./LogIn";

// function Header() {
// 	const { ismenuopen, handleMenuToggle } = useMenuOpen();
// 	const [isModalOpen, setIsModalOpen] = useState(false);
// 	const [childComponent, setChildComponent] = useState(<></>);

// 	const handleModalButtonClick = (childComponent) => {
// 		setChildComponent(childComponent);
// 		setIsModalOpen((prev) => !prev);
// 	};

// 	return (
// 		<Styled.Boxx>
// 			<MobileGreating />
// 			<Styled.Header>
// 				<Stack
// 					direction="row"
// 					justifyContent="space-between"
// 					alignItems="center"
// 					spacing={2}
// 					sx={{ p: { sm: "16px 0", xs: "5px 0 1px" } }}
// 				>
// 					<Stack direction="row" spacing={{ lg: 6, md: 3 }} alignItems="center">
// 						<Hidden mdUp>
// 							<IconButton
// 								sx={{ mr: "15px" }}
// 								edge="start"
// 								color="inherit"
// 								aria-label="menu"
// 								onClick={handleMenuToggle}
// 							>
// 								<MenuIcon
// 									sx={{
// 										transform: ismenuopen ? "rotate(90deg)" : "rotate(0deg)",
// 										transition: "transform 0.3s ease-in-out",
// 									}}
// 								/>
// 							</IconButton>
// 						</Hidden>
// 						<Styled.LogoWrapper sx={{ display: "flex" }} href="/">
// 							<Styled.Logo />
// 						</Styled.LogoWrapper>
// 						<Hidden mdDown>
// 							<Navigation />
// 						</Hidden>
// 					</Stack>
// 					<Stack direction="row" spacing={3}>
// 						<Modal
// 							handleClose={setIsModalOpen}
// 							isopen={isModalOpen}
// 							childComponent={childComponent}
// 						/>
// 						<DropdownButton />
// 						<Hidden mdDown>
// 							<GradientButton
// 								onClick={() =>
// 									handleModalButtonClick(
// 										<LoginForm setIsModalOpen={setIsModalOpen} />
// 									)
// 								}
// 							>
// 								<Typography>clients area</Typography>
// 							</GradientButton>
// 						</Hidden>
// 						<Hidden mdUp>
// 							<Styled.UserLogo
// 								onClick={() =>
// 									handleModalButtonClick(
// 										<LoginForm setIsModalOpen={setIsModalOpen} />
// 									)
// 								}
// 								width={"20px"}
// 								height={"20px"}
// 							></Styled.UserLogo>
// 						</Hidden>
// 					</Stack>
// 					<Styled.BurgerMenu
// 						BackdropProps={{ invisible: true }}
// 						anchor="left"
// 						open={ismenuopen}
// 						onClose={handleMenuToggle}
// 						variant="temporary"
// 						ModalProps={{
// 							keepMounted: true,
// 						}}
// 					>
// 						<DrawerNavigation
// 							ismenuopen={ismenuopen}
// 							handleMenuClose={handleMenuToggle}
// 						/>
// 						<Styled.ContactNavigation>
// 							<GradientButton sx={{ width: "100%" }}>
// 								<Typography>clients area</Typography>
// 							</GradientButton>
// 							<Stack
// 								direction={"row"}
// 								justifyContent={"space-between"}
// 								sx={{ mt: "15px" }}
// 							>
// 								<Box>
// 									<Typography sx={{ color: "#C0C1C2" }} variant="ButtonNew">
// 										Email
// 									</Typography>
// 									<Typography
// 										href="mailto:infosec@gmail.com"
// 										sx={{ fontSize: "12px", mb: "0" }}
// 										variant="FooterHead"
// 										component={"a"}
// 									>
// 										infosec@gmail.com
// 									</Typography>
// 								</Box>
// 								<Box>
// 									<Typography sx={{ color: "#C0C1C2" }} variant="ButtonNew">
// 										Phone
// 									</Typography>
// 									<Typography
// 										href="tel:+374 066 666 666"
// 										sx={{ fontSize: "12px", mb: "0" }}
// 										variant="FooterHead"
// 										component={"a"}
// 									>
// 										+374 066 666 666
// 									</Typography>
// 								</Box>
// 							</Stack>
// 						</Styled.ContactNavigation>
// 					</Styled.BurgerMenu>
// 				</Stack>
// 			</Styled.Header>
// 		</Styled.Boxx>
// 	);
// }

// export default Header;

import React, { useState } from "react";
import {
	IconButton,
	Hidden,
	Stack,
	Typography,
	Box,
	Snackbar,
} from "@mui/material";
import { Alert } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useMenuOpen } from "../../context/MenuOpenContext";
import Navigation from "./Navigation";
import GradientButton from "../../Buttons/MainButton";
import DropdownButton from "../../LanguageChange";
import DrawerNavigation from "./DrawerNavigation ";
import * as Styled from "./style";
import MobileGreating from "./MobileHeaderGreetings";
import Modal from "../../Modal";
import LoginForm from "./LogIn";

function Header() {
	const { ismenuopen, handleMenuToggle } = useMenuOpen();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [alertOpen, setAlertOpen] = useState(false);
	const [childComponent, setChildComponent] = useState(<></>);

	const handleLoginSuccess = () => {
		setIsAuthenticated(true);
		setAlertOpen(true);
	};

	const handleModalButtonClick = (childComponent) => {
		setChildComponent(childComponent);
		setIsModalOpen((prev) => !prev);
	};

	return (
		<>
			<Styled.Boxx>
				<MobileGreating />
				<Styled.Header>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						spacing={2}
						sx={{ p: { sm: "16px 0", xs: "5px 0 1px" } }}
					>
						<Stack
							direction="row"
							spacing={{ lg: 6, md: 3 }}
							alignItems="center"
						>
							<Hidden mdUp>
								<IconButton
									sx={{ mr: "15px" }}
									edge="start"
									color="inherit"
									aria-label="menu"
									onClick={handleMenuToggle}
								>
									<MenuIcon
										sx={{
											transform: ismenuopen ? "rotate(90deg)" : "rotate(0deg)",
											transition: "transform 0.3s ease-in-out",
										}}
									/>
								</IconButton>
							</Hidden>
							<Styled.LogoWrapper sx={{ display: "flex" }} href="/">
								<Styled.Logo />
							</Styled.LogoWrapper>
							<Hidden mdDown>
								<Navigation />
							</Hidden>
						</Stack>
						<Stack direction="row" spacing={3}>
							<Modal
								handleClose={setIsModalOpen}
								isopen={isModalOpen}
								childComponent={childComponent}
							/>
							<DropdownButton />
							<Hidden mdDown>
								<GradientButton
									onClick={() =>
										handleModalButtonClick(
											<LoginForm
												setIsModalOpen={setIsModalOpen}
												onLoginSuccess={handleLoginSuccess}
											/>
										)
									}
								>
									<Typography>clients area</Typography>
								</GradientButton>
							</Hidden>
							<Hidden mdUp>
								<Styled.UserLogo
									onClick={() =>
										handleModalButtonClick(
											<LoginForm
												setIsModalOpen={setIsModalOpen}
												onLoginSuccess={handleLoginSuccess}
											/>
										)
									}
									width={"20px"}
									height={"20px"}
								></Styled.UserLogo>
							</Hidden>
						</Stack>
						<Styled.BurgerMenu
							BackdropProps={{ invisible: true }}
							anchor="left"
							open={ismenuopen}
							onClose={handleMenuToggle}
							variant="temporary"
							ModalProps={{
								keepMounted: true,
							}}
						>
							<DrawerNavigation
								ismenuopen={ismenuopen}
								handleMenuClose={handleMenuToggle}
							/>
							<Styled.ContactNavigation>
								<GradientButton sx={{ width: "100%" }}>
									<Typography>clients area</Typography>
								</GradientButton>
								<Stack
									direction={"row"}
									justifyContent={"space-between"}
									sx={{ mt: "15px" }}
								>
									<Box>
										<Typography sx={{ color: "#C0C1C2" }} variant="ButtonNew">
											Email
										</Typography>
										<Typography
											href="mailto:infosec@gmail.com"
											sx={{ fontSize: "12px", mb: "0" }}
											variant="FooterHead"
											component={"a"}
										>
											infosec@gmail.com
										</Typography>
									</Box>
									<Box>
										<Typography sx={{ color: "#C0C1C2" }} variant="ButtonNew">
											Phone
										</Typography>
										<Typography
											href="tel:+374 066 666 666"
											sx={{ fontSize: "12px", mb: "0" }}
											variant="FooterHead"
											component={"a"}
										>
											+374 066 666 666
										</Typography>
									</Box>
								</Stack>
							</Styled.ContactNavigation>
						</Styled.BurgerMenu>
					</Stack>
				</Styled.Header>
			</Styled.Boxx>
			<Snackbar
				open={alertOpen}
				autoHideDuration={6000}
				onClose={() => setAlertOpen(false)}
			>
				<Alert
					onClose={() => setAlertOpen(false)}
					severity="success"
					sx={{ width: "100%" }}
				>
					Successfully logged in!
				</Alert>
			</Snackbar>
		</>
	);
}

export default Header;
