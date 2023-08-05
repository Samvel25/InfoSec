import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useTranslation, I18nextProvider } from "react-i18next"; // Import the provider and hook
import Layout from "./components/Layout/Layout";
import { Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import About from "./pages/About/index";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Certificates from "./pages/Certificates";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop"; // Import here
import Admin from "./pages/Admin";
import i18n from "./i18next";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "services",
				element: <Services />,
			},
			{
				path: "clients",
				element: <Clients />,
			},

			{
				path: "certificates",
				element: <Certificates />,
			},
			{
				path: "admin",
				element: <Admin />,
			},
		],
	},
]);

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			{" "}
			{/* Wrap your application with the provider */}
			<Stack id="app" height={"100vh"} sx={{ overflowX: "hidden" }}>
				<CssBaseline />
				<RouterProvider router={router}>
					<ScrollToTop />
					<AnimateSharedLayout>
						<AnimatePresence mode="wait">
							<Outlet />
						</AnimatePresence>
					</AnimateSharedLayout>
				</RouterProvider>
			</Stack>
		</I18nextProvider>
	);
}

export default App;
