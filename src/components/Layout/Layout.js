import * as React from "react";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";
import Header from "./Header/index";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<Container maxWidth={"xl"}>
			<Header />
			<Box className="main-wrapper">
				<Outlet />
			</Box>
			<Footer />
		</Container>
	);
};

export default Layout;
