import * as React from "react";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";
import Header from "./Header/index";
import WhyChooseUs from "../../pages/main";
import { Outlet } from "react-router-dom";
// import Header from "./header/index";

const Layout = () => {
	return (
		<Container maxWidth={"xl"}>
			<Header />
			<Box className="main-wrapper">
				<WhyChooseUs />
			</Box>
			<Footer />
			<Outlet />
		</Container>
	);
};

export default Layout;
