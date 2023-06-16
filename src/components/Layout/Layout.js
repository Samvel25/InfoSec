// const Layout = () => {
// 	return (
// 		<MenuOpenProvider>
// 			<Container maxWidth={"xl"}>
// 				<Header />
// 				<Box className="main-wrapper">
// 					<Outlet />
// 				</Box>
// 				<Footer />
// 			</Container>
// 		</MenuOpenProvider>
// 	);
// };

// export default Layout;

// Rest of your imports...

import * as React from "react";
import Footer from "./Footer";
import { Box, Container, Hidden, Stack, Typography } from "@mui/material";
import Header from "./Header/index";
import { Outlet } from "react-router-dom";
import { MenuOpenProvider } from "../context/MenuOpenContext";

const Layout = () => {
	return (
		<MenuOpenProvider>
			<Hidden smUp>
				<Stack
					direction={"row"}
					justifyContent={"center"}
					sx={{ height: "50px", width: "100%", background: "#1F1F1F" }}
				>
					<Typography sx={{ color: "#D9D9D9", py: "5px" }}>
						Welcome to Infosec LLC
					</Typography>
				</Stack>
			</Hidden>
			<Container maxWidth={"xl"}>
				<Header />
				<Box className="main-wrapper">
					<Outlet />
				</Box>
				<Footer />
			</Container>
		</MenuOpenProvider>
	);
};

export default Layout;
