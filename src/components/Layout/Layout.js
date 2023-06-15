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
import { Box, Container } from "@mui/material";
import Header from "./Header/index";
import { Outlet } from "react-router-dom";
import { MenuOpenProvider } from "../context/MenuOpenContext";

const Layout = () => {
	return (
		<MenuOpenProvider>
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
