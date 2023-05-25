import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import About from "./pages/About/index";
import Home from "./pages/Home";

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
				path: "about", // Update the path to "/about" by adding a leading slash
				element: <About />,
			},
		],
	},
]);

function App() {
	return (
		<Stack id="app" height={"100vh"}>
			<CssBaseline />
			<RouterProvider router={router} />
		</Stack>
	);
}

export default App;
