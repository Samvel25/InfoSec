import * as React from "react";
import Footer from "./Footer";
import { Box, Container, Hidden, Stack, Typography } from "@mui/material";
import Header from "./Header/index";
import { Outlet } from "react-router-dom";
import { MenuOpenProvider } from "../context/MenuOpenContext";

const Layout = () => {
	return (
		<MenuOpenProvider>
			<Container maxWidth={"xl"}>
				<Header />
				<Box sx={{ mt: { xs: "20px", sm: "0" } }} className="main-wrapper">
					<Outlet />
				</Box>
				<Footer />
			</Container>
		</MenuOpenProvider>
	);
};

export default Layout;
