import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Routes,
	Route,
} from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { I18nextProvider } from "react-i18next";
import Layout from "./components/Layout/Layout";
import { Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import About from "./pages/About/index";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Certificates from "./pages/Certificates";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import i18n from "./i18next";
import ScrollToTop from "./routes/ScrollToTop";
import SignIn from "./pages/SignIn";
import CookieBanner from "./components/CookieBanner";

const routes = [
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
				path: "signin",
				element: <SignIn />,
			},
			{
				path: "admin",
				// element: <PrivateRoute element={<Admin />} />,
				element: <Admin />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<Stack id="app" height={"100vh"} sx={{ overflowX: "hidden" }}>
				<CssBaseline />
				<CookieBanner />

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
