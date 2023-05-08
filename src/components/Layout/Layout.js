import * as React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";
import WhyChooseUs from "../main/whyChooseUsSection";

const Layout = () => {
	return (
		<Container maxWidth={"lg"}>
			<Header />
			<Box className="main-wrapper">
				<WhyChooseUs />
			</Box>
			<Footer />
		</Container>
	);
};

export default Layout;
