import Root from "./routes/Root";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import About from "./pages/About/index";
// import { ThemeProvider } from "@mui/material/styles";
// import { theme } from "./theme/theme";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Root />,
			},
			{
				path: "/about", // Update the path to "/about" by adding a leading slash
				element: <About />,
			},
		],
	},
]);

function App() {
	return (
		// <ThemeProvider theme={theme}>
		<Stack id="app" height={"100vh"}>
			<CssBaseline />
			<RouterProvider router={router} />
		</Stack>
		// </ThemeProvider>
	);
}

export default App;
