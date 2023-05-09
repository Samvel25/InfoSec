import * as React from "react";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";
import Header from "./Header";
import WhyChooseUs from "../../pages/main/index";
// import Header from "./header/index";

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
