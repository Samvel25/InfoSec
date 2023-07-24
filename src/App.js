import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
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
		<Stack id="app" height={"100vh"} sx={{ overflowX: "hidden" }}>
			<CssBaseline />
			<RouterProvider router={router}>
				<ScrollToTop /> {/* Include it here */}
				<AnimateSharedLayout>
					<AnimatePresence mode="wait">
						<Outlet />
					</AnimatePresence>
				</AnimateSharedLayout>
			</RouterProvider>
		</Stack>
	);
}

export default App;
